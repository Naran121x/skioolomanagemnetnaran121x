import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/messages")({
  head: () => ({
    meta: [
      { title: "Messages — Skoolio" },
      { name: "description", content: "Visit the school communication workspace." },
      { property: "og:title", content: "Messages — Skoolio" },
      { property: "og:description", content: "Visit the school communication workspace." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <PageShell title="Messages" emoji="💬" subtitle="In-app messaging with auto-translation">
      <Card className="rounded-3xl p-10 border-0 shadow-soft text-center text-muted-foreground">
        Your inbox is calm. New messages will appear here.
      </Card>
    </PageShell>
  ),
});
