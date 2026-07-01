# balintdecsi.dev

Personal portfolio and CV of Bálint Décsi, plus a small collection of in-house
tools (CEU Feedback, PDF→Word, Unibridge). Live at
[balintdecsi.dev](https://balintdecsi.dev).

## Stack

- [TanStack Start](https://tanstack.com/start) v1 (React 19, SSR, file-based routing)
- [Vite 7](https://vitejs.dev/) build tool
- [Tailwind CSS v4](https://tailwindcss.com/) via `src/styles.css`
- [Bun](https://bun.sh/) as the package manager and script runner
- Deployed to a Cloudflare Workers–compatible edge runtime

No database, no auth — content lives as typed modules in `src/content/`.

## Prerequisites

- [Bun](https://bun.sh/) ≥ 1.1 (`curl -fsSL https://bun.sh/install | bash`)
- Node.js ≥ 20 (only needed if you prefer `npm`/`pnpm`; Bun bundles its own runtime)

## Run locally

```bash
bun install
bun run dev
```

The dev server starts on [http://localhost:8080](http://localhost:8080) with HMR.

### Other scripts

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the Vite dev server |
| `bun run build` | Production build (SSR + client bundles) |
| `bun run build:dev` | Development-mode build (useful for debugging SSR) |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Prettier |

## Project layout

```
src/
  routes/              File-based routes (see src/routes/README.md)
    __root.tsx         App shell: <html>, <head>, nav, theme toggle
    index.tsx          Landing page
    cv.tsx             Full CV, print-optimized
    projects.tsx       GitHub projects, grouped by topic
    tools.tsx          Tools index (tiles → /public/tools/*)
    sitemap[.]xml.ts   Sitemap server route
  content/             Typed content modules (cv.ts, projects.ts)
  components/          Shared UI primitives (tex.tsx, shadcn ui/)
  styles.css           Tailwind v4 theme + print styles
public/
  tools/               Static HTML tools ported from the old GitHub Pages site
  llms.txt, robots.txt
```

See [`src/routes/README.md`](./src/routes/README.md) for routing conventions
and [`docs/`](./docs) for topic-specific notes:

- [`docs/content.md`](./docs/content.md) — editing CV, projects, and tools
- [`docs/deployment.md`](./docs/deployment.md) — publishing and custom domain
- [`docs/tools.md`](./docs/tools.md) — how the ported static tools are wired up

## Deployment

The site is published through [Lovable](https://lovable.dev). Frontend changes
require clicking **Publish → Update** to go live; the custom domain
`balintdecsi.dev` is attached in project settings. Details in
[`docs/deployment.md`](./docs/deployment.md).

## License

Content (CV text, project descriptions, images) © Bálint Décsi. Source code
is available for reference; please don't republish the content as your own.