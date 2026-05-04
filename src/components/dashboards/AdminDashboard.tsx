import { Wallet, Users, UserCog, TrendingUp, ArrowUpRight } from "lucide-react";
import { DashboardHero, StatCard, Panel } from "./shared";

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <DashboardHero
        badge={<><span>🛡️</span> Admin control center</>}
        title={<>School at a <span className="text-gradient-primary">glance</span></>}
        subtitle="Finances, staff, and school-wide analytics — all in one calm view."
      />

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} value="1,284" label="Active students" gradient="bg-gradient-cool" />
        <StatCard icon={UserCog} value="92" label="Staff" gradient="bg-gradient-primary" />
        <StatCard icon={Wallet} value="$184k" label="Fees collected" gradient="bg-gradient-success" />
        <StatCard icon={TrendingUp} value="+12%" label="Avg. growth" gradient="bg-gradient-warm" />
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel
          title="Financial Overview"
          className="lg:col-span-2"
          action={<button className="text-xs font-semibold text-primary inline-flex items-center gap-1">View report <ArrowUpRight className="h-3 w-3" /></button>}
        >
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Collected", value: "$184,200", tone: "bg-gradient-success" },
              { label: "Pending", value: "$22,800", tone: "bg-gradient-warm" },
              { label: "Scholarships", value: "$14,500", tone: "bg-gradient-cool" },
            ].map((b) => (
              <div key={b.label} className={`rounded-2xl ${b.tone} text-primary-foreground p-4 shadow-soft`}>
                <div className="text-xs opacity-90">{b.label}</div>
                <div className="mt-1 text-xl font-display font-bold">{b.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 h-32 rounded-2xl bg-muted/50 flex items-end gap-2 p-3">
            {[40, 65, 50, 80, 70, 90, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-xl bg-gradient-primary" style={{ height: `${h}%` }} />
            ))}
          </div>
        </Panel>

        <Panel title="School-wide alerts">
          <ul className="space-y-3 text-sm">
            <li className="rounded-2xl bg-muted/50 p-3"><b>3 staff</b> on leave today</li>
            <li className="rounded-2xl bg-muted/50 p-3"><b>12 fees</b> overdue this week</li>
            <li className="rounded-2xl bg-muted/50 p-3"><b>Bus route 4</b> delayed 10 min</li>
          </ul>
        </Panel>
      </section>
    </div>
  );
}
