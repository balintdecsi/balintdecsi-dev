import { createFileRoute } from "@tanstack/react-router";
import { FreelancePage, freelanceHead } from "@/components/freelance-page";

export const Route = createFileRoute("/es_/freelance")({
  head: () => freelanceHead("es"),
  component: FreelancePage,
});
