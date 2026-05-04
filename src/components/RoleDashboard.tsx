import { useRole } from "@/context/RoleContext";
import { AdminDashboard } from "./dashboards/AdminDashboard";
import { TeacherDashboard } from "./dashboards/TeacherDashboard";
import { StudentDashboard } from "./dashboards/StudentDashboard";
import { ParentDashboard } from "./dashboards/ParentDashboard";

export function RoleDashboard() {
  const { role } = useRole();
  switch (role) {
    case "admin": return <AdminDashboard />;
    case "teacher": return <TeacherDashboard />;
    case "student": return <StudentDashboard />;
    case "parent": return <ParentDashboard />;
  }
}
