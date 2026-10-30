import { useState } from "react";
import profile from "@/assets/profile.jpg";
import { BracketTag, PageSection, Section, subNumber } from "@/components/tex";
import { getContent } from "@/content/i18n/content";
import { UI } from "@/content/i18n/ui";
import { useLocale } from "@/lib/locale";

export function ExperienceSection({ standalone, number = 1 }: { standalone?: boolean; number?: number }) {
  const locale = useLocale();
  const t = UI[locale].experience;
  const { education, experience, languages } = getContent(locale);
  const [includePhoto, setIncludePhoto] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  async function handleDownload() {
    if (downloading) return;
    setDownloadError(false);
    setDownloading(true);
    try {
      const [{ pdf }, { CvDoc }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/lib/cv-pdf"),
      ]);
      let photoDataUrl: string | undefined;
      if (includePhoto) {
        const res = await fetch(profile);
        const blob = await res.blob();
        photoDataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(blob);
        });
      }
      const blob = await pdf(<CvDoc locale={locale} includePhoto={includePhoto} photoDataUrl={photoDataUrl} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = locale === "en" ? "Balint-Decsi-CV.pdf" : `Balint-Decsi-CV-${locale.toUpperCase()}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("CV download failed", error);
      setDownloadError(true);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <PageSection
      id="experience"
      standalone={standalone}
      number={number}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 mb-2 no-print">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="font-mono text-sm border border-[color:var(--color-rule)] px-3 py-1.5 hover:bg-[color:var(--color-muted)] no-underline cursor-pointer disabled:opacity-60"
          aria-label={t.downloadAria}
        >
          {downloading ? t.generating : t.download}
        </button>
        <label className="font-mono text-xs text-[color:var(--color-ink-muted)] flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includePhoto}
            onChange={(e) => setIncludePhoto(e.target.checked)}
            className="accent-[color:var(--color-link)] cursor-pointer"
          />
          {t.includePhoto}
        </label>
      </div>
      {downloadError && <p role="alert" className="text-sm text-[color:var(--color-ink-muted)]">{t.error}</p>}

      <Section number={subNumber(standalone, number, 1)} title={t.employment}>
        <div className="space-y-7">
          {experience.map((e, i) => (
            <div key={i} className="cv-entry">
              <h3 className="text-xl">{e.title}</h3>
              <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mb-2">
                {e.orgUrl ? (
                  <a href={e.orgUrl} target="_blank" rel="noopener noreferrer">
                    {e.org}
                  </a>
                ) : (
                  <span>{e.org}</span>
                )}
                {" · "}
                {e.date}
                {" · "}
                {e.location}
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <p className="mt-1">
                {e.tags.map((t) => (
                  <BracketTag key={t}>{t.toLowerCase()}</BracketTag>
                ))}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section number={subNumber(standalone, number, 2)} title={t.education}>
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
      <Section number={subNumber(standalone, number, 3)} title={t.languages}>
        <p>{languages.map((language) => `${language.name} — ${language.level}`).join(" · ")}</p>
      </Section>
    </PageSection>
  );
}
