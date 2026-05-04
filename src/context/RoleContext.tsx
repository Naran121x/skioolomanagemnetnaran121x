import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "admin" | "teacher" | "student" | "parent";

export const ROLES: { value: Role; label: string; emoji: string; gradient: string }[] = [
  { value: "admin", label: "Admin", emoji: "🛡️", gradient: "bg-gradient-primary" },
  { value: "teacher", label: "Teacher", emoji: "🎓", gradient: "bg-gradient-cool" },
  { value: "student", label: "Student", emoji: "🚀", gradient: "bg-gradient-warm" },
  { value: "parent", label: "Parent", emoji: "💛", gradient: "bg-gradient-success" },
];

type Ctx = { role: Role; setRole: (r: Role) => void };
const RoleContext = createContext<Ctx | null>(null);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("student");
  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used inside RoleProvider");
  return ctx;
}
