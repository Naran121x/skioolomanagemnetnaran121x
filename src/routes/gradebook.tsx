import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { DataTable, StatCard } from "@/components/data-primitives";

export const Route = createFileRoute("/gradebook")({
  head: () => ({ meta: [{ title: "Gradebook — Skoolio" }] }),
  component: GradebookPage,
});

const ROWS = [
  { name: "Aanya Sharma", quiz: "92", mid: "88", project: "A", final: "A" },
  { name: "Rohan Iyer", quiz: "85", mid: "82", project: "B+", final: "A-" },
  { name: "Liam O'Connor", quiz: "74", mid: "70", project: "B", final: "B" },
  { name: "Yuki Tanaka", quiz: "97", mid: "94", project: "A+", final: "A+" },
  { name: "Nadia Hassan", quiz: "65", mid: "60", project: "C+", final: "C+" },
];

function GradebookPage() {
  return (
    <PageShell title="Gradebook" subtitle="Class 8B · Physics · Term 2">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Class average" value="83.4" delta="+2.1" />
        <StatCard label="Above grade" value="18 / 28" />
        <StatCard label="Needs review" value="3" />
      </div>
      <DataTable
        columns={[
          { key: "name", label: "Student" },
          { key: "quiz", label: "Quiz" },
          { key: "mid", label: "Midterm" },
          { key: "project", label: "Project" },
          { key: "final", label: "Final" },
        ]}
        rows={ROWS.map((r) => ({
          name: <span className="font-medium text-foreground">{r.name}</span>,
          quiz: r.quiz,
          mid: r.mid,
          project: r.project,
          final: <span className="font-bold text-foreground">{r.final}</span>,
        }))}
      />
    </PageShell>
  );
}
