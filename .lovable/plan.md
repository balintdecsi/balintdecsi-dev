
## Goal

Add a tile in `/featured` for the MSc thesis. It links to a new subpage `/featured/msc-thesis` that is a single scrollable report — concise, in the site's typeset + terminal aesthetic — built from the current `client_final_presentation_june2026.html` deck in the `ceu-public-thesis` repo. Reuse the actual figures and the NDVI H3 map from the repo. Add short primers (medallion architecture, H3) so the report also works when projected. Leave the existing Theses section on `/projects` untouched.

## Assets to pull from the thesis repo into `public/thesis/`

From `presentation_assets/` in `balintdecsi/ceu-public-thesis`:
- `20_best_model_shap_beeswarm.png`
- `20_best_model_shap_group_importance.png`
- `20_best_model_permutation_importance.png`
- `11_geo_ndvi_h3_r8_map.html` (embedded via `<iframe>`)

For the tile thumbnail I'll use `20_best_model_shap_group_importance.png` (or a lightly generated cover if a cleaner preview is preferred).

## Files touched

1. `public/thesis/` — new folder with the 4 assets above.
2. `src/routes/featured.tsx` — add a 5th tile "MSc capstone — Budapest rental prediction" that links to `/featured/msc-thesis` (internal route, not a static file).
3. `src/routes/featured.msc-thesis.tsx` — new route rendering the report.
4. `src/assets/tools/msc-thesis.jpg` — tile thumbnail (either the SHAP group importance PNG copied in, or a small generated cover using the deck's orange/black palette on the site's neutral background).

No changes to `/projects` — the Theses section stays as-is.

## Report structure (scrollable, one page)

Kept short so it also reads as speaker-ready sections on a projector. Each section: one-line kicker, 2–4 sentences or a compact list, and a figure/table where relevant. Duplicates from the deck (repeated executive-summary + since-interim + risks table restatements) collapsed.

1. **Header** — title, subtitle, "MSc Business Analytics · CEU · June 2026", tags. Anchor nav at top (terminal-style `[data]  [pipeline]  [models]  [geo]  [product]  [appendix]`).
2. **The decision this supports** — 2 sentences on the product question, target (HUF/sqm), success criterion (≤10% MdAPE).
3. **Data & temporal validation** — key numbers as a small stat row (50,898 rows / 40,718 train / 10,180 test / +17.6% test-period shift). Brief note on why the newest 20% is reserved.
4. **NEW: Pipeline & medallion architecture** — 3–4 sentence primer on bronze/silver/gold layering (raw → cleaned/typed → modelling-ready feature marts), then how this thesis maps to it (raw dumps → layered data prep → modelling extract → geospatial enrichment → CV/holdout). Small ASCII/CSS diagram of the three layers.
5. **Model leaderboard** — condensed table of the top 5 models + 2 baselines from Appendix A (MdAPE, MAPE, MAE). One sentence takeaway: boosting ~9.8–9.9%, OLS/Ridge ~10.1%, baselines 16.8–17.9%.
6. **What the model pays attention to** — SHAP beeswarm image + 3-bullet "how to read it". Feature-group pills (size, comparables, condition, balcony ratio, aircon, centrality).
7. **Interaction terms** — compact 3-column table from slide 12.
8. **Geospatial enrichment** — WorldPop + NDVI two-column card. Note on lagging to avoid leakage.
9. **NEW: H3 primer + NDVI map** — 3 sentences on Uber's H3 hexagonal grid (why hexagons, res 6/7/8, cell IDs), then the iframe of `11_geo_ndvi_h3_r8_map.html`. Short caption.
10. **Implications for the upload flow** — the two-column "fields to prioritize" vs "UX pattern" content, compacted.
11. **Risks & recommended next steps** — merged: risks table (5 rows) + 3-step recommendation as an inline callout row.
12. **Appendix (collapsible or just lower section)** — SHAP group importance PNG, permutation importance PNG, feature policy (included / excluded), data-quality table. Link out to the source repo and to the raw deck.

Content that gets cut as duplicates: the executive-summary slide, the "what changed since interim" slide, the artifact-package inventory slide, and the discussion-questions slide (all restate points made elsewhere).

## Styling / aesthetic

- Use the existing site tokens (`--color-ink`, `--color-ink-muted`, `--color-rule`, `--color-muted`, EB Garamond + JetBrains Mono). No orange from the deck — keep site palette.
- Section headers as small-caps or `##` LaTeX-style with terminal `[section]` accents.
- Figures wrapped in a bordered frame matching the tile borders on `/featured`.
- The NDVI map iframe: full-width, ~60vh, `border` + `border-[color:var(--color-rule)]`, `loading="lazy"`.
- All tables use the site's existing borderless typeset look, not the deck's black-header cards.
- Works in both light and dark theme (existing theme toggle).
- Responsive: on mobile, tile grids collapse to one column; map iframe drops to ~50vh.

## Technical details

- Route file naming: `src/routes/featured.msc-thesis.tsx` (flat dot convention). Child of `/featured` conceptually but no shared layout needed — `/featured` is a leaf, not a layout with `<Outlet />`.
- New route sets its own `head()` with title `MSc capstone — Budapest rental prediction — Bálint Décsi`, unique description, `og:title`, `og:description`, `canonical`.
- Add the route to `src/routes/sitemap[.]xml.ts` if it enumerates routes there.
- Tile in `featured.tsx` uses `href="/featured/msc-thesis"` (SPA link — switch the anchor to `<Link to="/featured/msc-thesis">` since it's internal, keeping the external tools on plain `<a>`).
- Assets copied under `public/thesis/` so they're served at `/thesis/...` without going through the bundler; the iframe stays functional and the PNGs load as plain images.
- Charts from the deck (temporal median, CV leaderboard bar, fold stability) are represented as compact tables in the report rather than re-implementing Chart.js — keeps the page light and matches the typeset aesthetic. If you'd prefer actual bar charts I can add a tiny inline SVG per chart.
- No new npm dependencies.

## Out of scope

- Editing the `/projects` Theses section.
- Reformatting the deck itself in the source repo.
- Any backend/data changes.
