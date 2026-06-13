import { createFileRoute } from "@tanstack/react-router";
import { Prompt, Section } from "@/components/tex";

export const Route = createFileRoute("/tools")({
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
}

const tools: Tool[] = [
  {
    slug: "ceu-feedback",
    name: "CEU FeedForward",
    one_liner: "Anonymous student-feedback platform for CEU",
    description:
      "MVP demo of a secure, GDPR-compliant student feedback platform — registration with a verified @student.ceu.edu email, structured ratings, free-text comments, and institutional dashboards.",
    tags: ["civic tech", "privacy", "higher ed"],
    href: "/tools/ceu-feedback/",
  },
  {
    slug: "pdf-to-word",
    name: "PDF → Word",
    one_liner: "Convert a PDF to .docx, all in the browser",
    description:
      "Drop a PDF in and download an editable .docx. Runs entirely client-side using pdf.js — no file ever leaves your machine.",
    tags: ["utility", "client-only", "pdf"],
    href: "/tools/pdf-to-word/",
  },
  {
    slug: "unibridge",
    name: "Unibridge",
    one_liner: "Onboarding companion for international students in Vienna",
    description:
      "Multi-language prototype that walks new students through housing, health insurance, visa, and local admin. Built as a public-good civic-tech experiment.",
    tags: ["product", "i18n", "civic tech"],
    href: "/tools/unibridge/",
  },
];

function Tools() {
  return (
    <article>
      <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mt-4">~/tools</p>
      <h1 className="text-4xl mt-2 mb-3">Tools</h1>
      <p className="text-[color:var(--color-ink-muted)] italic mb-2">
        Small things I've built. Mostly demos, some genuinely useful.
      </p>
      <p className="font-mono text-sm text-[color:var(--color-ink-muted)]">
        <Prompt>./tools --help</Prompt>
      </p>

      <Section number={1} title="Available">
        <ul className="divide-y divide-[color:var(--color-rule)]">
          {tools.map((t) => (
            <li key={t.slug} className="py-5">
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="text-xl">
                  <a href={t.href}>{t.name}</a>
                </h3>
                <a href={t.href} className="font-mono text-sm whitespace-nowrap">
                  open ↗
                </a>
              </div>
              <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mb-2">
                {t.one_liner}
              </p>
              <p className="mb-2">{t.description}</p>
              <p className="font-mono text-xs text-[color:var(--color-ink-muted)]">
                {t.tags.map((tag) => `[${tag}]`).join(" ")}
              </p>
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