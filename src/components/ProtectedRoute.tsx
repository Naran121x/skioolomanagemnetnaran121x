import { Navigate } from "@tanstack/react-router";
import { useRole, type Role } from "@/context/RoleContext";
import type { ReactNode } from "react";

type Props = {
  allow: Role[];
  children: ReactNode;
  redirectTo?: string;
};

export function ProtectedRoute({ allow, children, redirectTo = "/unauthorized" }: Props) {
  const { role } = useRole();
  if (!allow.includes(role)) {
    return <Navigate to={redirectTo} />;
  }
  return <>{children}</>;
}
