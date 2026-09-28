import { PageSection, Section, subNumber } from "@/components/tex";
import { awards, googleCertificationGroups, otherCertifications } from "@/content/cv";

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
        <ul className="space-y-3">
          {googleCertificationGroups.map((group) => (
            <li key={group.title}>
              <strong>{group.title}</strong>{" "}
              <span className="font-mono text-xs">
                {group.certifications.map((c, i) => (
                  <span key={c.name} className="mr-2 inline-block">
                    <a href={c.url} target="_blank" rel="noopener noreferrer" title={`${c.name} · ${c.date}`} aria-label={`${c.name} (${c.date})`}>[{i + 1}]</a>
                  </span>
                ))}
              </span>
            </li>
          ))}
          {otherCertifications.map((c) => (
            <li key={c.name}>{c.name} <span className="font-mono text-xs text-[color:var(--color-ink-muted)]">· {c.issuer} · {c.date}</span></li>
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
