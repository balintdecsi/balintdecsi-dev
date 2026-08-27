import { useState } from "react";
import profile from "@/assets/profile.jpg";
import { BracketTag, PageSection, Section, subNumber } from "@/components/tex";
import { education, experience } from "@/content/cv";

export function ExperienceSection({ standalone, number = 1 }: { standalone?: boolean; number?: number }) {
  const [includePhoto, setIncludePhoto] = useState(true);
  const [downloading, setDownloading] = useState(false);

  async function handleDownload() {
    if (downloading) return;
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
      const blob = await pdf(<CvDoc includePhoto={includePhoto} photoDataUrl={photoDataUrl} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Balint-Decsi-CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <PageSection
      id="experience"
      standalone={standalone}
      number={number}
      title="Experience"
      subtitle="Roles, workplaces, and education — the full CV is downloadable as a PDF."
    >
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 mb-2 no-print">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="font-mono text-sm border border-[color:var(--color-rule)] px-3 py-1.5 hover:bg-[color:var(--color-muted)] no-underline cursor-pointer disabled:opacity-60"
          aria-label="Download CV as PDF"
        >
          {downloading ? "Generating…" : "Download full CV (PDF)"}
        </button>
        <label className="font-mono text-xs text-[color:var(--color-ink-muted)] flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includePhoto}
            onChange={(e) => setIncludePhoto(e.target.checked)}
            className="accent-[color:var(--color-link)] cursor-pointer"
          />
          include profile picture
        </label>
      </div>

      <Section number={subNumber(standalone, number, 1)} title="Employment">
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

      <Section number={subNumber(standalone, number, 2)} title="Education">
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
    </PageSection>
  );
}
