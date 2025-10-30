import { Home } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { ThemeToggle } from './ThemeToggle';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-purple-blue flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <div>
            <h2 className="font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
              React Hooks
            </h2>
            <p className="text-xs text-sidebar-foreground/60">Demo Interativo</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <a href="/" data-testid="sidebar-link-home">
                    <Home className="w-5 h-5" />
                    <span>Início</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-sidebar-foreground">Tema</span>
            <ThemeToggle />
          </div>
          <div className="text-xs text-sidebar-foreground/60 leading-relaxed">
            © {new Date().getFullYear()} Matheus
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
