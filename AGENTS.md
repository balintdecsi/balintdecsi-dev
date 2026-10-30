
- The site is localized by URL prefix (/hu, /de, /es; English at /). UI copy lives in src/content/i18n/ui.ts and translated CV text in src/content/i18n/content.ts as index-aligned overrides of cv.ts/work.ts — why: one source for links/tags, translations can never drift in structure. Add new CV entries in all four languages.
- Non-English CV PDFs embed the bundled Tinos font (src/assets/fonts) because the built-in Times font lacks Hungarian ő/ű.
