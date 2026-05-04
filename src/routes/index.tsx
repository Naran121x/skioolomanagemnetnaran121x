import { createFileRoute } from "@tanstack/react-router";
import { useRole, ROLES } from "@/context/RoleContext";
import { Sparkles, Trophy, CalendarCheck, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { role } = useRole();
  const meta = ROLES.find((r) => r.value === role)!;

  const stats = [
    { label: "Today's classes", value: "5", icon: CalendarCheck, gradient: "bg-gradient-cool" },
    { label: "XP this week", value: "1,240", icon: Sparkles, gradient: "bg-gradient-primary" },
    { label: "Badges", value: "12", icon: Trophy, gradient: "bg-gradient-warm" },
    { label: "Avg. growth", value: "+8%", icon: TrendingUp, gradient: "bg-gradient-success" },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-card border border-border shadow-soft p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground">
            <span>{meta.emoji}</span> {meta.label} dashboard
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-display font-bold">
            Welcome back to <span className="text-gradient-primary">Skoolio</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-xl">
            Your warm, modern school OS. Switch roles from the top bar to explore admin, teacher, student, or parent views.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-3xl bg-card border border-border shadow-soft p-5">
            <div className={`h-11 w-11 rounded-2xl ${s.gradient} flex items-center justify-center text-primary-foreground shadow-soft`}>
              <s.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-2xl font-display font-bold">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-3xl bg-card border border-border shadow-soft p-6 min-h-[280px]">
          <h2 className="font-display font-bold text-lg">Insight Stream</h2>
          <p className="text-sm text-muted-foreground">Your AI-powered timeline lands here soon.</p>
        </div>
        <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-6 shadow-glow min-h-[280px]">
          <div className="text-4xl">🌟</div>
          <h2 className="mt-3 font-display font-bold text-xl">Daily quest</h2>
          <p className="mt-1 text-sm opacity-90">Complete 1 lesson and earn 50 XP.</p>
          <button className="mt-4 rounded-2xl bg-background/20 hover:bg-background/30 backdrop-blur px-4 py-2 text-sm font-semibold transition-all">
            Start now
          </button>
        </div>
      </section>
    </div>
  );
}
