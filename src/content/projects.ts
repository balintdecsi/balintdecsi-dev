export interface Project {
  name: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export const featured: Project[] = [
  {
    name: "Proximata",
    blurb:
      "Vienna-based hacker lab building AI-native products. Leading technical strategy and the venture-building stack from infrastructure to spinoffs.",
    tags: ["AI Systems", "Venture Building", "Infrastructure"],
    links: [
      { label: "proximata.io", href: "https://proximata.io" },
      { label: "linkedin", href: "https://www.linkedin.com/company/proximata" },
    ],
  },
  {
    name: "mesh. comic SaaS",
    blurb:
      "ML-driven SaaS that generates stylized comics with consistent characters from a handful of reference images. Built at Hungary's first hacker space using Supabase, Firebase, and modern image-gen pipelines.",
    tags: ["LLMs", "Image Gen", "SaaS", "Supabase"],
    links: [{ label: "mesh.", href: "https://growmesh.io" }],
  },
  {
    name: "Unibridge",
    blurb:
      "Onboarding companion for international students in Vienna — housing, health insurance, visa, and local admin in one place. Multi-language, mobile-first prototype.",
    tags: ["Product", "i18n", "Civic Tech"],
    links: [{ label: "open demo ↗", href: "/tools/unibridge/" }],
  },
  {
    name: "CEU FeedForward",
    blurb:
      "Anonymous, GDPR-compliant student feedback platform for Central European University. MVP demo covering registration, structured rating, and institutional dashboards.",
    tags: ["Civic Tech", "Privacy", "Higher Ed"],
    links: [{ label: "open demo ↗", href: "/tools/ceu-feedback/" }],
  },
  {
    name: "PDF → Word",
    blurb:
      "Tiny client-side utility that converts a PDF into an editable .docx — entirely in the browser, nothing uploaded.",
    tags: ["Client-only", "PDF", "Utility"],
    links: [{ label: "open tool ↗", href: "/tools/pdf-to-word/" }],
  },
];