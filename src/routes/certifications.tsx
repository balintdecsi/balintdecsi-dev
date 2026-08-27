import { createFileRoute } from "@tanstack/react-router";
import { CertificationsSection } from "@/components/sections/certifications";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & awards — Bálint Décsi" },
      {
        name: "description",
        content:
          "Google Cloud Skills Boost badges, DataCamp tracks, and scholarships awarded to Bálint Décsi — with links to each credential.",
      },
      { property: "og:title", content: "Certifications & awards — Bálint Décsi" },
      { property: "og:description", content: "Credentials, badges, and scholarships with verification links." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: () => <CertificationsSection standalone />,
});
