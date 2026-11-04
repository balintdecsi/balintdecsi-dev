import { createFileRoute } from "@tanstack/react-router";
import { FreelancePage, freelanceHead } from "@/components/freelance-page";

export const Route = createFileRoute("/de_/freelance")({
  head: () => freelanceHead("de"),
  component: FreelancePage,
});
