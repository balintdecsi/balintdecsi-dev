import { createFileRoute } from "@tanstack/react-router";
import { HomePage, homeHead } from "@/components/home-page";
import { HREFLANG_LINKS } from "@/lib/locale";

export const Route = createFileRoute("/de")({
  head: () => ({
    ...homeHead("de"),
    links: [{ rel: "canonical", href: "https://balintdecsi.dev/de" }, ...HREFLANG_LINKS],
  }),
  component: HomePage,
});
