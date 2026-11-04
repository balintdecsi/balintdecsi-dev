import { createFileRoute } from "@tanstack/react-router";
import { FreelancePage, freelanceHead } from "@/components/freelance-page";

export const Route = createFileRoute("/freelance")({
  head: () => freelanceHead("en"),
  component: FreelancePage,
});
