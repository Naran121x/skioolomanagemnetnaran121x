import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROLES, useRole } from "@/context/RoleContext";

export function RoleSwitcher() {
  const { role, setRole } = useRole();
  const current = ROLES.find((r) => r.value === role)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-soft hover:shadow-glow transition-all">
        <span className={`h-7 w-7 rounded-xl ${current.gradient} flex items-center justify-center text-sm`}>
          {current.emoji}
        </span>
        <span className="hidden sm:flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Viewing as</span>
          <span className="text-sm font-semibold">{current.label}</span>
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 rounded-2xl p-2">
        <DropdownMenuLabel className="px-2 py-1.5 text-xs uppercase tracking-wider text-muted-foreground">
          Switch role
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {ROLES.map((r) => (
          <DropdownMenuItem
            key={r.value}
            onClick={() => setRole(r.value)}
            className="rounded-xl gap-3 py-2.5 cursor-pointer focus:bg-accent/30"
          >
            <span className={`h-9 w-9 rounded-xl ${r.gradient} flex items-center justify-center text-base shadow-soft`}>
              {r.emoji}
            </span>
            <div className="flex-1">
              <div className="font-semibold text-sm">{r.label}</div>
              <div className="text-xs text-muted-foreground">
                {r.value === "admin" && "Full school control"}
                {r.value === "teacher" && "Teach & track classes"}
                {r.value === "student" && "Learn & level up"}
                {r.value === "parent" && "Follow your child"}
              </div>
            </div>
            {role === r.value && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
