import { createFileRoute, Link } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg";
import { DD, DT, Prompt } from "@/components/tex";
import { skills } from "@/content/cv";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bálint Décsi — Data & ML Engineer" },
      {
        name: "description",
        content:
          "CTO at Proximata, Data Engineer at Deutsche Telekom, builder at mesh. End-to-end data and ML systems, AI agents, and SaaS prototyping.",
      },
      { property: "og:title", content: "Bálint Décsi" },
      {
        property: "og:description",
        content: "Data & ML engineer. CTO at Proximata, builder at mesh.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <article className="space-y-20">
      {/* Title + portrait */}
      <header className="grid md:grid-cols-[1fr_180px] gap-10 items-start pt-2">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl tracking-tight mb-2">Bálint Décsi</h1>
            <p className="font-mono text-sm">
              <Prompt caret>whoami</Prompt>
            </p>
          </div>

          <p className="text-xl italic text-[color:var(--color-ink-muted)] leading-relaxed">
            CTO at Proximata · Data Engineer at Deutsche Telekom · Builder at mesh.
          </p>

          <div className="space-y-3">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
              Abstract
            </h2>
            <p className="leading-relaxed">
              Engineer focused on the end-to-end data and ML systems lifecycle —
              from building cloud pipelines and lakehouse platforms to shipping
              machine-learning solutions with AI agents. Currently pursuing an
              MS in Business Analytics at Central European University while
              prototyping ML-driven products.
            </p>
          </div>

          {/* Footnote-style links over a dashed rule */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-5 border-t border-dashed border-[color:var(--color-rule)] font-mono text-xs">
            <FootLink mark="†" to="/cv">read full CV</FootLink>
            <FootLink mark="‡" href="https://github.com/balintdecsi">github</FootLink>
            <FootLink mark="§" href="https://www.linkedin.com/in/balintdecsi4b6b53183">linkedin</FootLink>
            <FootLink mark="¶" href="mailto:balint.decsi@gmail.com">balint.decsi@gmail.com</FootLink>
          </div>
        </div>

        <div className="relative group hidden md:block">
          <div className="absolute -right-3 -top-3 w-full h-full border border-[color:var(--color-rule)] -z-10 transition-all group-hover:-right-1.5 group-hover:-top-1.5" />
          <img
            src={profile}
            alt="Portrait of Bálint Décsi"
            className="w-full aspect-square object-cover grayscale border border-[color:var(--color-rule)]"
          />
        </div>
      </header>

      {/* At a glance */}
      <RuleSection number={1} title="At a glance">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          <div><DT>Current role</DT><DD>CTO, Proximata <span className="text-[color:var(--color-ink-muted)] italic">(Vienna-based hacker lab)</span></DD></div>
          <div><DT>Education</DT><DD>MS Business Analytics, CEU <span className="text-[color:var(--color-ink-muted)] italic">(2025–2026)</span></DD></div>
          <div><DT>Also</DT><DD>Data Engineer at Deutsche Telekom · Builder at mesh.</DD></div>
          <div><DT>Location</DT><DD>Vienna, Austria / Budapest, Hungary</DD></div>
        </dl>
      </RuleSection>

      {/* Skills as hover-able chip tags */}
      <RuleSection number={2} title="Interests & skills">
        <div className="flex flex-wrap gap-x-2 gap-y-2.5">
          {skills.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] px-2.5 py-1 border border-[color:var(--color-rule)] bg-[color:var(--color-muted)] text-[color:var(--color-ink-muted)] hover:border-[color:var(--color-link)] hover:text-[color:var(--color-link)] transition-colors cursor-default"
            >
              [{s.toLowerCase()}]
            </span>
          ))}
        </div>
      </RuleSection>

      {/* Where to next — interactive command rows */}
      <RuleSection number={3} title="Where to next">
        <div className="space-y-3">
          <CmdRow to="/cv" cmd="cat cv.tex" note="# experience, education, certifications, awards" />
          <CmdRow to="/projects" cmd="ls projects/" note="# selected work and open-source experiments" />
          <CmdRow to="/tools" cmd="./tools --help" note="# small tools and demos I've shipped" />
        </div>
      </RuleSection>
    </article>
  );
}

function RuleSection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-8">
      <div className="flex items-baseline gap-4">
        <span className="text-3xl italic text-[color:var(--color-link)] opacity-40">§{number}</span>
        <h2 className="text-2xl tracking-tight">{title}</h2>
        <div className="grow h-px bg-[color:var(--color-rule)] self-center" />
      </div>
      {children}
    </section>
  );
}

function FootLink({
  mark,
  to,
  href,
  children,
}: {
  mark: string;
  to?: string;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <>
      <span className="text-[color:var(--color-ink-muted)] italic mr-1.5">{mark}</span>
      <span className="underline decoration-[color:var(--color-link)]/30 underline-offset-4 hover:decoration-[color:var(--color-link)]">
        {children}
      </span>
    </>
  );
  if (to) {
    return (
      <Link to={to} className="no-underline inline-flex items-center">
        {inner}
      </Link>
    );
  }
  const external = href?.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="no-underline inline-flex items-center"
    >
      {inner}
    </a>
  );
}

function CmdRow({ to, cmd, note }: { to: string; cmd: string; note: string }) {
  return (
    <Link
      to={to}
      className="no-underline group flex items-center justify-between gap-4 border border-[color:var(--color-rule)] p-4 bg-[color:var(--color-paper)] hover:border-[color:var(--color-link)]/50 hover:bg-[color:var(--color-muted)] transition-colors"
    >
      <div className="flex flex-wrap gap-x-4 items-baseline font-mono">
        <span className="text-sm">
          <span className="text-[color:var(--color-link)]">$ </span>
          <span className="text-[color:var(--color-ink)]">{cmd}</span>
        </span>
        <span className="text-[11px] italic text-[color:var(--color-ink-muted)]">{note}</span>
      </div>
      <span className="font-mono text-[10px] tracking-wider text-[color:var(--color-ink-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
        ENTER ↵
      </span>
    </Link>
  );
}
