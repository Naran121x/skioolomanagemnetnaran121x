import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/attendance")({
  head: () => ({
    meta: [
      { title: "Attendance — Skoolio" },
      { name: "description", content: "Live attendance and history." },
    ],
  }),
  component: AttendancePage,
});

const DAYS = [
  { d: "Mon", s: "present" }, { d: "Tue", s: "present" }, { d: "Wed", s: "late" },
  { d: "Thu", s: "present" }, { d: "Fri", s: "present" }, { d: "Mon", s: "present" },
  { d: "Tue", s: "absent" }, { d: "Wed", s: "present" }, { d: "Thu", s: "present" },
  { d: "Fri", s: "present" },
];

function AttendancePage() {
  const present = DAYS.filter((x) => x.s === "present").length;
  const pct = Math.round((present / DAYS.length) * 100);

  return (
    <PageShell title="Attendance" emoji="📅" subtitle={`${pct}% present this fortnight`}>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Present", value: present, c: "bg-gradient-success", icon: CheckCircle2 },
          { label: "Late", value: DAYS.filter(x=>x.s==="late").length, c: "bg-gradient-warm", icon: Clock },
          { label: "Absent", value: DAYS.filter(x=>x.s==="absent").length, c: "bg-gradient-primary", icon: XCircle },
        ].map((s) => (
          <Card key={s.label} className={`rounded-3xl p-5 border-0 text-primary-foreground shadow-soft ${s.c}`}>
            <s.icon className="h-6 w-6 opacity-90" />
            <div className="mt-3 font-display text-3xl font-bold">{s.value}</div>
            <div className="text-sm opacity-90">{s.label}</div>
          </Card>
        ))}
      </div>

      <Card className="rounded-3xl p-6 shadow-soft border-0">
        <h2 className="font-display text-lg font-bold">Last 10 days</h2>
        <div className="mt-4 grid grid-cols-5 md:grid-cols-10 gap-2">
          {DAYS.map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className={`h-12 w-full rounded-2xl flex items-center justify-center text-lg ${
                  day.s === "present" ? "bg-success/20 text-success" :
                  day.s === "late" ? "bg-warning/30 text-warning-foreground" :
                  "bg-destructive/15 text-destructive"
                }`}
              >
                {day.s === "present" ? "✓" : day.s === "late" ? "•" : "✕"}
              </div>
              <span className="text-xs text-muted-foreground">{day.d}</span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Badge variant="secondary" className="rounded-full">Streak: 4 days</Badge>
        </div>
      </Card>
    </PageShell>
  );
}
