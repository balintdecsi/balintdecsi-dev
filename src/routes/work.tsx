import { createFileRoute } from "@tanstack/react-router";
import { WorkSection } from "@/components/sections/work";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Bálint Décsi" },
      {
        name: "description",
        content:
          "Selected work: Proximata (co-founder & CTO), an ML rent-prediction capstone for ingatlan.com, client engagements at Deutsche Telekom and Vodafone, plus tools and demos.",
      },
      { property: "og:title", content: "Work — Bálint Décsi" },
      { property: "og:description", content: "Projects, client engagements, tools, and demos." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: () => <WorkSection standalone />,
});
