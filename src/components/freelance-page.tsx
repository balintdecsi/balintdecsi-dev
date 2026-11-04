import { Fragment, type ReactNode } from "react";
import { BracketTag, DD, DT, PageSection, Section } from "@/components/tex";
import {
  CONSULTATION_URL,
  FIVERR_PROFILE,
  FREELANCER_PROFILE,
  gigs,
  type Cell,
  type Gig,
  type GigText,
} from "@/content/freelance";
import { getGigText } from "@/content/i18n/freelance";
import { UI, type UiStrings } from "@/content/i18n/ui";
import { FREELANCE_HREFLANG_LINKS, freelancePath, useLocale, type Locale } from "@/lib/locale";

type T = UiStrings["freelance"];

/** No-break space, kept out of the source as a literal. */
const NBSP = String.fromCharCode(160);

/** USD as listed on the platforms, with the locale's digit grouping. Deterministic, so SSR and hydration agree. */
function formatUsd(amount: number, locale: Locale): string {
  const sep = locale === "en" ? "," : locale === "hu" ? NBSP : ".";
  // es-ES leaves four-digit numbers ungrouped.
  const digits =
    locale === "es" && amount < 10000
      ? String(amount)
      : String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  return locale === "en" ? `$${digits}` : `${digits}${NBSP}$`;
}

function formatDays(n: number, t: T) {
  return `${n}${NBSP}${n === 1 ? t.day : t.days}`;
}

/** "Table 1." / "Tabelle 1." — Hungarian puts the number first: "1. táblázat". */
function captionLabel(word: string, n: number, locale: Locale) {
  return locale === "hu" ? `${n}. ${word.toLowerCase()}` : `${word} ${n}.`;
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

/** /freelance and its translations: the four gigs on Fiverr and Upwork, the consultation call and the freelancer profile. */
export function FreelancePage() {
  const locale = useLocale();
  const t = UI[locale].freelance;
  const texts = getGigText(locale);
  const consultationNumber = gigs.length + 1;
  const profileNumber = gigs.length + 2;

  return (
    <PageSection id="freelance" standalone number={0} title={t.title} subtitle={t.subtitle}>
      <nav aria-labelledby="freelance-contents" className="mt-8">
        <h2
          id="freelance-contents"
          className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-ink-muted)] mb-2"
        >
          {t.contents}
        </h2>
        <ol className="list-none p-0 m-0 space-y-1.5">
          {gigs.map((g, i) => (
            <ContentsRow
              key={g.slug}
              href={`#${g.slug}`}
              number={i + 1}
              label={texts[i].short}
              value={`${t.from} ${formatUsd(Math.min(...g.packages.map((p) => p.price)), locale)}`}
            />
          ))}
          <ContentsRow
            href="#consultation"
            number={consultationNumber}
            label={t.consultation}
            value="Upwork"
          />
          <ContentsRow
            href="#profile"
            number={profileNumber}
            label={t.profile}
            value={locale === "hu" ? "Jószaki" : "Malt"}
          />
        </ol>
        <p className="mt-4 text-xs leading-relaxed text-[color:var(--color-ink-muted)]">
          {t.priceNote}
        </p>
      </nav>

      {gigs.map((g, i) => (
        <GigSection key={g.slug} gig={g} text={texts[i]} number={i + 1} t={t} locale={locale} />
      ))}

      <Section id="consultation" number={consultationNumber} title={t.consultation}>
        <p className="mb-4">{t.consultationText}</p>
        <div className="flex flex-wrap gap-3">
          <a href={CONSULTATION_URL} {...external} className="tex-button">
            {t.bookUpwork} ↗
          </a>
        </div>
      </Section>

      <Section id="profile" number={profileNumber} title={t.profile}>
        <p className="mb-4">{t.profileText}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href={FREELANCER_PROFILE[locale].href}
            {...external}
            hrefLang={locale}
            className="tex-button"
          >
            {FREELANCER_PROFILE[locale].label} ↗
          </a>
        </div>
        <p className="font-mono text-xs text-[color:var(--color-ink-muted)]">
          {t.fiverrProfile}{" "}
          <a href={FIVERR_PROFILE} {...external}>
            fiverr.com/balint_decsi ↗
          </a>
        </p>
      </Section>
    </PageSection>
  );
}

/** One line of the contents list, with a dotted leader like LaTeX's \dotfill. */
function ContentsRow({
  href,
  number,
  label,
  value,
}: {
  href: string;
  number: number;
  label: string;
  value: string;
}) {
  return (
    <li>
      <a href={href} className="tex-contents-row group">
        <span className="font-mono text-sm text-[color:var(--color-ink-muted)] w-8 shrink-0">
          §{number}
        </span>
        <span className="group-hover:text-[color:var(--color-link)]">{label}</span>
        <span className="tex-leader" aria-hidden="true" />
        <span className="font-mono text-sm whitespace-nowrap">{value}</span>
      </a>
    </li>
  );
}

function GigSection({
  gig,
  text,
  number,
  t,
  locale,
}: {
  gig: Gig;
  text: GigText;
  number: number;
  t: T;
  locale: Locale;
}) {
  const names = gig.packages.map((p) => p.name).join(" / ");
  return (
    <Section id={gig.slug} number={number} title={text.title}>
      <p className="leading-relaxed mb-3">{text.pitch}</p>
      <p className="font-mono text-xs flex flex-wrap gap-x-3 gap-y-1 mb-6">
        <span className="text-[color:var(--color-ink-muted)]">{t.related}:</span>
        {gig.related.map((href, j) =>
          href.startsWith("/") ? (
            <a key={href} href={href}>
              {text.related[j]}
            </a>
          ) : (
            <a key={href} href={href} {...external}>
              {text.related[j]} ↗
            </a>
          ),
        )}
      </p>

      <figure className="m-0 mb-8">
        <img
          src={gig.cover}
          alt={text.coverAlt}
          width={1280}
          height={769}
          loading="lazy"
          decoding="async"
          className="w-full h-auto border border-[color:var(--color-rule)]"
        />
        <figcaption className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
          <span className="font-mono text-xs">{captionLabel(t.figure, number, locale)}</span>{" "}
          {t.figureCaption}
        </figcaption>
      </figure>

      {/* Narrow screens: package descriptions as a list; the table keeps the numbers. */}
      <dl className="sm:hidden mb-4 text-sm">
        {gig.packages.map((p, j) => (
          <div key={p.name} className="mb-2">
            <dt className="font-semibold">{p.name}</dt>
            <dd className="m-0 text-[color:var(--color-ink-muted)]">{text.packages[j]}</dd>
          </div>
        ))}
      </dl>

      <div className="overflow-x-auto">
        <table className="tex-table w-full text-sm">
          <caption className="caption-bottom text-left pt-2 text-sm text-[color:var(--color-ink-muted)]">
            <span className="font-mono text-xs">{captionLabel(t.table, number, locale)}</span>{" "}
            {t.tableCaption}
          </caption>
          <thead>
            <tr>
              <th scope="col" className="text-left font-normal text-[color:var(--color-ink-muted)]">
                <span className="sr-only">{t.package}</span>
              </th>
              {gig.packages.map((p) => (
                <th key={p.name} scope="col" className="font-semibold text-center">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{t.price}</th>
              {gig.packages.map((p) => (
                <td key={p.name} className="font-mono text-center font-semibold">
                  {formatUsd(p.price, locale)}
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">{t.delivery}</th>
              {gig.packages.map((p) => (
                <td key={p.name} className="font-mono text-center">
                  {formatDays(p.days, t)}
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">{t.revisions}</th>
              {gig.packages.map((p) => (
                <td key={p.name} className="font-mono text-center">
                  {p.revisions}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr className="hidden sm:table-row">
              <th scope="row">
                <span className="sr-only">{t.package}</span>
              </th>
              {text.packages.map((d, j) => (
                <td
                  key={j}
                  className="text-left align-top text-[color:var(--color-ink-muted)] leading-snug"
                >
                  {d}
                </td>
              ))}
            </tr>
            {gig.features.map((row, j) => (
              <tr key={j}>
                <th scope="row">{text.features[j]}</th>
                {row.map((cell, k) => (
                  <td key={k} className="text-center">
                    <CellValue cell={cell} t={t} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg mt-8 mb-2">{t.extras}</h3>
      <ul className="list-none p-0 m-0 space-y-1 text-sm">
        {gig.extras.map((price, j) => (
          <li key={j} className="flex items-baseline">
            <span>{text.extras[j]}</span>
            <span className="tex-leader" aria-hidden="true" />
            <span
              className="font-mono text-xs sm:text-sm whitespace-nowrap"
              title={Array.isArray(price) ? names : undefined}
            >
              {Array.isArray(price)
                ? price.map((p) => (p === null ? "–" : `+${formatUsd(p, locale)}`)).join(" / ")
                : `+${formatUsd(price, locale)}`}
              {Array.isArray(price) && <span className="sr-only"> ({names})</span>}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs leading-relaxed text-[color:var(--color-ink-muted)]">
        {t.extrasNote}
      </p>

      <p className="mt-8 mb-3 text-sm italic text-[color:var(--color-ink-muted)]">{text.note}</p>
      <div className="flex flex-wrap gap-3">
        <a href={gig.links.fiverr} {...external} className="tex-button">
          {t.orderFiverr} ↗
        </a>
        <a href={gig.links.upwork} {...external} className="tex-button">
          {t.orderUpwork} ↗
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div>
          <h3 className="text-lg mt-8 mb-2">{t.build}</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {text.build.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg mt-8 mb-2">{t.steps}</h3>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            {text.steps.map((s, j) => (
              <li key={j}>{s}</li>
            ))}
          </ol>
        </div>
      </div>

      <h3 className="text-lg mt-8 mb-3">{t.details}</h3>
      <dl className="text-sm">
        <DT>{t.category}</DT>
        <DD>{gig.category}</DD>
        {gig.metadata.map((values, j) => (
          <Fragment key={j}>
            <DT>{text.metadata[j]}</DT>
            <DD>{values.join(", ")}</DD>
          </Fragment>
        ))}
        <DT>{t.stack}</DT>
        <DD>
          {gig.stack.map((s) => (
            <BracketTag key={s}>{s}</BracketTag>
          ))}
        </DD>
        <DT>{t.tags}</DT>
        <DD>{gig.tags.join(", ")}</DD>
      </dl>

      <h3 className="text-lg mt-8 mb-2">{t.faq}</h3>
      <div className="border-t border-[color:var(--color-rule)]">
        {text.faq.map((f, j) => (
          <Disclosure key={j} summary={f.q}>
            <p className="m-0 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">{f.a}</p>
          </Disclosure>
        ))}
        <Disclosure summary={t.requirements}>
          <ul className="list-disc pl-5 space-y-1 text-sm text-[color:var(--color-ink-muted)]">
            {text.requirements.map((r, j) => (
              <li key={j}>{r}</li>
            ))}
          </ul>
        </Disclosure>
      </div>
    </Section>
  );
}

function Disclosure({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <details className="tex-details group border-b border-[color:var(--color-rule)]">
      <summary className="flex items-baseline justify-between gap-4 py-2 cursor-pointer list-none">
        <span>{summary}</span>
        <span
          aria-hidden="true"
          className="font-mono text-sm text-[color:var(--color-ink-muted)] motion-safe:transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="pb-3">{children}</div>
    </details>
  );
}

function CellValue({ cell, t }: { cell: Cell; t: T }) {
  if (typeof cell === "number") return <span className="font-mono">{cell}</span>;
  return cell ? (
    <>
      <span aria-hidden="true">✓</span>
      <span className="sr-only">{t.included}</span>
    </>
  ) : (
    <>
      <span aria-hidden="true" className="text-[color:var(--color-ink-muted)]">
        –
      </span>
      <span className="sr-only">{t.notIncluded}</span>
    </>
  );
}

const OG_LOCALE = { en: "en_US", hu: "hu_HU", de: "de_AT", es: "es_ES" } as const;

/** head() for a localized freelance page: meta, canonical, hreflang and the services as JSON-LD. */
export function freelanceHead(locale: Locale) {
  const t = UI[locale].freelance;
  const texts = getGigText(locale);
  const url = `https://balintdecsi.dev${freelancePath(locale)}`;
  const provider = { "@type": "Person", name: "Bálint Décsi", url: "https://balintdecsi.dev" };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.metaTitle,
    url,
    itemListElement: gigs.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: texts[i].title,
        description: texts[i].pitch,
        url: `${url}#${g.slug}`,
        provider,
        areaServed: "Worldwide",
        offers: g.packages.map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: String(p.price),
          priceCurrency: "USD",
          url: g.links.fiverr,
        })),
      },
    })),
  };
  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaDescription },
      { property: "og:url", content: url },
      { property: "og:locale", content: OG_LOCALE[locale] },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: t.metaTitle },
      { name: "twitter:description", content: t.metaDescription },
    ],
    links: [{ rel: "canonical", href: url }, ...FREELANCE_HREFLANG_LINKS],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  };
}
