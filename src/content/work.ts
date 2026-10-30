/** English source for the Work section entries that aren't CV case studies. */
export interface WorkText {
  name: string;
  role: string;
  summary: string;
}

export interface WorkLinked extends WorkText {
  linkLabel: string;
}

export const liveText: WorkText[] = [
  {
    name: "Proximata",
    role: "Co-founder & CTO — AI-native products lab",
    summary:
      "Vienna-based hacker lab building AI-native products. I co-founded Proximata and lead technical strategy as CTO — from infrastructure to venture-building and spinoffs.",
  },
  {
    name: "Open Drone Space",
    role: "Open-source minded map for drone pilots — data pipeline engineer",
    summary:
      "An open-source minded map for drone pilots, showing Hungary's static drone airspace layers (no-drone zones, aerodrome zones, airspace). I engineered the data pipelines for different interval scraping/fetching from a dozen of sources.",
  },
  {
    name: "Skills",
    role: "Global skill library for my AI agents",
    summary:
      "The global skills I use for my agents across different projects — reusable, versioned skill definitions shared by every agent setup I run.",
  },
];

export const mscText: WorkLinked = {
  name: "MSc capstone — Budapest rental prediction",
  role: "ingatlan.com × CEU · end-to-end modelling report",
  summary:
    "Public-facing summary of my MSc Business Analytics capstone: temporal validation, geospatial enrichment (WorldPop + Sentinel-2 NDVI on H3), model leaderboard, SHAP diagnostics, and product recommendations.",
  linkLabel: "read report",
};

export const demoText: WorkLinked[] = [
  {
    name: "Comics Factory",
    role: "ML-driven SaaS for stylized comics with consistent characters",
    summary:
      "Generate stylized comics with consistent characters from a handful of reference images. Built at Hungary's first hacker space using Supabase, Firebase, and modern image-gen pipelines.",
    linkLabel: "comicsfactory.tech",
  },
  {
    name: "CEU FeedForward",
    role: "Anonymous student-feedback platform for CEU",
    summary:
      "MVP demo of a secure, GDPR-compliant student feedback platform — registration with a verified @student.ceu.edu email, structured ratings, free-text comments, and institutional dashboards.",
    linkLabel: "open demo",
  },
  {
    name: "PDF → Word",
    role: "Convert a PDF to .docx, all in the browser",
    summary:
      "Drop a PDF in and download an editable .docx. Runs entirely client-side using pdf.js — no file ever leaves your machine.",
    linkLabel: "open tool",
  },
  {
    name: "Unibridge",
    role: "Onboarding companion for international students in Vienna",
    summary:
      "Multi-language prototype that walks new students through housing, health insurance, visa, and local admin. Built as a public-good civic-tech experiment.",
    linkLabel: "open demo",
  },
];

export const thesisText: Record<string, { title: string; blurb: string }> = {
  "ceu-public-thesis": {
    title: "MSc capstone — Budapest rental price prediction (ingatlan.com)",
    blurb:
      "Public-facing deliverables from my CEU Business Analytics capstone with ingatlan.com: a HUF/sqm rental price model for the listing-upload flow, validated with time-ordered CV (best 9.84% MdAPE). Repo contains the CEU ETD public summary (LaTeX, CC BY 4.0) and the ~21-slide client defence deck. Full pipeline, data, and technical report stay under NDA in the private capstone repo.",
  },
  THESIS: {
    title: "BSc thesis — Molecular Bionics (University of Szeged)",
    blurb:
      "Supplementary MATLAB source for my BSc Molecular Bionics thesis at the University of Szeged. The repo holds the analysis scripts that accompany the written thesis.",
  },
};

export const topicText: Record<string, { title: string; description?: string }> = {
  foss: { title: "Open-source contributions" },
  "side-project": { title: "Side projects", description: "Personal builds and tools." },
  hackathon: { title: "Hackathons", description: "Weekend builds and competition entries." },
  msc: { title: "MSc coursework", description: "CEU MSc Business Analytics assignments and projects." },
  bsc: { title: "BSc coursework", description: "University of Szeged, Molecular Bionics." },
  assignment: { title: "Other assignments" },
};
