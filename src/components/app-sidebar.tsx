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
import { useRole } from "@/context/RoleContext";

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Insight Stream", url: "/insights", icon: Sparkles },
  { title: "Skill Tree", url: "/skills", icon: GraduationCap },
  { title: "Attendance", url: "/attendance", icon: CalendarCheck },
  { title: "Community", url: "/community", icon: Users },
];

const engageItems = [
  { title: "Achievements", url: "/achievements", icon: Trophy },
  { title: "Wellness", url: "/wellness", icon: HeartPulse },
  { title: "Messages", url: "/messages", icon: MessageCircle },
];

const opsItems = [
  { title: "Finance", url: "/finance", icon: Wallet },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { role } = useRole();
  const currentPath = useRouterState({ select: (r) => r.location.pathname });
  const isActive = (p: string) => currentPath === p;

  const renderGroup = (label: string, items: typeof mainItems) => (
    <SidebarGroup>
      {!collapsed && <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">{label}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={isActive(item.url)}
                className="rounded-2xl h-11 data-[active=true]:bg-gradient-primary data-[active=true]:text-primary-foreground data-[active=true]:shadow-glow transition-all"
              >
                <Link to={item.url} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span className="font-medium">{item.title}</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="px-4 pt-5 pb-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
            S
          </div>
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-lg">Skoolio</span>
              <span className="text-xs text-muted-foreground capitalize">{role} space</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {renderGroup("Learn", mainItems)}
        {renderGroup("Engage", engageItems)}
        {renderGroup("Operate", opsItems)}
      </SidebarContent>

      {!collapsed && (
        <SidebarFooter className="p-3">
          <div className="rounded-2xl bg-gradient-warm p-4 text-accent-foreground shadow-soft">
            <div className="text-2xl">🔥</div>
            <div className="mt-1 font-display font-bold">7-day streak!</div>
            <div className="text-xs opacity-80">Keep the spark alive.</div>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
