import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CreditCard, GraduationCap, Bus, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/finance")({
  head: () => ({
    meta: [
      { title: "Fees — Skoolio" },
      { name: "description", content: "Visual breakdown of school fees, transaction history and one-click payment." },
    ],
  }),
  component: FinancePage,
});

const BREAKDOWN = [
  { label: "Tuition", amount: 42000, icon: GraduationCap, gradient: "bg-gradient-primary" },
  { label: "Transport", amount: 8000, icon: Bus, gradient: "bg-gradient-cool" },
  { label: "Books & Materials", amount: 5500, icon: BookOpen, gradient: "bg-gradient-warm" },
];

const HISTORY = [
  { id: "TXN-2041", label: "Term 2 Tuition", date: "Mar 12, 2026", amount: 42000, status: "Paid" },
  { id: "TXN-2018", label: "Transport — Feb", date: "Feb 03, 2026", amount: 4000, status: "Paid" },
  { id: "TXN-1994", label: "Stationery Kit", date: "Jan 18, 2026", amount: 1800, status: "Paid" },
  { id: "TXN-1971", label: "Term 1 Tuition", date: "Dec 02, 2025", amount: 42000, status: "Paid" },
];

function FinancePage() {
  const [paying, setPaying] = useState(false);
  const total = BREAKDOWN.reduce((s, b) => s + b.amount, 0);
  const paid = 42000;
  const due = total - paid;

  const handlePay = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      toast.success("Payment successful — receipt sent to your email ✨");
    }, 1200);
  };

  return (
    <PageShell title="Fees & Payments" emoji="💳" subtitle="Aanya Sharma · Grade 8 · Skoolio Academy">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 rounded-3xl p-6 shadow-soft border-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-lg font-bold">This term</h2>
              <p className="text-sm text-muted-foreground">Visual breakdown</p>
            </div>
            <Badge className="rounded-full bg-warning text-warning-foreground">Due in 9 days</Badge>
          </div>

          <div className="mt-5 space-y-4">
            {BREAKDOWN.map((b) => {
              const pct = Math.round((b.amount / total) * 100);
              return (
                <div key={b.label}>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className={`h-9 w-9 rounded-2xl ${b.gradient} flex items-center justify-center text-primary-foreground shadow-soft`}>
                        <b.icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{b.label}</span>
                    </div>
                    <span className="font-display font-bold">₹{b.amount.toLocaleString()}</span>
                  </div>
                  <Progress value={pct} className="mt-2 h-2 rounded-full" />
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-muted p-4">
            <div>
              <div className="text-xs text-muted-foreground">Outstanding</div>
              <div className="font-display text-2xl font-bold">₹{due.toLocaleString()}</div>
            </div>
            <Button
              onClick={handlePay}
              disabled={paying}
              className="rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow h-12 px-6"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              {paying ? "Processing…" : "Pay Now"}
            </Button>
          </div>
        </Card>

        <Card className="rounded-3xl p-6 shadow-soft border-0 bg-gradient-warm text-accent-foreground">
          <div className="text-sm opacity-80">Total this year</div>
          <div className="mt-1 font-display text-3xl font-bold">₹{total.toLocaleString()}</div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Paid</span><span className="font-bold">₹{paid.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Pending</span><span className="font-bold">₹{due.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Scholarship</span><span className="font-bold">₹3,000</span></div>
          </div>
          <div className="mt-5 rounded-2xl bg-background/30 p-3 text-xs">
            🎓 Eligible for sibling discount next term.
          </div>
        </Card>
      </div>

      <Card className="rounded-3xl p-6 shadow-soft border-0">
        <h2 className="font-display text-lg font-bold">Transaction history</h2>
        <div className="mt-4 divide-y divide-border">
          {HISTORY.map((t) => (
            <div key={t.id} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-success/15 text-success flex items-center justify-center">
                  {t.status === "Paid" ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                </div>
                <div>
                  <div className="font-medium">{t.label}</div>
                  <div className="text-xs text-muted-foreground">{t.id} · {t.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-display font-bold">₹{t.amount.toLocaleString()}</div>
                <Badge variant="secondary" className="rounded-full text-xs">{t.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </PageShell>
  );
}
