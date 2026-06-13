## Visual direction

Hybrid: LaTeX-grade typography as the backbone, monospace/terminal flourishes as accents.

- **Type system**: serif body (EB Garamond or Crimson Pro — Computer Modern–adjacent, web-safe), JetBrains Mono for code/tags/UI chrome, small-caps for section headings. Tight measure (~68ch), generous leading.
- **Color**: paper-white `#fbfaf6` background, near-black `#16161a` ink, single muted accent (deep crimson `#7a1f1f`, LaTeX-link feel). Dark mode flips to soft cream-on-charcoal. No gradients, no shadows.
- **Layout**: single column, left-aligned. Section numbering (`§1`, `§2`) like a paper. Horizontal hairline rules. Footnote-style citations for sources/links.
- **Terminal accents**: `$ ` prompt before the tagline, blinking caret on hero, `[python]` `[airflow]` bracket-style skill tags, ASCII-rule dividers between major sections, subtle `~/projects/` breadcrumb on subpages. Used sparingly — typography leads.
- **Motion**: none beyond a 600ms caret blink and instant page transitions. No scroll-jacking.

## Information architecture

```
/                  Hero + abstract + at-a-glance (current "About")
/cv                Full CV: experience, education, certifications, awards
/projects          Projects + repo highlights with tags and live demo links
/tools             Index of in-house tools
/tools/ceu-feedback        Ported from current site
/tools/pdf-to-word         Ported (client-side, uses pdf.js + docx)
/tools/unibridge           Ported, with sub-pages: housing, insurance, visa, admin
```

Tools are rebuilt as native TanStack routes (not iframes). Existing client-side JS (PDF→Word) gets reimplemented in TS; Unibridge mockups become an image gallery + i18n toggle.

## Stack & infrastructure

- TanStack Start (existing template) — file-based routes, SSR for SEO.
- Content stored as typed TS modules in `src/content/` (`experience.ts`, `education.ts`, `projects.ts`, `tools.ts`) so it's trivial to update without a DB. No Lovable Cloud needed.
- CV PDF: replace `html2pdf.js` with a print-stylesheet (`@media print`) approach so users get a crisp, real PDF via the browser's "Save as PDF". One-click "Download CV" button triggers `window.print()` on `/cv`.
- Repos: fetch `https://api.github.com/users/balintdecsi/repos` at build time via a server function, cache in a loader, render pinned/starred ones on `/projects`.
- Domain: `balintdecsi.dev` wired into canonical URLs, `og:url`, sitemap, and robots.

## Pages — what each contains

**`/` (Home)**
- Hero: name in display serif, monospace tagline with `$` prompt and caret, 3–4 line abstract.
- "At a glance" as a definition list (`<dl>`) — role, also, education, location.
- Bracket-tag skill cloud.
- Footnote-style links: GitHub, LinkedIn, Email, View CV.

**`/cv`**
- Header with portrait + contact line.
- Numbered sections: Experience, Education, Certifications, Awards. Each role: title, org (linked), date range, location, bullets, bracket tags.
- Sticky "Download PDF" button (uses print stylesheet).

**`/projects`**
- Featured projects with screenshots/demos and live links (Proximata, mesh comic SaaS, Unibridge, etc.).
- "Open source & experiments" — auto-listed GitHub repos with language, stars, last-updated, link.

**`/tools`** and tool sub-routes
- Index page listing each tool with one-line description.
- Each tool ported into its own route, restyled to match the design system.

## Step-by-step build

1. Add fonts (EB Garamond + JetBrains Mono via `<link>` in `__root.tsx`) and rewrite `src/styles.css` tokens for the LaTeX/terminal palette and typography scale.
2. Build shared primitives: `<Section>` (numbered heading + hairline), `<BracketTag>`, `<Prompt>` (terminal `$` with blink), `<FootnoteLink>`, `<DefinitionList>`.
3. Create content modules in `src/content/` from the existing repo's `cv.html` and `projects.html`. Copy `profile.jpg` and tool assets into `src/assets/`.
4. Implement routes `/`, `/cv`, `/projects`, `/tools`, `/tools/*` with proper `head()` per route (title, description, og:title/description/url, canonical, JSON-LD `Person` on `/`).
5. Print stylesheet for `/cv` → single-column, no nav/buttons, black ink on white, page-break rules. Replace `html2pdf.js` button with `window.print()`.
6. Port tools:
   - CEU Feedback → React form, same fields, restyled.
   - PDF→Word → reuse `pdf.js` + `docx` libs as ES modules; client-only component (`'use client'`-style guard / dynamic import) since they touch `window`.
   - Unibridge → multi-route mini-site with i18n via simple context (EN/HU), image gallery, video embed.
7. Add `public/robots.txt`, `src/routes/sitemap[.]xml.ts` server route, and a `Person` + `WebSite` JSON-LD block.
8. Theme toggle (light/dark) persisted in `localStorage`; honor `prefers-color-scheme`.
9. 404 + error boundaries get a terminal-style "command not found" treatment.
10. Final pass: Lighthouse, alt text on portrait + mockups, semantic landmarks, verify print output, confirm all external links open in new tab with `rel="noopener"`.

## Out of scope (call out so you can confirm)

- Blog / writing section — not in current site, not adding unless you want it.
- Analytics — not adding by default.
- Contact form with backend — current site uses `mailto:`, keeping that (no Lovable Cloud needed).

After you approve, switch to Build mode and I'll execute steps 1–10.
