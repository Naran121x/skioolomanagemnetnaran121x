import { Sparkles, Wallet, MessageCircle, HeartPulse } from "lucide-react";
import { DashboardHero, StatCard, Panel } from "./shared";

export function ParentDashboard() {
  const stream = [
    { time: "Today", emoji: "🌟", text: "Aanya earned the 'Quick learner' badge in Math." },
    { time: "Today", emoji: "😊", text: "Mood check-in: Happy" },
    { time: "Yesterday", emoji: "📚", text: "Submitted Physics lab report on time." },
    { time: "2 days ago", emoji: "🏃", text: "100% attendance this week." },
  ];

  return (
    <div className="space-y-6">
      <DashboardHero
        badge={<><span>💛</span> Parent view — Aanya, Grade 8</>}
        title={<>Transparency for <span className="text-gradient-primary">your child</span></>}
        subtitle="Your child's journey, fees, and a direct line to their teachers."
      />

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Sparkles} value="A-" label="This term" gradient="bg-gradient-primary" />
        <StatCard icon={HeartPulse} value="Happy" label="Mood today" gradient="bg-gradient-success" />
        <StatCard icon={Wallet} value="$120" label="Fees due" gradient="bg-gradient-warm" />
        <StatCard icon={MessageCircle} value="2" label="New messages" gradient="bg-gradient-cool" />
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel title="Child's Insight Stream" className="lg:col-span-2">
          <ul className="space-y-3">
            {stream.map((s, i) => (
              <li key={i} className="flex gap-3 rounded-2xl bg-muted/50 p-3">
                <div className="h-10 w-10 rounded-2xl bg-card flex items-center justify-center text-xl shadow-soft">{s.emoji}</div>
                <div className="flex-1">
                  <div className="text-sm">{s.text}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <div className="space-y-4">
          <Panel title="Fee Payment">
            <div className="rounded-2xl bg-gradient-warm p-4 text-accent-foreground shadow-soft">
              <div className="text-xs opacity-90">Term 2 — due May 15</div>
              <div className="mt-1 text-2xl font-display font-bold">$120.00</div>
              <button className="mt-3 w-full rounded-2xl bg-background/30 hover:bg-background/40 backdrop-blur text-sm font-semibold py-2 transition-all">
                Pay now
              </button>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">Last payment: $480 on Feb 12</div>
          </Panel>

          <Panel title="Message a teacher">
            <button className="w-full rounded-2xl bg-gradient-primary text-primary-foreground text-sm font-semibold py-2.5 shadow-soft">
              Open inbox
            </button>
          </Panel>
        </div>
      </section>
    </div>
  );
}
