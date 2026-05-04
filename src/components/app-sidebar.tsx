import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  CalendarCheck,
  Sparkles,
  Trophy,
  MessageCircle,
  Wallet,
  Settings,
  HeartPulse,
  BookOpen,
  ClipboardList,
  BarChart3,
  UserCog,
  Bus,
  type LucideIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useRole, type Role } from "@/context/RoleContext";

type NavItem = { title: string; url: string; icon: LucideIcon };
type NavGroup = { label: string; items: NavItem[] };

const NAV_BY_ROLE: Record<Role, NavGroup[]> = {
  admin: [
    {
      label: "Overview",
      items: [
        { title: "Dashboard", url: "/", icon: LayoutDashboard },
        { title: "Analytics", url: "/analytics", icon: BarChart3 },
        { title: "Insight Stream", url: "/insights", icon: Sparkles },
      ],
    },
    {
      label: "Operate",
      items: [
        { title: "Staff", url: "/staff", icon: UserCog },
        { title: "Students", url: "/students", icon: Users },
        { title: "Finance", url: "/finance", icon: Wallet },
        { title: "Transport", url: "/transport", icon: Bus },
      ],
    },
    {
      label: "System",
      items: [
        { title: "Messages", url: "/messages", icon: MessageCircle },
        { title: "Settings", url: "/settings", icon: Settings },
      ],
    },
  ],
  teacher: [
    {
      label: "Teach",
      items: [
        { title: "Dashboard", url: "/", icon: LayoutDashboard },
        { title: "Attendance", url: "/attendance", icon: CalendarCheck },
        { title: "Lesson Planner", url: "/lessons", icon: BookOpen },
        { title: "Gradebook", url: "/gradebook", icon: ClipboardList },
      ],
    },
    {
      label: "Care",
      items: [
        { title: "Mood Tracker", url: "/wellness", icon: HeartPulse },
        { title: "Messages", url: "/messages", icon: MessageCircle },
      ],
    },
  ],
  student: [
    {
      label: "Learn",
      items: [
        { title: "Dashboard", url: "/", icon: LayoutDashboard },
        { title: "Skill Tree", url: "/skills", icon: GraduationCap },
        { title: "Homework", url: "/homework", icon: ClipboardList },
        { title: "Schedule", url: "/schedule", icon: CalendarCheck },
      ],
    },
    {
      label: "Play",
      items: [
        { title: "Achievements", url: "/achievements", icon: Trophy },
        { title: "Insight Stream", url: "/insights", icon: Sparkles },
        { title: "Messages", url: "/messages", icon: MessageCircle },
      ],
    },
  ],
  parent: [
    {
      label: "Your child",
      items: [
        { title: "Dashboard", url: "/", icon: LayoutDashboard },
        { title: "Insight Stream", url: "/insights", icon: Sparkles },
        { title: "Attendance", url: "/attendance", icon: CalendarCheck },
        { title: "Wellness", url: "/wellness", icon: HeartPulse },
      ],
    },
    {
      label: "School",
      items: [
        { title: "Fees", url: "/finance", icon: Wallet },
        { title: "Messages", url: "/messages", icon: MessageCircle },
        { title: "Transport", url: "/transport", icon: Bus },
      ],
    },
  ],
};

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { role } = useRole();
  const currentPath = useRouterState({ select: (r) => r.location.pathname });
  const isActive = (p: string) => currentPath === p;

  const groups = NAV_BY_ROLE[role];

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar">
      <SidebarHeader className="px-4 pt-5 pb-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-base shadow-soft">
            S
          </div>
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="font-display font-semibold text-base text-foreground">Skoolio</span>
              <span className="text-[11px] text-muted-foreground capitalize tracking-wide">{role} workspace</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-3">
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            {!collapsed && (
              <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground/80 px-2">
                {group.label}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.url)}
                      className="rounded-lg h-9 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:!bg-primary data-[active=true]:!text-primary-foreground data-[active=true]:font-medium data-[active=true]:shadow-soft transition-colors"
                    >
                      <Link to={item.url} className="flex items-center gap-3">
                        <item.icon className="h-4 w-4 shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {!collapsed && (
        <SidebarFooter className="p-3 border-t border-sidebar-border">
          <div className="rounded-lg border border-border bg-card/60 p-3">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
              {role === "admin" ? "School pulse" : role === "teacher" ? "Today" : role === "parent" ? "Aanya · Grade 8" : "Streak"}
            </div>
            <div className="mt-1 font-display font-semibold text-sm text-foreground">
              {role === "admin" && "All KPIs healthy"}
              {role === "teacher" && "Plans auto-saved"}
              {role === "student" && "7-day streak"}
              {role === "parent" && "Doing great 💛"}
            </div>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
