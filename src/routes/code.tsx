import { createFileRoute } from "@tanstack/react-router";
import { CodeSection } from "@/components/sections/code";

export const Route = createFileRoute("/code")({
  head: () => ({
    meta: [
      { title: "Code — Bálint Décsi" },
      {
        name: "description",
        content: "Repositories, side projects, theses, and open-source experiments by Bálint Décsi.",
      },
      { property: "og:title", content: "Code — Bálint Décsi" },
      { property: "og:description", content: "Side projects, theses, and open-source repositories." },
      { property: "og:url", content: "/code" },
    ],
    links: [{ rel: "canonical", href: "/code" }],
  }),
  component: () => <CodeSection standalone />,
});
