import { useRouterState } from "@tanstack/react-router";

export const LOCALES = ["en", "hu", "de", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export type HomePath = "/" | "/hu" | "/de" | "/es";

export function homePath(locale: Locale): HomePath {
  return locale === "en" ? "/" : (`/${locale}` as HomePath);
}

export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Locale) : "en";
}

/** The locale is encoded in the URL (/hu, /de, /es); everything else is English. */
export function useLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return localeFromPath(pathname);
}

/** hreflang alternates shared by every localized home page. */
export const HREFLANG_LINKS = [
  { rel: "alternate", hrefLang: "en", href: "https://balintdecsi.dev/" },
  { rel: "alternate", hrefLang: "hu", href: "https://balintdecsi.dev/hu" },
  { rel: "alternate", hrefLang: "de", href: "https://balintdecsi.dev/de" },
  { rel: "alternate", hrefLang: "es", href: "https://balintdecsi.dev/es" },
  { rel: "alternate", hrefLang: "x-default", href: "https://balintdecsi.dev/" },
];

export type FreelancePath = "/freelance" | "/hu/freelance" | "/de/freelance" | "/es/freelance";

/** The freelance page in each language: /freelance, /hu/freelance, … */
export function freelancePath(locale: Locale): FreelancePath {
  return locale === "en" ? "/freelance" : (`/${locale}/freelance` as FreelancePath);
}

/** True on any language's freelance page; the language switch stays on it. */
export function isFreelancePath(pathname: string): boolean {
  return /^\/(?:(?:hu|de|es)\/)?freelance\/?$/.test(pathname);
}

/** hreflang alternates shared by every localized freelance page. */
export const FREELANCE_HREFLANG_LINKS = [
  ...LOCALES.map((l) => ({
    rel: "alternate",
    hrefLang: l,
    href: `https://balintdecsi.dev${freelancePath(l)}`,
  })),
  { rel: "alternate", hrefLang: "x-default", href: "https://balintdecsi.dev/freelance" },
];
