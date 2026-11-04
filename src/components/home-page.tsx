import { Link } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg";
import { BracketTag, DD, DT, Section } from "@/components/tex";
import { skills } from "@/content/cv";
import { UI } from "@/content/i18n/ui";
import { freelancePath, homePath, useLocale } from "@/lib/locale";
import { WorkSection } from "@/components/sections/work";
import { ExperienceSection } from "@/components/sections/experience";
import { CertificationsSection } from "@/components/sections/certifications";
import { CodeSection } from "@/components/sections/code";

/** The one-pager, rendered at / (English) and /hu, /de, /es. */
export function HomePage() {
  const locale = useLocale();
  const t = UI[locale].home;
  return (
    <article>
      <header id="about" className="scroll-mt-24 pt-2 sm:pt-4 pb-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-3">
          {locale === "hu" ? "Décsi Bálint" : "Bálint Décsi"}
          <span className="block mt-2 font-mono text-sm sm:text-base uppercase tracking-wider text-[color:var(--color-ink-muted)]">
            {t.role}
          </span>
        </h1>
        <p className="text-base sm:text-lg italic text-[color:var(--color-ink-muted)] mb-8 sm:mb-10">{t.tagline}</p>

        <div className="flex flex-col-reverse md:flex-row gap-6 sm:gap-8 items-center md:items-start">
          <div className="flex-1 min-w-0">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-ink-muted)] mb-2">
              {t.abstractLabel}
            </h2>
            <p className="leading-relaxed">{t.abstract}</p>
          </div>
          <img
            src={profile}
            alt={t.portraitAlt}
            className="w-32 h-32 sm:w-36 sm:h-36 object-cover border border-[color:var(--color-rule)] shrink-0 mx-auto md:mx-0"
          />
        </div>

        <p className="mt-8 sm:mt-10 font-mono text-sm text-[color:var(--color-ink-muted)] flex flex-wrap gap-x-4 gap-y-2">
          <span><sup>†</sup> <Link to={homePath(locale)} hash="experience">{t.experienceLink}</Link></span>
          <span><sup>‡</sup> <a href="https://github.com/balintdecsi" target="_blank" rel="noopener noreferrer">github</a></span>
          <span><sup>§</sup> <a href="https://www.linkedin.com/in/balintdecsi4b6b53183" target="_blank" rel="noopener noreferrer">linkedin</a></span>
          <span><sup>¶</sup> <Link to={freelancePath(locale)}>{t.freelanceLink}</Link></span>
        </p>
      </header>

      <Section number={1} title={t.atGlance}>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          <div>
            <DT>{t.currentRole}</DT>
            <DD>{t.currentRoleValue} <span className="text-[color:var(--color-ink-muted)]">{t.currentRoleNote}</span></DD>
            <DT>{t.also}</DT>
            <DD>{t.alsoValue}</DD>
          </div>
          <div>
            <DT>{t.education}</DT>
            <DD>{t.educationValue}</DD>
            <DT>{t.location}</DT>
            <DD>{t.locationValue}</DD>
          </div>
        </dl>
      </Section>

      <Section number={2} title={t.interests}>
        <p className="leading-loose">
          {skills.map((s) => (
            <BracketTag key={s}>{s.toLowerCase()}</BracketTag>
          ))}
        </p>
      </Section>

      <WorkSection number={3} />
      <ExperienceSection number={4} />
      <CertificationsSection number={5} />
      <CodeSection number={6} />
    </article>
  );
}

const OG_LOCALE = { en: "en_US", hu: "hu_HU", de: "de_AT", es: "es_ES" } as const;

/** head() for a localized home page. */
export function homeHead(locale: keyof typeof OG_LOCALE) {
  const m = UI[locale].meta;
  const url = `https://balintdecsi.dev${locale === "en" ? "/" : `/${locale}`}`;
  return {
    meta: [
      { title: m.title },
      { name: "description", content: m.description },
      { property: "og:title", content: m.title },
      { property: "og:description", content: m.description },
      { property: "og:url", content: url },
      { property: "og:locale", content: OG_LOCALE[locale] },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
