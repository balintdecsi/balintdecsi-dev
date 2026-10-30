import { createFileRoute } from "@tanstack/react-router";
import { HomePage, homeHead } from "@/components/home-page";
import { HREFLANG_LINKS } from "@/lib/locale";

export const Route = createFileRoute("/es")({
  head: () => ({
    ...homeHead("es"),
    links: [{ rel: "canonical", href: "https://balintdecsi.dev/es" }, ...HREFLANG_LINKS],
  }),
  component: HomePage,
});
