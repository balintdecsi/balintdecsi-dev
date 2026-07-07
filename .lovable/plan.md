## Why the current PDF is hard to parse

The "Download PDF" button calls `window.print()` against the print stylesheet in `src/styles.css`. The result is whatever the user's browser produces, and several things stack up against downstream tools (ATS, `pdftotext`, LLM parsers):

- **Web fonts without proper ToUnicode maps.** The body font is EB Garamond (loaded as a web font). When the browser embeds/subsets it into the PDF, the ToUnicode CMap can be incomplete, so copy/extract yields � or wrong characters — especially for ligatures (`fi`, `fl`, `ﬀ`) and accented Hungarian glyphs (`é`, `ő`, `ű`).
- **Ligatures and small-caps** collapse multiple letters into one glyph id; without ToUnicode, extractors read "oce" instead of "office".
- **Reading order** depends on the browser's layout tree. Flex/grid headers (photo + name on one row), bracket tags, and inline separators (`·`) can be emitted out of order, so parsers see interleaved fragments.
- **No tagged PDF / no document structure.** `window.print()` in Chrome/Safari produces untagged PDFs by default. ATS tools that rely on structure tags (headings, lists) get a flat text blob.
- **Output varies per browser and per user setting** ("Headers and footers", "Background graphics", Safari vs Chrome vs Firefox), so we can't guarantee a good file.

## Fix

Stop relying on the browser's print pipeline for the downloadable CV. Generate the PDF ourselves from the same typed data in `src/content/cv.ts`, using `@react-pdf/renderer` with a font that has a clean Unicode mapping (Latin + Hungarian). This gives:

- Deterministic output identical for every visitor.
- Real text (no rasterization), no ligature substitution issues, full Hungarian diacritics.
- Logical reading order (top-to-bottom, single column) — parsable by ATS and `pdftotext`.
- No dependency on print CSS quirks.

### Scope of changes

1. Add `@react-pdf/renderer` as a dependency.
2. New file `src/lib/cv-pdf.tsx` — a small React-PDF document that renders `experience`, `education`, `certifications`, `awards` from `src/content/cv.ts`. Uses a bundled TTF (e.g. a Garamond-family or a widely-parsable serif like Source Serif) registered via `Font.register` so the PDF ships with a clean ToUnicode map.
3. Update `src/routes/cv.tsx`:
   - Replace the `window.print()` handler with an async click that dynamically imports `cv-pdf.tsx`, calls `pdf(<CvDoc />).toBlob()`, and triggers a download of `Balint-Decsi-CV.pdf`.
   - Keep the "include profile picture" checkbox — pass the flag into the document; embed the JPG via `<Image>` when checked.
4. Keep the existing print stylesheet as a fallback for users who hit browser print (Ctrl/⌘-P) — no removal, just no longer the primary path.
5. No changes to `cv.ts` content shape; the on-screen route is untouched.

### Technical notes

- `@react-pdf/renderer` runs client-side; dynamic-import the module inside the click handler so the ~200 KB dep isn't in the initial route bundle.
- Register a TTF from `src/assets/fonts/` (or a small subset from Google Fonts served as static asset) to guarantee ligature-free extraction. Turn off ligatures explicitly (`fontFeatureSettings` isn't a thing in react-pdf, but the font choice + absence of `liga` in the TTF handles it).
- Single-column layout, ~11pt body, 25mm margins to match the on-screen "academic" feel.
- Profile picture rendered via `<Image src={profile} />` only when the checkbox is on.
- No server function needed — pure client-side generation, works on the static build.

### Out of scope

- No redesign of the on-screen CV.
- No changes to other routes or the print CSS beyond what's needed for the fallback.
- No server-side PDF endpoint (can be added later if headless-Chromium output is preferred).
