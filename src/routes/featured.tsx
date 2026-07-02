import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/tex";
import { BracketTag } from "@/components/tex";
import ceuThumb from "@/assets/tools/ceu-feedback.jpg";
import pdfThumb from "@/assets/tools/pdf-to-word.jpg";
import unibridgeThumb from "@/assets/tools/unibridge.jpg";

export const Route = createFileRoute("/featured")({
  head: () => ({
    meta: [
      { title: "Tools — Bálint Décsi" },
      {
        name: "description",
        content:
          "Small tools and demos: CEU FeedForward, PDF→Word converter, Unibridge onboarding companion.",
      },
      { property: "og:title", content: "Tools — Bálint Décsi" },
      { property: "og:description", content: "Small tools and demos I've shipped." },
      { property: "og:url", content: "/tools" },
    ],
    links: [{ rel: "canonical", href: "/tools" }],
  }),
  component: Tools,
});

interface Tool {
  slug: string;
  name: string;
  one_liner: string;
  description: string;
  tags: string[];
  href: string;
  thumb: string;
}

const tools: Tool[] = [
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

function Tools() {
  return (
    <article>
      <h1 className="text-3xl sm:text-4xl mt-2 mb-3">Tools</h1>
      <p className="text-[color:var(--color-ink-muted)] italic mb-2">
        Small things I've built. Mostly demos, some genuinely useful.
      </p>

      <Section number={1} title="Available">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0">
          {tools.map((t) => (
            <li key={t.slug} className="border border-[color:var(--color-rule)] hover:bg-[color:var(--color-muted)] transition-colors">
              <a href={t.href} className="block no-underline group">
                <div className="aspect-[16/10] overflow-hidden border-b border-[color:var(--color-rule)] bg-[color:var(--color-muted)]">
                  <img
                    src={t.thumb}
                    alt={`${t.name} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform"
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
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <p className="mt-12 font-mono text-xs text-[color:var(--color-ink-muted)]">
        Tools open in a new tab and keep their original look — they're standalone
        mini-sites preserved as I shipped them.
      </p>
    </article>
  );
}