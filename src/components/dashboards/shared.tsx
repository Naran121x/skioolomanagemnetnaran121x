import { ReactNode } from "react";

export function DashboardHero({
  badge,
  title,
  subtitle,
}: {
  badge: ReactNode;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <section className="rounded-3xl bg-card border border-border shadow-soft p-6 md:p-8 relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground">
          {badge}
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-display font-bold">{title}</h1>
        <p className="mt-2 text-muted-foreground max-w-xl">{subtitle}</p>
      </div>
    </section>
  );
}

export function StatCard({
  icon: Icon,
  value,
  label,
  gradient,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  gradient: string;
}) {
  return (
    <div className="rounded-3xl bg-card border border-border shadow-soft p-5">
      <div className={`h-11 w-11 rounded-2xl ${gradient} flex items-center justify-center text-primary-foreground shadow-soft`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 text-2xl font-display font-bold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function Panel({
  title,
  children,
  className = "",
  action,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div className={`rounded-3xl bg-card border border-border shadow-soft p-6 ${className}`}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="font-display font-bold text-lg">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}
