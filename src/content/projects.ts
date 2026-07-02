export interface Project {
  name: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export const sideProjects: Project[] = [
  {
    name: "ComicFactory",
    blurb:
      "ML-driven SaaS that generates stylized comics with consistent characters from a handful of reference images. Built at Hungary's first hacker space using Supabase, Firebase, and modern image-gen pipelines.",
    tags: ["LLMs", "Image Gen", "SaaS", "Supabase"],
    links: [
      { label: "comicsfactory.tech", href: "https://comicsfactory.tech" },
      { label: "growmesh.io", href: "https://growmesh.io" },
    ],
  },
];