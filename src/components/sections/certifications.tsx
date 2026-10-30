import { PageSection, Section, subNumber } from "@/components/tex";
import { getContent } from "@/content/i18n/content";
import { UI } from "@/content/i18n/ui";
import { useLocale } from "@/lib/locale";

export function CertificationsSection({
  standalone,
  number = 1,
}: {
  standalone?: boolean;
  number?: number;
}) {
  const locale = useLocale();
  const t = UI[locale].certs;
  const { awards, googleCertificationGroups, otherCertifications } = getContent(locale);
  return (
    <PageSection
      id="certifications"
      standalone={standalone}
      number={number}
      title={t.title}
      subtitle={t.subtitle}
    >
      <Section number={subNumber(standalone, number, 1)} title={t.certifications}>
        <ul className="space-y-3">
          {googleCertificationGroups.map((group) => (
            <li key={group.title}>
              {group.title}{" "}
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

      <Section number={subNumber(standalone, number, 2)} title={t.awards}>
        <ul className="list-disc pl-5 space-y-1">
          {awards.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Section>
    </PageSection>
  );
}
