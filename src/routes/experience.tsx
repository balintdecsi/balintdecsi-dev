import { createFileRoute } from "@tanstack/react-router";
import { ExperienceSection } from "@/components/sections/experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Bálint Décsi" },
      {
        name: "description",
        content:
          "Roles and workplaces of Bálint Décsi — Deutsche Telekom, Proximata, mesh., Vodafone Hungary — plus education. Full CV downloadable as PDF.",
      },
      { property: "og:title", content: "Experience — Bálint Décsi" },
      { property: "og:description", content: "Employment history, education, and a downloadable CV." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: () => <ExperienceSection standalone />,
});
