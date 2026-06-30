import { createFileRoute, Link } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg";
import { BracketTag, DD, DT, Prompt, Section } from "@/components/tex";
import { skills } from "@/content/cv";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bálint Décsi — Data & ML Engineer" },
      {
        name: "description",
        content:
          "Data Engineer at Deutsche Telekom, CTO at Proximata, builder at mesh. End-to-end data and ML systems, AI agents, and SaaS prototyping.",
      },
      { property: "og:title", content: "Bálint Décsi — Data & ML Engineer" },
      {
        property: "og:description",
        content: "Data & ML engineer. Data Engineer at Deutsche Telekom, CTO at Proximata, builder at mesh.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <article>
      {/* Title block — academic preprint style */}
      <header className="pt-2 sm:pt-4 pb-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-3">Bálint Décsi</h1>
        <p className="text-base sm:text-lg italic text-[color:var(--color-ink-muted)] mb-8 sm:mb-10">
          Data Engineer at Deutsche Telekom · CTO at Proximata · Builder at mesh.
        </p>

        <div className="flex flex-col-reverse md:flex-row gap-6 sm:gap-8 items-start">
          <div className="flex-1 min-w-0">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-ink-muted)] mb-2">
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
          <img
            src={profile}
            alt="Portrait of Bálint Décsi"
            className="w-28 h-28 sm:w-36 sm:h-36 object-cover border border-[color:var(--color-rule)] shrink-0"
          />
        </div>

        {/* Footnote-style links */}
        <p className="mt-8 sm:mt-10 font-mono text-sm text-[color:var(--color-ink-muted)] flex flex-wrap gap-x-4 gap-y-2">
          <span><sup>†</sup> <Link to="/cv">read full CV</Link></span>
          <span><sup>‡</sup> <a href="https://github.com/balintdecsi" target="_blank" rel="noopener noreferrer">github</a></span>
          <span><sup>§</sup> <a href="https://www.linkedin.com/in/balintdecsi4b6b53183" target="_blank" rel="noopener noreferrer">linkedin</a></span>
        </p>
      </header>

      <Section number={1} title="At a glance">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          <div>
            <DT>Current role</DT>
            <DD>Data Engineer at Deutsche Telekom</DD>
            <DT>Also</DT>
            <DD>CTO at Proximata <span className="text-[color:var(--color-ink-muted)]">(Vienna-based hacker lab)</span> · Builder at mesh.</DD>
          </div>
          <div>
            <DT>Education</DT>
            <DD>MS Business Analytics, CEU (2025–2026)</DD>
            <DT>Location</DT>
            <DD>Vienna, Austria / Budapest, Hungary</DD>
          </div>
        </dl>
      </Section>

      <Section number={2} title="Interests & skills">
        <p className="leading-loose">
          {skills.map((s) => (
            <BracketTag key={s}>{s.toLowerCase()}</BracketTag>
          ))}
        </p>
      </Section>

      <Section number={3} title="Where to next">
        <ul className="space-y-2">
          <li><Link to="/cv">Full CV</Link> <span className="text-[color:var(--color-ink-muted)]">— experience, education, certifications, awards</span></li>
          <li><Link to="/projects">Projects</Link> <span className="text-[color:var(--color-ink-muted)]">— selected work and open-source experiments</span></li>
          <li><Link to="/tools">Tools</Link> <span className="text-[color:var(--color-ink-muted)]">— small tools and demos I've shipped</span></li>
        </ul>
      </Section>
    </article>
  );
}
