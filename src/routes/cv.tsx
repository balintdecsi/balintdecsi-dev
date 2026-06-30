import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import profile from "@/assets/profile.jpg";
import { BracketTag, Section } from "@/components/tex";
import { awards, certifications, education, experience } from "@/content/cv";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Bálint Décsi" },
      {
        name: "description",
        content:
          "Full CV of Bálint Décsi — experience at Proximata, Deutsche Telekom, Vodafone; data engineering, ML, AI agents.",
      },
      { property: "og:title", content: "CV — Bálint Décsi" },
      { property: "og:description", content: "Experience, education, certifications, and awards." },
      { property: "og:url", content: "/cv" },
    ],
    links: [{ rel: "canonical", href: "/cv" }],
  }),
  component: CV,
});

function CV() {
  const [includePhoto, setIncludePhoto] = useState(true);
  return (
    <article className={includePhoto ? "" : "print-hide-photo"}>
      <div className="flex items-start justify-between gap-6 mb-2 no-print">
        <span />
        <div className="flex items-center gap-4">
          <label className="font-mono text-xs text-[color:var(--color-ink-muted)] flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={includePhoto}
              onChange={(e) => setIncludePhoto(e.target.checked)}
              className="accent-[color:var(--color-link)] cursor-pointer"
            />
            include profile picture
          </label>
          <button
            onClick={() => typeof window !== "undefined" && window.print()}
            className="font-mono text-sm border border-[color:var(--color-rule)] px-3 py-1.5 hover:bg-[color:var(--color-muted)] no-underline cursor-pointer"
            aria-label="Download CV as PDF"
          >
            Download PDF
          </button>
        </div>
      </div>

      <header className="border-y border-[color:var(--color-rule)] py-6 my-4 flex flex-row gap-6 items-start justify-between">
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl mb-2">Bálint Décsi</h1>
          <p className="font-mono text-sm text-[color:var(--color-ink-muted)] flex flex-wrap gap-x-3 gap-y-1">
            <a href="https://balintdecsi.dev" target="_blank" rel="noopener noreferrer">balintdecsi.dev</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/balintdecsi4b6b53183" target="_blank" rel="noopener noreferrer">linkedin</a>
            <span>·</span>
            <a href="https://github.com/balintdecsi" target="_blank" rel="noopener noreferrer">github</a>
          </p>
          <p className="font-mono text-sm text-[color:var(--color-ink-muted)] mt-2">
            Vienna, Austria / Budapest, Hungary
          </p>
        </div>
        <img
          src={profile}
          alt="Portrait of Bálint Décsi"
          className="cv-photo w-24 h-24 sm:w-28 sm:h-28 object-cover border border-[color:var(--color-rule)] shrink-0"
        />
      </header>

      <Section number={1} title="Experience">
        <div className="space-y-7">
          {experience.map((e, i) => (
            <div key={i} className="cv-entry">
              <h3 className="text-xl">{e.title}</h3>
              <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mb-2">
                {e.orgUrl ? (
                  <a href={e.orgUrl} target="_blank" rel="noopener noreferrer">{e.org}</a>
                ) : (
                  <span>{e.org}</span>
                )}
                {" · "}{e.date}{" · "}{e.location}
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <p className="mt-1">
                {e.tags.map((t) => <BracketTag key={t}>{t.toLowerCase()}</BracketTag>)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section number={2} title="Education">
        <div className="space-y-4">
          {education.map((e, i) => (
            <div key={i} className="cv-entry">
              <h3 className="text-lg">{e.degree}</h3>
              <p className="font-mono text-xs text-[color:var(--color-ink-muted)]">
                {e.org} · {e.date}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section number={3} title="Certifications">
        <ul className="list-disc pl-5 space-y-1">
          {certifications.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </Section>

      <Section number={4} title="Awards & scholarships">
        <ul className="list-disc pl-5 space-y-1">
          {awards.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </Section>
    </article>
  );
}