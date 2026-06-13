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

export const certifications: string[] = [
  "Generative AI Fundamentals",
  "Launching into Machine Learning",
  "Modernizing Data Lakes and Data Warehouses with Google Cloud",
  "Introduction to Responsible AI",
  "EUGLOH Summer School",
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