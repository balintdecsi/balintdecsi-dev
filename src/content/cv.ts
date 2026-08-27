export type Tag = string;

export interface ExperienceEntry {
  title: string;
  org: string;
  orgUrl?: string;
  date: string;
  location: string;
  bullets: string[];
  tags: Tag[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Data Engineer",
    org: "Deutsche Telekom IT Solutions HU",
    date: "May 2024 — Present",
    location: "Budapest, Hungary",
    bullets: [
      "Engineering scalable ML solutions and pipelines for the fixed-line business segment.",
      "Building a modern Data Lakehouse using Apache Iceberg on Google Cloud Platform.",
      "Developing automated Apache Airflow pipelines for robust data ingestion and processing.",
    ],
    tags: ["ML Engineering", "Apache Iceberg", "GCP", "Airflow", "Data Lakehouse"],
  },
  {
    title: "CTO",
    org: "Proximata",
    orgUrl: "https://proximata.io/",
    date: "May 2026 — Present",
    location: "Vienna, Austria",
    bullets: [
      "Leading technical strategy and execution at Proximata, a Vienna-based hacker lab.",
      "Driving product and engineering decisions from concept to production for AI-native products.",
      "Building tech solutions and spinoffs by enabling ambitious builders with infrastructure and resources.",
    ],
    tags: ["Technical Leadership", "AI Systems", "Product Engineering", "Venture Building"],
  },
  {
    title: "Builder",
    org: "mesh.",
    date: "June 2025 — Present",
    location: "Budapest, Hungary",
    bullets: [
      "Member of Hungary's first hacker space.",
      "Engineering an ML-driven SaaS that generates stylized comics with consistent characters from images.",
      "Rapid prototyping using Supabase, Firebase, and modern full-stack tools.",
      "Leveraging AI agents (Cursor, Gemini CLI, Copilot) for accelerated, parallelized development.",
    ],
    tags: ["AI Agents", "ML Prototyping", "SaaS", "Supabase", "Firebase", "LLMs"],
  },
  {
    title: "Advanced Analytics Expert",
    org: "Vodafone Hungary",
    date: "Oct 2023 — Apr 2024",
    location: "Budapest, Hungary",
    bullets: [
      "Optimizing network infrastructure using unsupervised machine learning techniques.",
      "Implementing Explainable AI (XAI) to drive business engagement and trust in model decisions.",
      "Developing interactive geospatial visualizations to support strategic network planning.",
    ],
    tags: ["Unsupervised ML", "XAI", "Geospatial", "Python"],
  },
  {
    title: "Data Scientist",
    org: "Vodafone Hungary",
    date: "Apr 2023 — Oct 2023",
    location: "Budapest, Hungary",
    bullets: [
      "Fourth rotation in Vodafone's Discover Graduate Program.",
      "End-to-end delivery of machine learning models for external B2B clients.",
      "Engineered a custom feature store for geospatial and location-based data.",
      "Developed automated web scraping tools for competitive intelligence gathering.",
    ],
    tags: ["ML Modeling", "Python", "Feature Engineering", "Web Scraping", "Geospatial"],
  },
  {
    title: "Data Analyst",
    org: "Vodafone Hungary",
    date: "Oct 2022 — Apr 2023",
    location: "Budapest, Hungary",
    bullets: [
      "Third rotation in Vodafone's Discover Graduate Program.",
      "Architected foundation data models for a major geospatial retail analytics initiative.",
      "Translated complex analytical results into actionable reports for business stakeholders.",
    ],
    tags: ["SQL", "Data Visualization", "BI", "Geospatial"],
  },
  {
    title: "Data Warehouse Specialist",
    org: "Vodafone Hungary",
    date: "Apr 2022 — Oct 2022",
    location: "Budapest, Hungary",
    bullets: [
      "Second rotation in Vodafone's Discover Graduate Program.",
      "Designed and implemented optimized data marts on a cloud-native lakehouse architecture.",
      "Collaborated with cross-functional stakeholders to define technical data requirements.",
    ],
    tags: ["Cloud DWH", "SQL", "Data Modeling", "Lakehouse"],
  },
  {
    title: "Data Engineer",
    org: "Vodafone Hungary",
    date: "Sep 2021 — Apr 2022",
    location: "Budapest, Hungary",
    bullets: [
      "First rotation in Vodafone's Discover Graduate Program.",
      "Built ETL pipelines migrating critical on-premise data to cloud-based environments.",
    ],
    tags: ["Data Pipelines", "Cloud Migration", "ETL"],
  },
  {
    title: "Undergraduate Research Fellow",
    org: "Institute of Biochemistry, Biological Research Centre",
    date: "Jan 2019 — Jun 2020",
    location: "Szeged, Hungary",
    bullets: [
      "Developed computer vision plugins for automated biological image analysis.",
      "Applied deep learning techniques to high-throughput microscopy data.",
      "Designed and implemented robust data management systems for large-scale measurements.",
    ],
    tags: ["Computer Vision", "Deep Learning", "Biomedical Imaging"],
  },
];

export interface EducationEntry {
  degree: string;
  org: string;
  date: string;
}

export const education: EducationEntry[] = [
  { degree: "MS Business Analytics", org: "Central European University", date: "Sep 2025 — Jun 2026" },
  { degree: "MS Data Science for Machine Learning", org: "Pázmány Péter Catholic University", date: "Jan 2020 — Dec 2021" },
  { degree: "BS Molecular Bionics", org: "University of Szeged", date: "2016 — 2020" },
  { degree: "Exchange — Biomedical Engineering", org: "Universidad CES, Colombia", date: "2019" },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

const GCSB_A = "https://www.cloudskillsboost.google/public_profiles/6ca5cf48-92ee-499c-babe-43b6269d59f7/badges";
const GCSB_B = "https://www.cloudskillsboost.google/public_profiles/64e2ba24-a347-4e9d-ba9d-c0bf198184d3/badges";

export const certifications: Certification[] = [
  { name: "Google Cloud Fundamentals: Core Infrastructure", issuer: "Google Cloud Skills Boost", date: "Mar 2024", url: `${GCSB_A}/8352355` },
  { name: "Launching into Machine Learning", issuer: "Google Cloud Skills Boost", date: "Feb 2024", url: `${GCSB_A}/8011010` },
  { name: "Introduction to AI and Machine Learning on Google Cloud", issuer: "Google Cloud Skills Boost", date: "Nov 2023", url: `${GCSB_A}/6073750` },
  { name: "Encoder-Decoder Architecture", issuer: "Google Cloud Skills Boost", date: "Jul 2023", url: `${GCSB_B}/4491738` },
  { name: "Introduction to Image Generation", issuer: "Google Cloud Skills Boost", date: "Jul 2023", url: `${GCSB_B}/4230912` },
  { name: "Generative AI Fundamentals", issuer: "Google Cloud Skills Boost", date: "Jul 2023", url: `${GCSB_B}/4230406` },
  { name: "Introduction to Responsible AI", issuer: "Google Cloud Skills Boost", date: "Jun 2023", url: `${GCSB_B}/4108202` },
  { name: "Introduction to Large Language Models", issuer: "Google Cloud Skills Boost", date: "Jun 2023", url: `${GCSB_B}/4052901` },
  { name: "Introduction to Generative AI", issuer: "Google Cloud Skills Boost", date: "Jun 2023", url: `${GCSB_B}/4031467` },
  { name: "Modernizing Data Lakes and Data Warehouses with Google Cloud", issuer: "Google Cloud Skills Boost", date: "Feb 2022", url: `${GCSB_B}/1723147` },
  { name: "Google Cloud Big Data and Machine Learning Fundamentals", issuer: "Google Cloud Skills Boost", date: "Nov 2021", url: `${GCSB_B}/1542057` },
  { name: "Python Fundamentals Track", issuer: "DataCamp", date: "May 2021" },
  { name: "EUGLOH Summer School", issuer: "European University Alliance for Global Health", date: "Jul 2020" },
];

export interface SelectedProject {
  name: string;
  role: string;
  client: string;
  date: string;
  summary: string;
  highlights: string[];
  tags: string[];
  links: { label: string; href: string }[];
}

/** Client-facing case studies — shared by the Work page and the CV PDF. */
export const selectedProjects: SelectedProject[] = [
  {
    name: "Budapest rental price prediction",
    role: "Machine Learning Engineer",
    client: "ingatlan.com (MSc capstone, CEU)",
    date: "Mar 2026 — Jul 2026",
    summary:
      "Rent-suggestion model for Budapest flats so landlords can price competitively at listing upload and cut time-on-market.",
    highlights: [
      "9.8% MdAPE on 50,898 listings with rolling time-series CV and a frozen newest-20% holdout, beating the client's ≤10% target.",
      "Geospatial enrichment on Uber H3 blocks: lagged WorldPop demographics and Sentinel-2 NDVI greenness via Microsoft Planetary Computer.",
      "Medallion (bronze→silver→gold) warehouse and SHAP/permutation diagnostics feeding an inline instant-pricing UI design.",
    ],
    tags: ["XGBoost", "LightGBM", "GCP", "H3", "SHAP"],
    links: [
      { label: "report", href: "https://balintdecsi.dev/featured/msc-thesis" },
      { label: "github", href: "https://github.com/balintdecsi/ceu-public-thesis" },
    ],
  },
  {
    name: "Central European hacker-space movement",
    role: "Co-founder & CTO",
    client: "Proximata (Vienna) · mesh. (Budapest)",
    date: "May 2025 — present",
    summary:
      "Builder community and innovation space where technical talent grows through hands-on building, contract work, and incubation. I lead technical strategy and take AI-native products from concept to production.",
    highlights: [
      "Comics Factory: ML-driven SaaS generating stylized comics with consistent characters from a few reference images.",
      "Rapid full-stack prototyping on Supabase, Firebase, and Firestore; AI agents (Cursor, Gemini CLI, Copilot) for parallelized delivery.",
    ],
    tags: ["LLMs", "Image gen", "Supabase", "Firebase"],
    links: [
      { label: "proximata.io", href: "https://proximata.io" },
      { label: "comicsfactory.tech", href: "https://comicsfactory.tech" },
      { label: "growmesh.io", href: "https://growmesh.io" },
    ],
  },
  {
    name: "Sovereign data platform",
    role: "Data Engineer",
    client: "Deutsche Telekom",
    date: "May 2024 — present",
    summary:
      "Turning a 20-year-old telco data estate — full of sensitive customer data and bound by strict EU regulation — into a nimble, cloud-native lakehouse.",
    highlights: [
      "Apache Iceberg lakehouse on Google Cloud with automated Airflow ingestion for the fixed-line segment.",
      "Scalable ML solutions and pipelines delivered through GitLab CI/CD.",
    ],
    tags: ["GCP", "BigQuery", "Python", "Apache Iceberg", "Airflow", "GitLab CI/CD"],
    links: [
      {
        label: "google cloud case study",
        href: "https://cloud.google.com/blog/topics/customers/engineering-deutsche-telekoms-sovereign-data-platform",
      },
    ],
  },
  {
    name: "Domestic network optimization",
    role: "Data Scientist",
    client: "Vodafone Hungary (B2B: telco & banking)",
    date: "Dec 2022 — Apr 2024",
    summary:
      "Greenfield geospatial machine learning for domestic retail-network optimization at Hungary's largest telco and banking companies. A small team covered end-to-end data and ML modelling, from feature store to client presentation.",
    highlights: [
      "End-to-end delivery of ML models for external B2B clients, on a custom geospatial and location-based feature store.",
      "Unsupervised models for network-infrastructure optimization, with Explainable AI (XAI) to build business trust in model decisions.",
      "Automated web scraping for competitive intelligence and interactive geospatial visualizations for strategic network planning.",
    ],
    tags: ["Python", "scikit-learn", "TensorFlow", "GIS", "BigQuery"],
    links: [],
  },
  {
    name: "Vodafone Hungary data migration",
    role: "Data Engineer",
    client: "Vodafone Hungary",
    date: "Sep 2021 — Sep 2022",
    summary:
      "Moving the data and analytics platform of Hungary's second-largest telco — ~3.8M residential and business subscribers after the UPC Hungary acquisition — to Google Cloud.",
    highlights: [
      "Built ETL pipelines migrating critical on-premise data to cloud-based environments.",
      "Designed and implemented optimized data marts on a cloud-native lakehouse architecture.",
      "Worked with cross-functional stakeholders to define technical data requirements.",
    ],
    tags: ["GCP", "BigQuery", "SQL", "ETL", "Lakehouse"],
    links: [
      {
        label: "google cloud case study",
        href: "https://cloud.google.com/blog/products/data-analytics/vodafone-hungary-data-platform-migration",
      },
    ],
  },
];


export const awards: string[] = [
  "Highlighted Study Scholarship of the Hungarian State",
  "Municipal Scholarship of Szeged",
  "Campus Mundi Scholarship",
  "IT Star Award",
  "Data Rockstar",
];

export const skills: string[] = [
  "Python", "AI Agents", "ML Engineering", "Apache Airflow", "Apache Iceberg",
  "Google Cloud", "Deep Learning", "Computer Vision", "Geospatial Analytics",
  "XAI", "SQL", "Data Lakehouse", "SaaS Prototyping",
];