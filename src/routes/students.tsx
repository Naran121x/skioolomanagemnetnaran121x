import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { DataTable, StatCard } from "@/components/data-primitives";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/students")({
  head: () => ({ meta: [{ title: "Students — Skoolio" }] }),
  component: () => (
    <ProtectedRoute allow={["admin", "teacher"]}>
      <StudentsPage />
    </ProtectedRoute>
  ),
});

const STUDENTS = [
  { name: "Aanya Sharma", grade: "8B", house: "Bluebell", attend: "96%", risk: "Low" },
  { name: "Rohan Iyer", grade: "8B", house: "Maple", attend: "91%", risk: "Low" },
  { name: "Liam O'Connor", grade: "9A", house: "Aster", attend: "82%", risk: "Med" },
  { name: "Yuki Tanaka", grade: "10C", house: "Bluebell", attend: "98%", risk: "Low" },
  { name: "Nadia Hassan", grade: "7A", house: "Maple", attend: "74%", risk: "High" },
  { name: "Ethan Park", grade: "9A", house: "Aster", attend: "89%", risk: "Low" },
];

function StudentsPage() {
  return (
    <PageShell
      title="Students"
      subtitle="Search, filter and manage student records."
      actions={<Button className="rounded-xl">+ Enroll student</Button>}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Enrolled" value="1,284" delta="+24" />
        <StatCard label="Avg. attendance" value="94.6%" />
        <StatCard label="Honor roll" value="218" />
        <StatCard label="At-risk" value="12" hint="AI flagged" />
      </div>
      <DataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "grade", label: "Grade" },
          { key: "house", label: "House" },
          { key: "attend", label: "Attendance" },
          { key: "risk", label: "Risk" },
        ]}
        rows={STUDENTS.map((s) => ({
          name: <span className="font-medium text-foreground">{s.name}</span>,
          grade: s.grade,
          house: s.house,
          attend: s.attend,
          risk: (
            <Badge
              variant="outline"
              className={`rounded-full ${
                s.risk === "High" ? "text-destructive border-destructive/40" :
                s.risk === "Med" ? "text-warning-foreground border-warning/60" :
                "text-success border-success/40"
              }`}
            >
              {s.risk}
            </Badge>
          ),
        }))}
      />
    </PageShell>
  );
}
