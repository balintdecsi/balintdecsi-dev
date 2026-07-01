# Tools

The `/tools` page is a tiled index of small utilities ported from the old
GitHub Pages site. Each tool is a standalone static site served directly
from [`public/tools/`](../public/tools).

| Tool | URL | Source |
| --- | --- | --- |
| CEU Feedback | `/tools/ceu-feedback/index.html` | `public/tools/ceu-feedback/` |
| PDF → Word | `/tools/pdf-to-word/index.html` | `public/tools/pdf-to-word/` |
| Unibridge | `/tools/unibridge/index.html` | `public/tools/unibridge/` |

## Why static HTML instead of React routes

The tools are self-contained legacy pages (their own CSS/JS, some using
`pdf.js` + `docx.js` client-side). Serving them from `public/` keeps them
isolated from the React app's bundle and routing.

## Linking

Tiles in [`src/routes/tools.tsx`](../src/routes/tools.tsx) must link to the
explicit `index.html` (e.g. `/tools/pdf-to-word/index.html`). Trailing-slash
URLs like `/tools/pdf-to-word/` get intercepted by the TanStack Router SPA
and 404. Do not shorten the links.

## Thumbnails

Thumbnails are static screenshots imported from `src/assets/tools/`. To
refresh them, capture a new PNG (e.g. via Playwright) and drop it in place
with the same filename.

## Adding a new tool

1. Drop the static site under `public/tools/<slug>/` with an `index.html`.
2. Add a thumbnail PNG to `src/assets/tools/<slug>.png`.
3. Add a tile to the `TOOLS` array in `src/routes/tools.tsx` linking to
   `/tools/<slug>/index.html`.
4. Add the URL to [`public/llms.txt`](../public/llms.txt) and to
   [`src/routes/sitemap[.]xml.ts`](../src/routes/sitemap[.]xml.ts).