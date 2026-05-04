import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { DataTable, StatCard } from "@/components/data-primitives";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/homework")({
  head: () => ({ meta: [{ title: "Homework — Skoolio" }] }),
  component: HomeworkPage,
});

const HW = [
  { title: "Physics — Problem set 7", due: "Today", status: "Due" },
  { title: "Python — Loops exercise", due: "Tomorrow", status: "Pending" },
  { title: "Literature — Sonnet analysis", due: "Fri", status: "Pending" },
  { title: "Bio — Lab report", due: "Last week", status: "Submitted" },
];

function HomeworkPage() {
  return (
    <PageShell title="Homework" subtitle="Track assignments and submissions.">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Pending" value="3" />
        <StatCard label="Submitted" value="22" delta="+4" />
        <StatCard label="On-time rate" value="94%" />
      </div>
      <DataTable
        columns={[
          { key: "title", label: "Assignment" },
          { key: "due", label: "Due" },
          { key: "status", label: "Status" },
        ]}
        rows={HW.map((h) => ({
          title: <span className="font-medium text-foreground">{h.title}</span>,
          due: h.due,
          status: (
            <Badge
              variant="outline"
              className={`rounded-full ${
                h.status === "Due" ? "text-destructive border-destructive/40" :
                h.status === "Submitted" ? "text-success border-success/40" : ""
              }`}
            >
              {h.status}
            </Badge>
          ),
        }))}
      />
    </PageShell>
  );
}
