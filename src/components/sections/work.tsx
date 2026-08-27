import { Link } from "@tanstack/react-router";
import { selectedProjects } from "@/content/cv";
import { PageSection, Section, subNumber } from "@/components/tex";

interface WorkItem {
  slug: string;
  name: string;
  one_liner: string;
  description: string;
  tags: string[];
  href: string;
  internal?: boolean;
}

const live: WorkItem[] = [
  {
    slug: "proximata",
    name: "Proximata",
    one_liner: "Co-founder & CTO — AI-native products lab",
    description:
      "Vienna-based hacker lab building AI-native products. I co-founded Proximata and lead technical strategy as CTO — from infrastructure to venture-building and spinoffs.",
    tags: ["ai systems", "venture building", "infrastructure"],
    href: "https://proximata.io",
  },
  {
    slug: "msc-thesis",
    name: "MSc capstone — Budapest rental prediction",
    one_liner: "ingatlan.com × CEU · end-to-end modelling report",
    description:
      "Public-facing summary of my MSc Business Analytics capstone: temporal validation, geospatial enrichment (WorldPop + Sentinel-2 NDVI on H3), model leaderboard, SHAP diagnostics, and product recommendations.",
    tags: ["ml", "geospatial", "capstone"],
    href: "/featured/msc-thesis",
    internal: true,
  },
];

const demos: WorkItem[] = [
  {
    slug: "comics-factory",
    name: "Comics Factory",
    one_liner: "ML-driven SaaS for stylized comics with consistent characters",
    description:
      "Generate stylized comics with consistent characters from a handful of reference images. Built at Hungary's first hacker space using Supabase, Firebase, and modern image-gen pipelines.",
    tags: ["llms", "image gen", "saas", "supabase"],
    href: "https://comicsfactory.tech",
  },
  {
    slug: "ceu-feedback",
    name: "CEU FeedForward",
    one_liner: "Anonymous student-feedback platform for CEU",
    description:
      "MVP demo of a secure, GDPR-compliant student feedback platform — registration with a verified @student.ceu.edu email, structured ratings, free-text comments, and institutional dashboards.",
    tags: ["civic tech", "privacy", "higher ed"],
    href: "/tools/ceu-feedback/index.html",
  },
  {
    slug: "pdf-to-word",
    name: "PDF → Word",
    one_liner: "Convert a PDF to .docx, all in the browser",
    description:
      "Drop a PDF in and download an editable .docx. Runs entirely client-side using pdf.js — no file ever leaves your machine.",
    tags: ["utility", "client-only", "pdf"],
    href: "/tools/pdf-to-word/index.html",
  },
  {
    slug: "unibridge",
    name: "Unibridge",
    one_liner: "Onboarding companion for international students in Vienna",
    description:
      "Multi-language prototype that walks new students through housing, health insurance, visa, and local admin. Built as a public-good civic-tech experiment.",
    tags: ["product", "i18n", "civic tech"],
    href: "/tools/unibridge/index.html",
  },
];

const engagements = selectedProjects.filter(
  (p) => !["Central European hacker-space movement", "Budapest rental price prediction"].includes(p.name),
);

export function WorkSection({ standalone, number = 1 }: { standalone?: boolean; number?: number }) {
  return (
    <PageSection
      id="work"
      standalone={standalone}
      number={number}
      title="Work"
      subtitle="The work I'd point to first — ventures I co-founded, client engagements, plus tools and demos I've shipped."
    >
      <Section number={subNumber(standalone, number, 1)} title="Live">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
          {live.map((t) => (
            <li
              key={t.slug}
              className="border border-[color:var(--color-rule)] hover:bg-[color:var(--color-muted)] transition-colors"
            >
              {t.internal ? (
                <Link to={t.href} className="block no-underline group p-4">
                  <WorkItemBody t={t} />
                </Link>
              ) : (
                <a href={t.href} className="block no-underline group p-4">
                  <WorkItemBody t={t} />
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-8">
          {engagements.map((p) => (
            <div key={p.name} className="border-l-2 border-[color:var(--color-rule)] pl-4">
              <h3 className="text-xl m-0">{p.name}</h3>
              <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mb-2">
                {p.role} · {p.client} · {p.date}
              </p>
              <p className="mb-2 text-sm">{p.summary}</p>
              <ul className="list-disc pl-5 space-y-1 mb-2 text-sm">
                {p.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              {p.links.length > 0 ? (
                <p className="font-mono text-xs mb-1 flex flex-wrap gap-x-3">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </p>
              ) : null}
              <p className="font-mono text-xs text-[color:var(--color-ink-muted)]">
                {p.tags.map((tag) => `[${tag.toLowerCase()}]`).join(" ")}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section number={subNumber(standalone, number, 2)} title="Demos">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
          {demos.map((t) => (
            <li
              key={t.slug}
              className="border border-[color:var(--color-rule)] hover:bg-[color:var(--color-muted)] transition-colors"
            >
              {t.internal ? (
                <Link to={t.href} className="block no-underline group p-4">
                  <WorkItemBody t={t} />
                </Link>
              ) : (
                <a href={t.href} className="block no-underline group p-4">
                  <WorkItemBody t={t} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </PageSection>
  );
}

function WorkItemBody({ t }: { t: WorkItem }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h3 className="text-xl m-0">{t.name}</h3>
        <span className="font-mono text-sm whitespace-nowrap text-[color:var(--color-ink-muted)]">open ↗</span>
      </div>
      <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mb-2">{t.one_liner}</p>
      <p className="mb-2 text-sm">{t.description}</p>
      <p className="font-mono text-xs text-[color:var(--color-ink-muted)]">
        {t.tags.map((tag) => `[${tag}]`).join(" ")}
      </p>
    </>
  );
}
