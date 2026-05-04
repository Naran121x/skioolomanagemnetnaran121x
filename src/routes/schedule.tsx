import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/data-primitives";

export const Route = createFileRoute("/schedule")({
  head: () => ({ meta: [{ title: "Schedule — Skoolio" }] }),
  component: SchedulePage,
});

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const PERIODS = [
  { time: "09:00", subjects: ["Math", "Physics", "Math", "Bio", "Math"] },
  { time: "10:00", subjects: ["Physics", "CS", "Lit", "Math", "Physics"] },
  { time: "11:00", subjects: ["Lit", "Math", "Physics", "CS", "Bio"] },
  { time: "13:00", subjects: ["Bio", "Lit", "CS", "Physics", "Lit"] },
  { time: "14:00", subjects: ["Sports", "Art", "Sports", "Music", "Sports"] },
];

function SchedulePage() {
  return (
    <PageShell title="Schedule" subtitle="Your week at a glance.">
      <GlassCard className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2 text-left font-semibold">Time</th>
              {DAYS.map((d) => (
                <th key={d} className="px-3 py-2 text-left font-semibold">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PERIODS.map((p) => (
              <tr key={p.time} className="border-t border-border">
                <td className="px-3 py-3 font-medium text-muted-foreground">{p.time}</td>
                {p.subjects.map((s, i) => (
                  <td key={i} className="px-3 py-3">
                    <div className="rounded-xl border border-border bg-muted/40 px-3 py-2 text-foreground">
                      {s}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
    </PageShell>
  );
}
