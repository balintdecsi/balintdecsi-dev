import { createFileRoute } from "@tanstack/react-router";
import { FreelancePage, freelanceHead } from "@/components/freelance-page";

export const Route = createFileRoute("/hu_/freelance")({
  head: () => freelanceHead("hu"),
  component: FreelancePage,
});
