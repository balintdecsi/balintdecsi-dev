import dataEngineeringCover from "@/assets/freelance/data-engineering.webp";
import aiAgentsCover from "@/assets/freelance/ai-agents.webp";
import geospatialCover from "@/assets/freelance/geospatial.webp";
import customWebsiteCover from "@/assets/freelance/custom-website.webp";
import type { Locale } from "@/lib/locale";

/**
 * The freelance gigs listed on Fiverr and Upwork. Source of truth for the
 * listings is each gig repo's OFFERING.md (github.com/balintdecsi/gig-*);
 * keep prices, packages and extras in sync with it.
 *
 * Structure, links and prices live in `gigs`; English copy in `gigText`,
 * translations in src/content/i18n/freelance.ts as index-aligned overrides.
 */

/** A package cell: ✓ / – for booleans, the number itself for quantities. */
export type Cell = boolean | number;

export interface GigPackage {
  /** Package name as listed on the platforms; not translated. */
  name: string;
  /** USD, as listed. */
  price: number;
  days: number;
  revisions: number;
}

export interface Gig {
  slug: string;
  links: { fiverr: string; upwork: string };
  cover: string;
  packages: [GigPackage, GigPackage, GigPackage];
  /** Feature rows; labels are GigText.features, same order. */
  features: [Cell, Cell, Cell][];
  /**
   * Extra prices in USD; labels are GigText.extras, same order. A tuple is a
   * per-package price (extra-fast delivery), null where the package has none.
   */
  extras: (number | [number | null, number, number])[];
  /** Fiverr category path, as the platform names it. */
  category: string;
  /** Listing metadata values; labels are GigText.metadata, same order. */
  metadata: string[][];
  stack: string[];
  /** Search tags on the listing. */
  tags: string[];
  /** Proof links; labels are GigText.related, same order. Paths starting with "/" stay on this site. */
  related: string[];
}

export interface GigText {
  title: string;
  /** Short name for the contents list. */
  short: string;
  pitch: string;
  /** Package descriptions, Basic → Premium. */
  packages: [string, string, string];
  features: string[];
  extras: string[];
  build: string[];
  steps: string[];
  /** Closing line above the order buttons. */
  note: string;
  metadata: string[];
  faq: { q: string; a: string }[];
  requirements: string[];
  related: string[];
  coverAlt: string;
}

export const FIVERR_PROFILE = "https://www.fiverr.com/balint_decsi";

export const CONSULTATION_URL =
  "https://www.upwork.com/services/product/development-it-balint-2110054384845538450";

/** General freelancer profile shown on each language's page. */
export const FREELANCER_PROFILE: Record<Locale, { href: string; label: string }> = {
  en: { href: "https://www.malt.com/profile/balintdecsi", label: "malt.com/profile/balintdecsi" },
  de: { href: "https://www.malt.de/profile/balintdecsi", label: "malt.de/profile/balintdecsi" },
  es: { href: "https://www.malt.es/profile/balintdecsi", label: "malt.es/profile/balintdecsi" },
  hu: {
    href: "https://joszaki.hu/szakember/decsi-balint",
    label: "joszaki.hu/szakember/decsi-balint",
  },
};

export const gigs: Gig[] = [
  {
    slug: "data-engineering",
    links: {
      fiverr:
        "https://www.fiverr.com/balint_decsi/build-your-gcp-data-platform-with-bigquery-airflow-dbt-and-iceberg",
      upwork:
        "https://www.upwork.com/services/product/development-it-bigquery-data-pipelines-with-airflow-and-dbt-on-google-cloud-2117623424147006868",
    },
    cover: dataEngineeringCover,
    packages: [
      { name: "Starter Pipeline", price: 450, days: 3, revisions: 1 },
      { name: "Production Pipeline", price: 1050, days: 7, revisions: 3 },
      { name: "Data Platform", price: 2100, days: 14, revisions: 5 },
    ],
    features: [
      [3, 9, 18],
      [true, true, true],
      [true, true, true],
      [true, true, true],
      [true, true, true],
      [true, true, true],
      [true, true, true],
      [false, true, true],
      [false, true, true],
    ],
    extras: [[150, 300, 600], 100, 100, 200, 200, 50],
    category: "Data › Data Engineering › Data ETLs",
    metadata: [
      ["Data pipelines", "ETL development", "Data warehousing", "Data lake setup", "Data modeling"],
      ["Google BigQuery", "Apache Airflow", "dbt", "Google Cloud Storage", "Google Dataflow"],
    ],
    stack: [
      "bigquery",
      "airflow",
      "cloud composer",
      "dbt",
      "apache iceberg",
      "gcs",
      "terraform",
      "looker studio",
    ],
    tags: ["bigquery", "data engineering", "airflow", "dbt", "google cloud"],
    related: [
      "https://cloud.google.com/blog/topics/customers/engineering-deutsche-telekoms-sovereign-data-platform",
      "https://cloud.google.com/blog/products/data-analytics/vodafone-hungary-data-platform-migration",
    ],
  },
  {
    slug: "ai-agents",
    links: {
      fiverr:
        "https://www.fiverr.com/balint_decsi/build-a-custom-ai-agent-or-rag-app-on-your-company-data",
      upwork:
        "https://www.upwork.com/services/product/development-it-a-custom-ai-agent-or-rag-app-built-on-your-company-data-2117625494469496877",
    },
    cover: aiAgentsCover,
    packages: [
      { name: "Agent Prototype", price: 450, days: 3, revisions: 1 },
      { name: "Production Agent", price: 1050, days: 7, revisions: 3 },
      { name: "Agent System", price: 2100, days: 14, revisions: 5 },
    ],
    features: [
      [true, true, true],
      [true, true, true],
      [false, true, true],
      [false, true, true],
    ],
    extras: [[150, 300, 600], 100, 50, 200, 400, 50],
    category: "Programming & Tech › AI Development › AI Integrations",
    metadata: [
      ["Claude", "ChatGPT / OpenAI", "Gemini", "LangChain"],
      ["Python", "TypeScript"],
    ],
    stack: [
      "python",
      "typescript",
      "claude",
      "openai",
      "gemini",
      "langchain",
      "supabase",
      "elevenlabs",
    ],
    tags: ["ai agent", "rag", "llm", "ai automation", "langchain"],
    related: ["https://proximata.io", "https://github.com/balintdecsi/skills"],
  },
  {
    slug: "geospatial",
    links: {
      fiverr:
        "https://www.fiverr.com/balint_decsi/do-location-intelligence-and-site-selection-with-python-h3-and-web-maps",
      upwork:
        "https://www.upwork.com/services/product/development-it-location-intelligence-and-site-selection-with-python-h3-and-web-maps-2117626741447206292",
    },
    cover: geospatialCover,
    packages: [
      { name: "Location Snapshot", price: 450, days: 3, revisions: 1 },
      { name: "Site Selection", price: 750, days: 5, revisions: 3 },
      { name: "Geo ML + Live Map", price: 1050, days: 7, revisions: 5 },
    ],
    features: [
      [1, 3, 5],
      [false, true, true],
    ],
    extras: [[150, 300, 300], 200, 100, 100, 200, 100, 50],
    category: "Data › Data Visualization › Geographic Information Systems (GIS)",
    metadata: [["Python"]],
    stack: [
      "python",
      "geopandas",
      "h3",
      "rasterio",
      "osmnx",
      "duckdb spatial",
      "bigquery gis",
      "postgis",
      "leaflet",
    ],
    tags: ["geospatial", "spatial analysis", "python", "site selection", "leaflet"],
    related: ["https://opendrone.space/", "/featured/msc-thesis"],
  },
  {
    slug: "custom-website",
    links: {
      fiverr:
        "https://www.fiverr.com/balint_decsi/build-a-custom-business-website-with-booking-system-and-ai-chatbot",
      upwork:
        "https://www.upwork.com/services/product/development-it-a-custom-business-website-with-booking-system-and-ai-chatbot-2114719280329173633",
    },
    cover: customWebsiteCover,
    packages: [
      { name: "Launch", price: 150, days: 1, revisions: 1 },
      { name: "Grow", price: 450, days: 3, revisions: 3 },
      { name: "Automate", price: 1050, days: 7, revisions: 5 },
    ],
    features: [
      [3, 4, 6],
      [0, 3, 4],
      [true, true, true],
      [false, true, true],
      [false, true, true],
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    extras: [[null, 150, 300], 50, 100, 50, 200, 50, 50],
    category: "Programming & Tech › Website Development › Custom Websites",
    metadata: [
      ["Business"],
      ["TypeScript", "React", "Tailwind CSS", "Node.js", "JavaScript"],
      [
        "Booking",
        "Calendar",
        "Form",
        "Chat",
        "Customer support",
        "User authentication",
        "Admin panel",
        "Landing page",
        "Portfolio",
        "FAQ",
      ],
    ],
    stack: [
      "react",
      "typescript",
      "tanstack start",
      "next.js",
      "tailwind",
      "supabase",
      "cloudflare",
    ],
    tags: [
      "custom website",
      "website development",
      "react website",
      "booking system",
      "ai chatbot",
    ],
    related: ["https://dominiksarkany.com", "https://opendrone.space/"],
  },
];

export const gigText: GigText[] = [
  {
    title: "BigQuery data pipelines with Airflow and dbt on Google Cloud",
    short: "Data pipelines on Google Cloud",
    pitch:
      "Production-grade BigQuery pipelines your analysts can trust, without hiring a full-time data team. I spent five years on telco data platforms: Vodafone Hungary's analytics migration to Google Cloud and Deutsche Telekom's sovereign Apache Iceberg lakehouse on GCP, both covered by public Google Cloud case studies.",
    packages: [
      "1 source into BigQuery, a tested dbt model, daily schedule and a short handover doc",
      "Up to 3 sources, Airflow DAGs, dbt staging to marts with tests, alerting and documentation",
      "Up to 6 sources, lakehouse on BigQuery and GCS or Iceberg, CI/CD, data quality, cost tuning",
    ],
    features: [
      "Tables / models",
      "Source code",
      "Data source connectivity",
      "API integration",
      "Formatting and clean-up",
      "Documentation",
      "Data quality checks",
      "Unit tests",
      "Orchestrator setup",
    ],
    extras: [
      "Extra-fast delivery",
      "Additional data source",
      "Additional table or model",
      "Looker Studio dashboard",
      "Terraform for the setup",
      "Extra revision",
    ],
    build: [
      "Ingestion from APIs, databases, files, GA4, ads and SaaS tools into BigQuery",
      "Orchestration with Apache Airflow or Cloud Composer",
      "dbt models (staging, intermediate, marts) with tests and docs",
      "Medallion and lakehouse layouts on GCS, BigQuery and Iceberg",
      "Data quality checks, alerting and CI/CD (GitLab or GitHub)",
      "Cost tuning: partitioning, clustering, query optimization",
    ],
    steps: [
      "You share goals, sources and access to your own GCP project.",
      "I confirm the scope with a simple architecture diagram.",
      "I build, test and document in your repository.",
      "Handover call and a written runbook.",
    ],
    note: "You own all code. EU-based, GDPR-aware, NDA on request. Please message me before ordering so I can confirm your sources and scope.",
    metadata: ["Expertise", "Technology"],
    faq: [
      {
        q: "What do I need to provide?",
        a: "A GCP project with billing, IAM access for me, credentials for each source and a short description of the questions the data should answer.",
      },
      {
        q: "Who pays the Google Cloud costs?",
        a: "You do, in your own project. I design for low cost (partitioning, incremental models) and estimate the monthly spend at handover.",
      },
      {
        q: "Do I get the code?",
        a: "Yes. Everything lives in your Git repository: pipelines, dbt project, docs and runbook.",
      },
      {
        q: "Can you work with Snowflake, Databricks or DuckDB?",
        a: "Yes, but Google Cloud is my specialty. Message me with your stack and I'll confirm before you order.",
      },
      {
        q: "How do you handle sensitive data?",
        a: "Least-privilege access, no data copied outside your project, NDA on request. I'm EU-based and used to GDPR-bound telco data.",
      },
      {
        q: "What counts as a revision?",
        a: "Changes within the agreed scope. New sources or new models are extras or a custom offer.",
      },
      {
        q: "I only need an audit of my current setup.",
        a: "Message me: I offer a 3-day architecture, cost and reliability audit with a prioritized roadmap as a custom offer.",
      },
    ],
    requirements: [
      "What business questions or reports should this data support?",
      "Your data sources: type, approximate volume and access method (API, database, files).",
      "Is your GCP project ready, can you grant IAM access, and in which region?",
      "Which tools are already in place (Airflow, dbt, Looker, Git provider)?",
      "Any personal or sensitive data, deadlines or compliance constraints?",
    ],
    related: [
      "Deutsche Telekom case study (Google Cloud)",
      "Vodafone Hungary case study (Google Cloud)",
    ],
    coverAlt:
      "Diagram: APIs, databases, files, GA4 and SaaS tools flow into raw, staging and marts layers in a warehouse, each tested and orchestrated daily by Airflow, then on to dashboards, ML models and apps.",
  },
  {
    title: "Custom AI agents and RAG apps on your company data",
    short: "AI agents and RAG apps",
    pitch:
      "An AI agent that works on your data, not just a demo: it answers from your documents, uses your tools and stays reliable in production. I'm co-founder and CTO of an AI-native engineering lab in Vienna and a data engineer with five years on telco data platforms, so my agents are built like data products: tested, logged and cost-controlled.",
    packages: [
      "Scoping plus a working prototype: 1 agent or RAG app over your docs or 1 data source",
      "Agent or RAG app with up to 3 integrations, evals, guardrails, logging and deployment",
      "Multi-step or voice agent, up to 6 integrations, monitoring, cost dashboard and handover",
    ],
    features: [
      "Model integration in your app",
      "Source code",
      "Database integration",
      "Detailed code comments",
    ],
    extras: [
      "Extra-fast delivery",
      "Additional tool or integration",
      "Additional language",
      "Voice channel (ElevenLabs)",
      "AI model fine-tuning",
      "Extra revision",
    ],
    build: [
      "RAG assistants over your documents, website or knowledge base",
      "Agents that use tools: CRM, database, email, Slack, calendars, APIs",
      "Voice agents (ElevenLabs) for bookings and support",
      "Agents that safely query your data warehouse (BigQuery, Postgres)",
      "Evaluation sets, guardrails, monitoring and cost dashboards",
    ],
    steps: [
      "We define the use case and what good answers look like.",
      "I build a prototype on your real data.",
      "I harden it: evals, guardrails, deployment.",
      "Handover with docs and a walkthrough.",
    ],
    note: "You own the code and your API keys. EU-based and GDPR-aware. Please message me first with your use case.",
    metadata: ["AI engine", "Programming language"],
    faq: [
      {
        q: "Which AI models do you use?",
        a: "Claude, OpenAI, Gemini and Grok by default; open-weight models when data must stay on your infrastructure. I pick per use case and cost.",
      },
      {
        q: "Who pays for API usage?",
        a: "You do, with your own API keys and accounts. I estimate the monthly usage cost before we start.",
      },
      {
        q: "What if the agent gives a wrong answer?",
        a: "Answers are grounded in your content, tested on an evaluation set, refuse when unsure and can hand over to a human.",
      },
      {
        q: "Is my data safe?",
        a: "Your data stays in your accounts. EU hosting options, no training on your data, NDA on request.",
      },
      {
        q: "What do you need to start?",
        a: "The use case, sample documents or data access, the tools to connect and 10–20 example questions with good answers.",
      },
      { q: "Do I get the source code?", a: "Yes, in your repository, with setup instructions." },
      {
        q: "Can you improve an agent I already have?",
        a: "Yes: I can audit it, build evals and fix reliability issues. Message me for a custom offer.",
      },
      {
        q: "What counts as a revision?",
        a: "Changes within the agreed scope. New integrations or channels are extras.",
      },
    ],
    requirements: [
      "The use case, and who will use the agent.",
      "What data or documents it should use, and how I can access them.",
      "Which tools or systems it must connect to.",
      "Preferred AI provider and hosting (or no preference), and whether you'll provide API keys.",
      "Which languages the agent should speak.",
      "Any privacy constraints.",
      "10–20 example questions with ideal answers.",
    ],
    related: ["proximata.io", "My agent skills library on GitHub"],
    coverAlt:
      "Diagram: your docs, website, CRM and database feed an agent running on Claude, GPT or Gemini that finds the right passages, reasons over them and acts with your calendar, email, Slack and APIs, with a sample answer that cites its source.",
  },
  {
    title: "Location intelligence and site selection with Python, H3 and web maps",
    short: "Location intelligence and site selection",
    pitch:
      "Where should you open, invest or expand? I turn location data into clear answers: scored sites, explainable models and interactive maps you can share. I built geospatial ML features and network-planning maps for a national telco's B2B clients, and a Budapest rent model on Uber H3 hexagons with Sentinel-2 greenness and WorldPop population data (9.8% median error on 50,000 listings).",
    packages: [
      "1 area, up to 3 open data layers on an H3 grid, interactive map, data files and findings note",
      "Up to 10 sites, 8 location features, explainable scoring, web map, notebook and slides",
      "Client + open data pipeline, predictive model with SHAP explanations and a hosted web map",
    ],
    features: ["Maps", "Presentation slides"],
    extras: [
      "Extra-fast delivery",
      "Additional area or city",
      "Additional data source",
      "Deployment and hosting setup",
      "Scheduled data refresh",
      "Client-ready slide deck",
      "Extra revision",
    ],
    build: [
      "Site selection and catchment analysis (population, competitors, POIs, travel-time isochrones)",
      "H3 hex-grid location features ready for machine learning",
      "Satellite and open data: Sentinel-2, WorldPop, OpenStreetMap, Eurostat",
      "Explainable scoring and predictive models (XGBoost, SHAP)",
      "Interactive web maps (Leaflet, kepler.gl) with automated data refresh",
      "Real estate location analytics: rent, yield, neighbourhood quality",
    ],
    steps: [
      "You tell me the decision, the area and any sites or customer data you have.",
      "I check open data availability for your area before you order.",
      "I build the features, scores or model and the map, in reproducible code.",
      "You get the map, notebooks and data files in open formats (GeoParquet, GeoJSON, CSV).",
    ],
    note: "EU-based. Please message me before ordering so I can check data availability for your area.",
    metadata: ["Tool"],
    faq: [
      {
        q: "What data do I need?",
        a: "Your locations or customer data if you have them. I source open data: OpenStreetMap, WorldPop, Sentinel-2, Eurostat and national statistics.",
      },
      {
        q: "Which areas can you cover?",
        a: "Anywhere with good open data; Europe is strongest. I confirm data availability for your area before you order.",
      },
      {
        q: "Do I get the code and data?",
        a: "Yes: notebooks, scripts and outputs in GeoParquet, GeoJSON and CSV.",
      },
      {
        q: "Can the map be embedded on my website?",
        a: "Yes, as an embeddable web map, or hosted on your own cloud with the deployment extra.",
      },
      {
        q: "Can you refresh the data regularly?",
        a: "Yes, with the scheduled data refresh extra; ongoing hosting can be arranged as a custom offer.",
      },
      {
        q: "How do you handle customer location data?",
        a: "It stays in your accounts and is used only for the project. EU-based, NDA on request.",
      },
      {
        q: "What counts as a revision?",
        a: "Changes within the agreed area, layers and features. New areas or data sources are extras.",
      },
    ],
    requirements: [
      "What decision should the analysis support (site choice, investment, expansion, planning)?",
      "Which area or areas, and your candidate sites or customer locations if you have any.",
      "What data you have (format, size), and what I should source.",
      "Preferred output: report, interactive map, model, or all three; and whether to embed it on a website.",
      "Deadlines and data-privacy constraints.",
    ],
    related: ["opendrone.space", "Budapest rent model (MSc capstone)"],
    coverAlt:
      "Cover: “Location intelligence on H3 hexagons” over a hexagon grid; site selection, web maps and explainable geo ML with Python, H3, GeoPandas and Leaflet.",
  },
  {
    title: "Custom business websites with booking and an AI chatbot",
    short: "Custom business websites",
    pitch:
      "A fast, professional website that does more than look good: it takes bookings, sends emails and can answer your clients with an AI assistant. Pick the level you need — Launch gets a fast, accessible site with SEO live in one day; Grow adds a backend with a custom booking calendar, contact-form emails and editable content; Automate adds an AI assistant that answers from your content and books appointments.",
    packages: [
      "Fast site with 3 menu sections, SEO and social meta, accessible, deployed live",
      "Up to 4 pages plus backend: custom booking calendar, contact form with email, editable content",
      "Everything in Grow plus an AI assistant that answers from your content and books appointments",
    ],
    features: [
      "Pages",
      "Integrations (email, calendar, analytics…)",
      "Content upload",
      "Opt-in form",
      "Autoresponder (booking and contact confirmations)",
      "Speed optimization",
      "Hosting setup",
      "Social media icons",
    ],
    extras: [
      "Extra-fast delivery",
      "Additional page",
      "Additional language (you provide the text)",
      "GDPR pack (privacy page, cookie consent)",
      "Stripe payments for bookings",
      "Domain and email DNS setup",
      "Extra revision",
    ],
    build: [
      "Multilingual sites: English, German, Hungarian, Spanish",
      "Custom booking calendars that sync with Google Calendar or cal.com",
      "Contact forms with email confirmations and reminders",
      "Content you can edit yourself in an admin panel",
      "AI assistants that answer only from your content and hand over to you",
      "Accessibility, performance and SEO built in; EU hosting options",
    ],
    steps: [
      "You send your goals and 2–3 websites you like.",
      "I confirm the package and what I need from you: logo, texts, photos, services.",
      "I build the site and share a preview for your feedback.",
      "I go live and hand over the repository and admin access to every account.",
    ],
    note: "Clean code you own, hosted on your own accounts. Please message me before ordering with your goals and any example sites you like.",
    metadata: ["Website type", "Programming languages", "Website features"],
    faq: [
      {
        q: "Who pays for hosting, the domain and AI usage?",
        a: "You do, on your own accounts (typically a few euros a month; AI usage depends on traffic). I set everything up for you.",
      },
      {
        q: "Do I own the code?",
        a: "Yes. You get the repository and admin access to every account.",
      },
      {
        q: "Can the booking sync with Google Calendar?",
        a: "Yes. Bookings can sync with Google Calendar or cal.com, with email confirmations and reminders.",
      },
      {
        q: "What if the AI assistant answers wrongly?",
        a: "It only answers from your content, refuses when unsure and hands over to you by email.",
      },
      {
        q: "Which languages can my site have?",
        a: "Any; I work in English, German, Hungarian and Spanish. Extra languages are an extra.",
      },
      {
        q: "Is it GDPR compliant?",
        a: "I use EU hosting regions and can add a privacy page and cookie consent with the GDPR extra. Legal text review is your lawyer's job.",
      },
      {
        q: "What do you need to start?",
        a: "Your logo, texts, photos, services and 2–3 websites you like. No texts yet? Tell me and we plan around it.",
      },
      {
        q: "What counts as a revision?",
        a: "A round of changes to the delivered design or content within the package scope. New pages or features are extras.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. Send me the link and I'll confirm the right package.",
      },
    ],
    requirements: [
      "What the website is for, and who your visitors are.",
      "Your logo, texts, photos and list of services (or what's still missing).",
      "2–3 websites you like, and what you like about them.",
      "Whether you already have a domain and hosting, and which languages you need.",
      "For Grow and Automate: how bookings should work (services, durations, availability, calendar); for Automate, which documents or FAQs the assistant should use.",
    ],
    related: ["dominiksarkany.com", "opendrone.space"],
    coverAlt:
      "Cover: “Live in 1 day — fast, bilingual, accessible” beside a laptop and a phone showing the bilingual website of a sport psychologist.",
  },
];
