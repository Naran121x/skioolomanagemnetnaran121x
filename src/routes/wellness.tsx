import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, Sparkles, Sun } from "lucide-react";

export const Route = createFileRoute("/wellness")({
  head: () => ({
    meta: [
      { title: "Wellness — Skoolio" },
      { name: "description", content: "Anonymous mood pulse and wellness updates for your child." },
    ],
  }),
  component: WellnessPage,
});

const WEEK = [
  { day: "Mon", mood: "😊", value: 90 },
  { day: "Tue", mood: "😊", value: 85 },
  { day: "Wed", mood: "😐", value: 60 },
  { day: "Thu", mood: "😊", value: 88 },
  { day: "Fri", mood: "🤩", value: 95 },
];

function WellnessPage() {
  return (
    <PageShell title="Wellness" emoji="💛" subtitle="A calm look at how Aanya is feeling">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* The signature "Aanya is doing great" card */}
        <Card className="rounded-3xl p-6 border-0 bg-gradient-warm text-accent-foreground shadow-glow lg:col-span-1">
          <div className="text-3xl">💛</div>
          <div className="mt-2 font-display text-2xl font-bold leading-tight">
            Aanya is doing great
          </div>
          <p className="mt-1 text-sm opacity-90">Today's mood: happy 😊</p>
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" /> Energy levels stable all week
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" /> Strong peer connections
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Loved Friday's art class
            </div>
          </div>
          <Badge className="mt-5 rounded-full bg-background/30 text-accent-foreground">
            Anonymous · weekly pulse
          </Badge>
        </Card>

        <Card className="rounded-3xl p-6 shadow-soft border-0 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">Mood pulse · this week</h2>
            <Badge variant="secondary" className="rounded-full">+8% vs last week</Badge>
          </div>
          <div className="mt-6 grid grid-cols-5 gap-3">
            {WEEK.map((d) => (
              <div key={d.day} className="flex flex-col items-center gap-2">
                <div className="text-3xl">{d.mood}</div>
                <Progress value={d.value} className="h-24 w-3 rounded-full [&>div]:bg-gradient-primary" />
                <div className="text-xs text-muted-foreground">{d.day}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="rounded-3xl p-6 shadow-soft border-0">
        <h2 className="font-display text-lg font-bold">Positivity snapshots</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { t: "Helped a classmate with fractions", e: "🤝" },
            { t: "Asked a thoughtful question in Science", e: "🔬" },
            { t: "Shared lunch with a new friend", e: "🥪" },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl bg-muted p-4 text-sm">
              <div className="text-2xl">{s.e}</div>
              <div className="mt-1 font-medium">{s.t}</div>
            </div>
          ))}
        </div>
      </Card>
    </PageShell>
  );
}
