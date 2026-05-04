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
    <section className="rounded-md bg-card border border-border p-6 md:p-7">
      <div className="inline-flex items-center gap-2 rounded-sm bg-muted px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {badge}
      </div>
      <h1 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="mt-1.5 text-sm text-muted-foreground max-w-xl">{subtitle}</p>
    </section>
  );
}

export function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  gradient?: string;
}) {
  return (
    <div className="rounded-md bg-card border border-border p-5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
      </div>
      <div className="mt-3 text-2xl font-bold text-foreground">{value}</div>
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
    <div className={`rounded-md bg-card border border-border p-6 ${className}`}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="font-semibold text-base text-foreground">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}
