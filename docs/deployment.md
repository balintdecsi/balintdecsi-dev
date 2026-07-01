# Deployment

The site is built and hosted through [Lovable](https://lovable.dev), which
bundles the TanStack Start app for a Cloudflare Workers–compatible edge
runtime (see `vite.config.ts` and the `@lovable.dev/vite-tanstack-config`
preset).

## Publish

1. Push changes (Lovable syncs the repo automatically).
2. Open the project in Lovable and click **Publish → Update**.
3. Frontend changes go live at both:
   - `https://balintdecsi-dev.lovable.app` (Lovable subdomain)
   - `https://balintdecsi.dev` (custom domain)

Server-side changes (server functions, API routes) deploy automatically on
every build — no manual publish step needed for those.

## Custom domain

`balintdecsi.dev` and `www.balintdecsi.dev` are attached in
**Lovable → Project Settings → Domains**. DNS is managed at the registrar
with the records Lovable prescribes on setup.

## SEO / Search Console

- Google site verification tag: in [`src/routes/__root.tsx`](../src/routes/__root.tsx).
- Sitemap: served from `/sitemap.xml` via
  [`src/routes/sitemap[.]xml.ts`](../src/routes/sitemap[.]xml.ts).
- `robots.txt` and `llms.txt`: in [`public/`](../public).

After deploying changes that add new routes, re-submit the sitemap in Google
Search Console.

## Local production preview

```bash
bun run build
bun run preview
```

This mirrors the production bundle locally, useful for catching SSR-only
issues (env vars read at module scope, Node-incompatible packages, etc.)
before publishing.