import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { DataTable, StatCard } from "@/components/data-primitives";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/lessons")({
  head: () => ({ meta: [{ title: "Lesson Planner — Skoolio" }] }),
  component: LessonsPage,
});

const LESSONS = [
  { title: "Newton's Laws — Recap", subject: "Physics", date: "Mon · 09:30", status: "Ready" },
  { title: "Python Loops & Conditionals", subject: "CS", date: "Mon · 11:00", status: "Draft" },
  { title: "Photosynthesis Lab", subject: "Biology", date: "Tue · 10:00", status: "Ready" },
  { title: "Shakespeare — Sonnet 18", subject: "Literature", date: "Wed · 14:00", status: "Ready" },
];

function LessonsPage() {
  return (
    <PageShell
      title="Lesson Planner"
      subtitle="AI-assisted plans, auto-saved."
      actions={<Button className="rounded-xl">+ New lesson</Button>}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Planned this week" value="18" />
        <StatCard label="Drafts" value="4" />
        <StatCard label="AI-assisted" value="11" hint="Saved ~3.2 hrs" />
      </div>
      <DataTable
        columns={[
          { key: "title", label: "Lesson" },
          { key: "subject", label: "Subject" },
          { key: "date", label: "Scheduled" },
          { key: "status", label: "Status" },
        ]}
        rows={LESSONS.map((l) => ({
          title: <span className="font-medium text-foreground">{l.title}</span>,
          subject: l.subject,
          date: l.date,
          status: (
            <Badge variant={l.status === "Ready" ? "secondary" : "outline"} className="rounded-full">
              {l.status}
            </Badge>
          ),
        }))}
      />
    </PageShell>
  );
}
