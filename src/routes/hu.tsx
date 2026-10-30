import { createFileRoute } from "@tanstack/react-router";
import { HomePage, homeHead } from "@/components/home-page";
import { HREFLANG_LINKS } from "@/lib/locale";

export const Route = createFileRoute("/hu")({
  head: () => ({
    ...homeHead("hu"),
    links: [{ rel: "canonical", href: "https://balintdecsi.dev/hu" }, ...HREFLANG_LINKS],
  }),
  component: HomePage,
});
