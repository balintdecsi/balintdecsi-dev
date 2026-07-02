import { createFileRoute, Link } from "@tanstack/react-router";
import ceuThumb from "@/assets/tools/ceu-feedback.jpg";
import pdfThumb from "@/assets/tools/pdf-to-word.jpg";
import unibridgeThumb from "@/assets/tools/unibridge.jpg";
import proximataThumb from "@/assets/tools/proximata.jpg";

export const Route = createFileRoute("/featured")({
  head: () => ({
    meta: [
      { title: "Featured — Bálint Décsi" },
      {
        name: "description",
        content:
          "Featured work: Proximata (co-founder & CTO), plus small tools and demos I've shipped.",
      },
      { property: "og:title", content: "Featured — Bálint Décsi" },
      { property: "og:description", content: "Featured work: Proximata, tools, and demos." },
      { property: "og:url", content: "/featured" },
    ],
    links: [{ rel: "canonical", href: "/featured" }],
  }),
  component: Featured,
});

interface Tool {
  slug: string;
  name: string;
  one_liner: string;
  description: string;
  tags: string[];
  href: string;
  thumb: string;
  internal?: boolean;
}

const tools: Tool[] = [
  {
    slug: "proximata",
    name: "Proximata",
    one_liner: "Co-founder & CTO — AI-native products lab",
    description:
      "Vienna-based hacker lab building AI-native products. I co-founded Proximata and lead technical strategy as CTO — from infrastructure to venture-building and spinoffs.",
    tags: ["ai systems", "venture building", "infrastructure"],
    href: "https://proximata.io",
    thumb: proximataThumb,
  },
  {
    slug: "msc-thesis",
    name: "MSc capstone — Budapest rental prediction",
    one_liner: "ingatlan.com × CEU · end-to-end modelling report",
    description:
      "Public-facing summary of my MSc Business Analytics capstone: temporal validation, geospatial enrichment (WorldPop + Sentinel-2 NDVI on H3), model leaderboard, SHAP diagnostics, and product recommendations.",
    tags: ["ml", "geospatial", "capstone"],
    href: "/featured/msc-thesis",
    thumb: "/thesis/shap_group_importance.png",
    internal: true,
  },
  {
    slug: "ceu-feedback",
    name: "CEU FeedForward",
    one_liner: "Anonymous student-feedback platform for CEU",
    description:
      "MVP demo of a secure, GDPR-compliant student feedback platform — registration with a verified @student.ceu.edu email, structured ratings, free-text comments, and institutional dashboards.",
    tags: ["civic tech", "privacy", "higher ed"],
    href: "/tools/ceu-feedback/index.html",
    thumb: ceuThumb,
  },
  {
    slug: "pdf-to-word",
    name: "PDF → Word",
    one_liner: "Convert a PDF to .docx, all in the browser",
    description:
      "Drop a PDF in and download an editable .docx. Runs entirely client-side using pdf.js — no file ever leaves your machine.",
    tags: ["utility", "client-only", "pdf"],
    href: "/tools/pdf-to-word/index.html",
    thumb: pdfThumb,
  },
  {
    slug: "unibridge",
    name: "Unibridge",
    one_liner: "Onboarding companion for international students in Vienna",
    description:
      "Multi-language prototype that walks new students through housing, health insurance, visa, and local admin. Built as a public-good civic-tech experiment.",
    tags: ["product", "i18n", "civic tech"],
    href: "/tools/unibridge/index.html",
    thumb: unibridgeThumb,
  },
];

function Featured() {
  return (
    <article>
      <h1 className="text-3xl sm:text-4xl mt-2 mb-3">Featured</h1>
      <p className="text-[color:var(--color-ink-muted)] italic mb-2">
        The work I'd point to first — the venture I'm a co-founder of, plus small tools and demos I've shipped.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0">
        {tools.map((t) => (
          <li key={t.slug} className="border border-[color:var(--color-rule)] hover:bg-[color:var(--color-muted)] transition-colors">
            {t.internal ? (
              <Link to={t.href} className="block no-underline group">
                <TileBody t={t} />
              </Link>
            ) : (
              <a href={t.href} className="block no-underline group">
                <TileBody t={t} />
              </a>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}

function TileBody({ t }: { t: Tool }) {
  return (
    <>
              <div className="aspect-[16/10] overflow-hidden border-b border-[color:var(--color-rule)] bg-[color:var(--color-muted)]">
                <img
                  src={t.thumb}
                  alt={`${t.name} preview`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-contain object-top group-hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="text-xl m-0">{t.name}</h3>
                  <span className="font-mono text-sm whitespace-nowrap text-[color:var(--color-ink-muted)]">open ↗</span>
                </div>
                <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mb-2">
                  {t.one_liner}
                </p>
                <p className="mb-2 text-sm">{t.description}</p>
                <p className="font-mono text-xs text-[color:var(--color-ink-muted)]">
                  {t.tags.map((tag) => `[${tag}]`).join(" ")}
                </p>
              </div>
    </>
  );
}
