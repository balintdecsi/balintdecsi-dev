(function () {
  'use strict';

  // ── Hungarian OCR text cleaning (port of clean_text.py) ─────────────

  var HUNGARIAN_LOWER = 'íéáűúóöő';

  function startsWithLower(s) {
    if (!s) return false;
    var ch = s[0];
    return (ch >= 'a' && ch <= 'z') || HUNGARIAN_LOWER.indexOf(ch) !== -1;
  }

  function cleanText(text) {
    text = text.replace(/--- Page \d+ ---\n?/g, '');

    text = text.replace(/vág[)7rj]/g, 'vagy');
    text = text.replace(/hogy[7rj]/g, 'hogy');
    text = text.replace(/vagy[7rj]/g, 'vagy');
    text = text.replace(/szeméi\}'/g, 'személy');
    text = text.replace(/gj\^akran/g, 'gyakran');
    text = text.replace(/eg\)7/g, 'egy');
    text = text.replace(/eg7/g, 'egy');
    text = text.replace(/hogy7/g, 'hogy');
    text = text.replace(/vagy7/g, 'vagy');
    text = text.replace(/vagy- /g, 'vagy ');
    text = text.replace(/hogy- /g, 'hogy ');
    text = text.replace(/nőnverbális/g, 'nonverbális');
    text = text.replace(/ísmerősség/g, 'ismerősség');
    text = text.replace(/ísmeret/g, 'ismeret');

    text = text.replace(
      /\b(hogy|vagy|mely|bármely|amily|valamily|oly|egypár|vág)[7r)\}\]]/g,
      '$1y'
    );
    text = text.replace(/y7/g, 'y');

    var blocks = text.split(/(\n\s*\n)/);
    var cleanedBlocks = [];

    for (var bi = 0; bi < blocks.length; bi++) {
      var block = blocks[bi];
      if (/^\n\s*\n$/.test(block)) {
        cleanedBlocks.push('\n\n');
        continue;
      }

      var lines = block.split('\n')
        .map(function (l) { return l.trim(); })
        .filter(function (l) { return l.length > 0; });

      if (lines.length === 0) continue;

      var joinedPara = '';
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.endsWith('\u00ad') || line.endsWith('-')) {
          if (line.endsWith('\u00ad')) {
            joinedPara += line.slice(0, -1);
          } else {
            var nextStartsLower =
              i + 1 < lines.length && startsWithLower(lines[i + 1]);
            if (nextStartsLower) {
              joinedPara += line.slice(0, -1);
            } else {
              joinedPara += line + (i < lines.length - 1 ? ' ' : '');
            }
          }
        } else {
          joinedPara += line + (i < lines.length - 1 ? ' ' : '');
        }
      }

      joinedPara = joinedPara.replace(
        /\((?![0-9]\. fejezet)[^)]*(18|19|20)\d{2}[^)]*\)/g,
        ''
      );

      joinedPara = joinedPara.replace(/^& /, '');
      joinedPara = joinedPara.replace(/ & /g, ' ');

      if (/^[^a-zA-Z0-9\s\u00C0-\u024F]{4,}$/.test(joinedPara)) continue;
      var symbolCount = (joinedPara.match(/[/\^<>;:!_]/g) || []).length;
      if (symbolCount > joinedPara.length * 0.3) continue;

      joinedPara = joinedPara.replace(/ +/g, ' ');
      joinedPara = joinedPara.replace(/ ([.,;?!])/g, '$1');

      cleanedBlocks.push(joinedPara.trim());
    }

    var result = cleanedBlocks.join('');
    result = result.replace(/\n[^a-zA-Z0-9\s\u00C0-\u024F]{3,}\n/g, '\n\n');
    result = result.replace(/\?tcl<[^\n]+/g, '');
    result = result.replace(/\n\n+/g, '\n\n');

    return result.trim();
  }

  // ── PDF text extraction (port of extract_text.py) ───────────────────

  function groupIntoBlocks(items, pageHeight) {
    if (items.length === 0) return [];

    var positioned = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.str.trim().length === 0) continue;
      var fontSize = Math.abs(item.transform[3]) || 12;
      positioned.push({
        text: item.str,
        x: item.transform[4],
        y: pageHeight - item.transform[5],
        width: item.width || 0,
        height: fontSize,
      });
    }

    positioned.sort(function (a, b) { return a.y - b.y || a.x - b.x; });

    var lines = [];
    var currentLine = null;
    for (var pi = 0; pi < positioned.length; pi++) {
      var p = positioned[pi];
      var threshold = (p.height || 12) * 0.5;
      if (!currentLine || Math.abs(p.y - currentLine.y) > threshold) {
        currentLine = { y: p.y, height: p.height, items: [p] };
        lines.push(currentLine);
      } else {
        currentLine.items.push(p);
      }
    }

    for (var li = 0; li < lines.length; li++) {
      lines[li].items.sort(function (a, b) { return a.x - b.x; });
    }

    var blockList = [];
    var currentBlock = null;
    for (var lj = 0; lj < lines.length; lj++) {
      var line = lines[lj];
      var lineHeight = line.height || 12;
      if (!currentBlock) {
        currentBlock = { lines: [line], lastY: line.y, lastHeight: line.height };
        blockList.push(currentBlock);
      } else {
        var gap = line.y - currentBlock.lastY - currentBlock.lastHeight;
        if (gap > lineHeight * 1.2) {
          currentBlock = { lines: [line], lastY: line.y, lastHeight: line.height };
          blockList.push(currentBlock);
        } else {
          currentBlock.lines.push(line);
          currentBlock.lastY = line.y;
          currentBlock.lastHeight = line.height;
        }
      }
    }

    return blockList.map(function (block) {
      var allItems = [];
      block.lines.forEach(function (l) { allItems = allItems.concat(l.items); });
      var blockText = block.lines
        .map(function (l) {
          return l.items.map(function (it) { return it.text; }).join(' ');
        })
        .join('\n');

      return {
        text: blockText,
        x0: Math.min.apply(null, allItems.map(function (it) { return it.x; })),
        y0: block.lines[0].y,
        x1: Math.max.apply(null, allItems.map(function (it) { return it.x + it.width; })),
        y1: block.lastY + block.lastHeight,
      };
    });
  }

  async function extractTextGeneral(pdf, onProgress) {
    var allText = [];
    for (var i = 1; i <= pdf.numPages; i++) {
      if (onProgress) onProgress('Reading page ' + i + ' of ' + pdf.numPages + '\u2026');
      var page = await pdf.getPage(i);
      var viewport = page.getViewport({ scale: 1 });
      var content = await page.getTextContent();
      var blocks = groupIntoBlocks(content.items, viewport.height);

      blocks.sort(function (a, b) { return a.y0 - b.y0 || a.x0 - b.x0; });

      var pageText = blocks
        .filter(function (b) { return b.text.trim().length >= 2; })
        .map(function (b) { return b.text.trim(); });

      if (pageText.length) allText.push(pageText.join('\n\n'));
    }
    return allText.join('\n\n');
  }

  async function extractTextColumn(pdf, onProgress) {
    var allText = [];
    for (var i = 1; i <= pdf.numPages; i++) {
      if (onProgress) onProgress('Reading page ' + i + ' of ' + pdf.numPages + '\u2026');
      var page = await pdf.getPage(i);
      var viewport = page.getViewport({ scale: 1 });
      var content = await page.getTextContent();
      var blocks = groupIntoBlocks(content.items, viewport.height);

      blocks.sort(function (a, b) { return a.y0 - b.y0; });

      var pageText = [];
      for (var bi = 0; bi < blocks.length; bi++) {
        var b = blocks[bi];
        var width = b.x1 - b.x0;
        if (width > 350 || width < 20 || b.text.trim().length < 2) continue;

        var isMain = false;
        var pageIdx = i - 1;
        if (pageIdx % 2 === 0) {
          if (b.x0 < 100 && b.x1 < 345) isMain = true;
        } else {
          if (b.x0 > 140) isMain = true;
        }

        if (isMain) pageText.push(b.text.trim());
      }

      if (pageText.length) allText.push(pageText.join('\n\n'));
    }
    return allText.join('\n\n');
  }

  // ── DOCX generation ─────────────────────────────────────────────────

  async function generateDocx(text) {
    var paragraphs = text.split('\n\n')
      .map(function (p) { return p.trim(); })
      .filter(function (p) { return p.length > 0; });

    var doc = new docx.Document({
      sections: [{
        children: paragraphs.map(function (p) {
          return new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: p,
                font: 'Calibri',
                size: 24,
              }),
            ],
          });
        }),
      }],
    });

    return docx.Packer.toBlob(doc);
  }

  // ── UI wiring ───────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    var dropZone = document.getElementById('drop-zone');
    var fileInput = document.getElementById('file-input');
    var fileInfo = document.getElementById('file-info');
    var fileNameEl = document.getElementById('file-name');
    var fileRemove = document.getElementById('file-remove');
    var dropPrompt = document.getElementById('drop-prompt');
    var columnDetect = document.getElementById('column-detect');
    var convertBtn = document.getElementById('convert-btn');
    var statusEl = document.getElementById('status');
    var spinnerEl = document.getElementById('spinner');
    var statusText = document.getElementById('status-text');

    var selectedFile = null;

    function showFile(file) {
      selectedFile = file;
      fileNameEl.textContent = file.name;
      dropPrompt.hidden = true;
      fileInfo.hidden = false;
      convertBtn.disabled = false;
      hideStatus();
    }

    function clearFile() {
      selectedFile = null;
      fileInput.value = '';
      dropPrompt.hidden = false;
      fileInfo.hidden = true;
      convertBtn.disabled = true;
      hideStatus();
    }

    function showStatus(msg, type) {
      statusEl.hidden = false;
      statusEl.className = 'tool-status' + (type ? ' ' + type : '');
      spinnerEl.hidden = type === 'error' || type === 'success';
      statusText.textContent = msg;
    }

    function hideStatus() {
      statusEl.hidden = true;
      statusText.textContent = '';
    }

    dropZone.addEventListener('click', function (e) {
      if (e.target.closest('#file-remove')) return;
      fileInput.click();
    });

    dropZone.addEventListener('dragover', function (e) {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', function () {
      dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', function (e) {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      var files = e.dataTransfer.files;
      if (files.length && files[0].name.toLowerCase().endsWith('.pdf')) {
        showFile(files[0]);
      } else {
        showStatus('Please drop a PDF file.', 'error');
      }
    });

    fileInput.addEventListener('change', function () {
      if (fileInput.files.length) showFile(fileInput.files[0]);
    });

    fileRemove.addEventListener('click', function (e) {
      e.stopPropagation();
      clearFile();
    });

    convertBtn.addEventListener('click', async function () {
      if (!selectedFile) return;
      convertBtn.disabled = true;

      try {
        showStatus('Reading PDF\u2026', '');

        var arrayBuffer = await selectedFile.arrayBuffer();
        var pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        var rawText;
        if (columnDetect.checked) {
          rawText = await extractTextColumn(pdf, function (msg) { showStatus(msg, ''); });
        } else {
          rawText = await extractTextGeneral(pdf, function (msg) { showStatus(msg, ''); });
        }

        if (!rawText.trim()) {
          showStatus(
            'No text found in the PDF. Make sure it has an embedded text layer.',
            'error'
          );
          convertBtn.disabled = false;
          return;
        }

        showStatus('Cleaning text\u2026', '');
        await new Promise(function (r) { setTimeout(r, 0); });
        var cleaned = cleanText(rawText);

        showStatus('Creating Word document\u2026', '');
        var blob = await generateDocx(cleaned);

        var baseName = selectedFile.name.replace(/\.pdf$/i, '');
        var downloadName = baseName + '_tts.docx';

        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = downloadName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);

        showStatus('Done \u2014 download started for ' + downloadName, 'success');
      } catch (err) {
        showStatus('Error: ' + err.message, 'error');
      }

      convertBtn.disabled = false;
    });
  });
})();
