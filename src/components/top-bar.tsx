import { Bell, Search, ShieldCheck } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useRole } from "@/context/RoleContext";

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border/60 bg-background/70 backdrop-blur-xl px-4 md:px-6">
      <SidebarTrigger className="rounded-xl h-9 w-9 hover:bg-accent/30" />

      <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search students, classes, lessons…"
            className="w-full rounded-2xl border border-border bg-card/60 pl-9 pr-4 py-2 text-sm outline-none transition-all focus:border-primary focus:bg-card focus:shadow-soft"
          />
        </div>
      </div>

      <div className="flex-1 md:hidden" />

      <div className="flex items-center gap-2">
        <button className="relative h-9 w-9 rounded-xl border border-border bg-card hover:bg-accent/30 transition-all flex items-center justify-center">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-gradient-warm" />
        </button>
        <UserBadge />
      </div>
    </header>
  );
}

function UserBadge() {
  const { role } = useRole();
  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-2.5 py-1.5">
      <div className="h-7 w-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
        <ShieldCheck className="h-4 w-4" />
      </div>
      <div className="hidden sm:flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Signed in</span>
        <span className="text-sm font-semibold capitalize">{role}</span>
      </div>
    </div>
  );
}
