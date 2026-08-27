import { PageSection, Section, subNumber } from "@/components/tex";
import { awards, certifications } from "@/content/cv";

export function CertificationsSection({
  standalone,
  number = 1,
}: {
  standalone?: boolean;
  number?: number;
}) {
  return (
    <PageSection
      id="certifications"
      standalone={standalone}
      number={number}
      title="Certifications & awards"
      subtitle="Credentials, badges, and scholarships — each links to the issuing authority where available."
    >
      <Section number={subNumber(standalone, number, 1)} title="Certifications">
        <ul className="list-disc pl-5 space-y-1">
          {certifications.map((c) => (
            <li key={c.name}>
              {c.url ? (
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.name}
                </a>
              ) : (
                c.name
              )}
              <span className="font-mono text-xs text-[color:var(--color-ink-muted)]">
                {" "}
                · {c.issuer} · {c.date}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section number={subNumber(standalone, number, 2)} title="Awards & scholarships">
        <ul className="list-disc pl-5 space-y-1">
          {awards.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Section>
    </PageSection>
  );
}
