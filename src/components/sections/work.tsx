import { Link } from "@tanstack/react-router";
import { selectedProjects } from "@/content/cv";
import { PageSection, Section, subNumber } from "@/components/tex";

interface WorkItem {
  slug: string;
  name: string;
  role: string;
  client?: string;
  date?: string;
  summary: string;
  highlights?: string[];
  links: { label: string; href: string }[];
  tags: string[];
  internal?: boolean;
}

const live: WorkItem[] = [
  {
    slug: "proximata",
    name: "Proximata",
    role: "Co-founder & CTO — AI-native products lab",
    summary:
      "Vienna-based hacker lab building AI-native products. I co-founded Proximata and lead technical strategy as CTO — from infrastructure to venture-building and spinoffs.",
    links: [{ label: "proximata.io", href: "https://proximata.io" }],
    tags: ["ai systems", "venture building", "infrastructure"],
  },
];

const caseStudies: WorkItem[] = [
  {
    slug: "msc-thesis",
    name: "MSc capstone — Budapest rental prediction",
    role: "ingatlan.com × CEU · end-to-end modelling report",
    summary:
      "Public-facing summary of my MSc Business Analytics capstone: temporal validation, geospatial enrichment (WorldPop + Sentinel-2 NDVI on H3), model leaderboard, SHAP diagnostics, and product recommendations.",
    links: [{ label: "read report", href: "/featured/msc-thesis" }],
    tags: ["ml", "geospatial", "capstone"],
    internal: true,
  },
  ...selectedProjects
    .filter(
      (p) =>
        ![
          "Central European hacker-space movement",
          "Budapest rental price prediction",
        ].includes(p.name),
    )
    .map((p) => ({
      ...p,
      slug: p.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
    })),
];

const demos: WorkItem[] = [
  {
    slug: "comics-factory",
    name: "Comics Factory",
    role: "ML-driven SaaS for stylized comics with consistent characters",
    summary:
      "Generate stylized comics with consistent characters from a handful of reference images. Built at Hungary's first hacker space using Supabase, Firebase, and modern image-gen pipelines.",
    links: [{ label: "comicsfactory.tech", href: "https://comicsfactory.tech" }],
    tags: ["llms", "image gen", "saas", "supabase"],
  },
  {
    slug: "ceu-feedback",
    name: "CEU FeedForward",
    role: "Anonymous student-feedback platform for CEU",
    summary:
      "MVP demo of a secure, GDPR-compliant student feedback platform — registration with a verified @student.ceu.edu email, structured ratings, free-text comments, and institutional dashboards.",
    links: [{ label: "open demo", href: "/tools/ceu-feedback/index.html" }],
    tags: ["civic tech", "privacy", "higher ed"],
  },
  {
    slug: "pdf-to-word",
    name: "PDF → Word",
    role: "Convert a PDF to .docx, all in the browser",
    summary:
      "Drop a PDF in and download an editable .docx. Runs entirely client-side using pdf.js — no file ever leaves your machine.",
    links: [{ label: "open tool", href: "/tools/pdf-to-word/index.html" }],
    tags: ["utility", "client-only", "pdf"],
  },
  {
    slug: "unibridge",
    name: "Unibridge",
    role: "Onboarding companion for international students in Vienna",
    summary:
      "Multi-language prototype that walks new students through housing, health insurance, visa, and local admin. Built as a public-good civic-tech experiment.",
    links: [{ label: "open demo", href: "/tools/unibridge/index.html" }],
    tags: ["product", "i18n", "civic tech"],
  },
];

export function WorkSection({ standalone, number = 1 }: { standalone?: boolean; number?: number }) {
  return (
    <PageSection
      id="work"
      standalone={standalone}
      number={number}
      title="Work"
      subtitle="The work I'd point to first — the venture I'm a co-founder of, plus case studies and demos I've shipped."
    >
      <Section number={subNumber(standalone, number, 1)} title="Live">
        <div className="space-y-8">
          {live.map((p) => (
            <WorkEntry key={p.slug} item={p} />
          ))}
        </div>
      </Section>

      <Section number={subNumber(standalone, number, 2)} title="Case studies">
        <div className="space-y-8">
          {caseStudies.map((p) => (
            <WorkEntry key={p.slug} item={p} />
          ))}
        </div>
      </Section>

      <Section number={subNumber(standalone, number, 3)} title="Demos">
        <div className="space-y-8">
          {demos.map((p) => (
            <WorkEntry key={p.slug} item={p} />
          ))}
        </div>
      </Section>
    </PageSection>
  );
}

function WorkEntry({ item }: { item: WorkItem }) {
  const primary = item.links[0];
  const hasLink = !!primary;
  const LinkWrapper = item.internal ? Link : "a";
  const linkProps = hasLink
    ? item.internal
      ? { to: primary.href }
      : { href: primary.href }
    : undefined;

  return (
    <div className="border-l-2 border-[color:var(--color-rule)] pl-4">
      <h3 className="text-xl m-0">
        {hasLink ? (
          <LinkWrapper
            {...linkProps}
            className="no-underline"
            target={item.internal ? undefined : "_blank"}
            rel={item.internal ? undefined : "noopener noreferrer"}
          >
            {item.name}
          </LinkWrapper>
        ) : (
          item.name
        )}
      </h3>
      <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mb-2">{item.role}</p>
      <p className="mb-2 text-sm">{item.summary}</p>
      {item.highlights && item.highlights.length > 0 ? (
        <ul className="list-disc pl-5 space-y-1 mb-2 text-sm">
          {item.highlights.map((h, j) => (
            <li key={j}>{h}</li>
          ))}
        </ul>
      ) : null}
      {item.links.length > 0 ? (
        <p className="font-mono text-xs mb-1 flex flex-wrap gap-x-3">
          {item.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={item.internal ? undefined : "_blank"}
              rel={item.internal ? undefined : "noopener noreferrer"}
            >
              {l.label} ↗
            </a>
          ))}
        </p>
      ) : null}
      <p className="font-mono text-xs text-[color:var(--color-ink-muted)]">
        {item.tags.map((tag) => `[${tag.toLowerCase()}]`).join(" ")}
      </p>
    </div>
  );
}
