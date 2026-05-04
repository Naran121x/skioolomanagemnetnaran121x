import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { DataTable, StatCard } from "@/components/data-primitives";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/staff")({
  head: () => ({ meta: [{ title: "Staff — Skoolio" }] }),
  component: StaffPage,
});

const STAFF = [
  { name: "Priya Menon", role: "Math · Head of Dept", dept: "Mathematics", status: "Active" },
  { name: "Arjun Rao", role: "Physics Teacher", dept: "Science", status: "Active" },
  { name: "Sara Khan", role: "Counselor", dept: "Wellness", status: "On Leave" },
  { name: "Daniel Lee", role: "Computer Science", dept: "Technology", status: "Active" },
  { name: "Mei Tanaka", role: "Literature", dept: "Humanities", status: "Active" },
  { name: "Omar Abdi", role: "PE Coordinator", dept: "Sports", status: "Active" },
];

function StaffPage() {
  return (
    <PageShell
      title="Staff"
      subtitle="Manage teachers, counselors and support staff."
      actions={<Button className="rounded-xl">+ Add staff</Button>}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Total staff" value="86" />
        <StatCard label="Teachers" value="62" />
        <StatCard label="On leave" value="4" />
        <StatCard label="Open roles" value="3" hint="Recruitment active" />
      </div>
      <DataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "role", label: "Role" },
          { key: "dept", label: "Department" },
          { key: "status", label: "Status" },
        ]}
        rows={STAFF.map((s) => ({
          name: <span className="font-medium text-foreground">{s.name}</span>,
          role: s.role,
          dept: s.dept,
          status: (
            <Badge variant={s.status === "Active" ? "secondary" : "outline"} className="rounded-full">
              {s.status}
            </Badge>
          ),
        }))}
      />
    </PageShell>
  );
}
