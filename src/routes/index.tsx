import { createFileRoute } from "@tanstack/react-router";
import { HomePage, homeHead } from "@/components/home-page";
import { HREFLANG_LINKS } from "@/lib/locale";

export const Route = createFileRoute("/")({
  head: () => ({
    ...homeHead("en"),
    links: [{ rel: "canonical", href: "https://balintdecsi.dev/" }, ...HREFLANG_LINKS],
  }),
  component: HomePage,
});
