import { createFileRoute } from "@tanstack/react-router";
import { RoleDashboard } from "@/components/RoleDashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Skoolio" },
      { name: "description", content: "Your role-specific overview of school activities, learning and progress." },
      { property: "og:title", content: "Dashboard — Skoolio" },
      { property: "og:description", content: "Your role-specific overview of school activities, learning and progress." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RoleDashboard,
});
