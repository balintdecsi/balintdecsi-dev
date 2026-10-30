import { selectedProjects } from "@/content/cv";
import { PageSection, Section, subNumber } from "@/components/tex";
import { getContent } from "@/content/i18n/content";
import { UI } from "@/content/i18n/ui";
import { useLocale, type Locale } from "@/lib/locale";

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

const liveLinks: Pick<WorkItem, "slug" | "links" | "tags">[] = [
  { slug: "proximata", links: [{ label: "proximata.io", href: "https://proximata.io" }], tags: ["ai systems", "venture building", "infrastructure"] },
  {
    slug: "opendrone",
    links: [
      { label: "opendrone.space", href: "https://opendrone.space/" },
      { label: "open-drone-space-data", href: "https://github.com/balintdecsi/open-drone-space-data" },
    ],
    tags: ["data pipelines", "geospatial", "open source", "aviation"],
  },
  { slug: "skills", links: [{ label: "github", href: "https://github.com/balintdecsi/skills" }], tags: ["ai agents", "open source"] },
];

const demoLinks: { slug: string; href: string; tags: string[] }[] = [
  { slug: "comics-factory", href: "https://comicsfactory.tech", tags: ["llms", "image gen", "saas", "supabase"] },
  { slug: "ceu-feedback", href: "/tools/ceu-feedback/index.html", tags: ["civic tech", "privacy", "higher ed"] },
  { slug: "pdf-to-word", href: "/tools/pdf-to-word/index.html", tags: ["utility", "client-only", "pdf"] },
  { slug: "unibridge", href: "/tools/unibridge/index.html", tags: ["product", "i18n", "civic tech"] },
];

function buildItems(locale: Locale) {
  const c = getContent(locale);
  const live: WorkItem[] = liveLinks.map((l, i) => ({ ...l, ...c.live[i] }));
  const caseStudies: WorkItem[] = [
    {
      slug: "msc-thesis",
      name: c.msc.name,
      role: c.msc.role,
      summary: c.msc.summary,
      links: [{ label: c.msc.linkLabel, href: "/featured/msc-thesis" }],
      tags: ["ml", "geospatial", "capstone"],
      internal: true,
    },
    // The first two CV projects (capstone, hacker-space movement) are covered above / under Live.
    ...c.selectedProjects.slice(2).map((p, i) => ({
      ...p,
      slug: selectedProjects[i + 2].name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
    })),
  ];
  const demos: WorkItem[] = demoLinks.map((d, i) => ({
    slug: d.slug,
    name: c.demos[i].name,
    role: c.demos[i].role,
    summary: c.demos[i].summary,
    links: [{ label: c.demos[i].linkLabel, href: d.href }],
    tags: d.tags,
  }));
  return { live, caseStudies, demos };
}

export function WorkSection({ standalone, number = 1 }: { standalone?: boolean; number?: number }) {
  const locale = useLocale();
  const t = UI[locale].work;
  const { live, caseStudies, demos } = buildItems(locale);
  return (
    <PageSection
      id="work"
      standalone={standalone}
      number={number}
      title={t.title}
      subtitle={t.subtitle}
    >
      <Section number={subNumber(standalone, number, 1)} title={t.live}>
        <div className="space-y-8">
          {live.map((p) => (
            <WorkEntry key={p.slug} item={p} />
          ))}
        </div>
      </Section>

      <Section number={subNumber(standalone, number, 2)} title={t.caseStudies}>
        <div className="space-y-8">
          {caseStudies.map((p) => (
            <WorkEntry key={p.slug} item={p} />
          ))}
        </div>
      </Section>

      <Section number={subNumber(standalone, number, 3)} title={t.demos}>
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
  return (
    <div className="border-l-2 border-[color:var(--color-rule)] pl-4">
      <h3 className="text-xl m-0">{item.name}</h3>
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
