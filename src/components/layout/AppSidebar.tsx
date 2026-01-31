import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  DollarSign,
  Target,
  Users,
  Award,
  ShieldCheck,
  Settings as SettingsIcon,
  Briefcase,
  TrendingUp,
  FolderKanban,
  GraduationCap,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isCollapsed?: boolean;
}

const NavItem = ({ to, icon, label, isCollapsed }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={cn(
        "nav-item group relative",
        isActive && "active"
      )}
    >
      <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
      {!isCollapsed && (
        <span className="text-sm font-medium">{label}</span>
      )}
      {isActive && (
        <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
      )}
    </NavLink>
  );
};

interface NavGroupProps {
  title: string;
  children: React.ReactNode;
  isCollapsed?: boolean;
  defaultOpen?: boolean;
}

const NavGroup = ({ title, children, isCollapsed, defaultOpen = true }: NavGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2">
      {!isCollapsed && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
        >
          {title}
          {isOpen ? (
            <ChevronDown className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </button>
      )}
      {(isOpen || isCollapsed) && (
        <div className="space-y-1">{children}</div>
      )}
    </div>
  );
};

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header with logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-sidebar-foreground">ZAFLOW</span>
              <span className="text-[10px] font-medium text-muted-foreground">Insights</span>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <TrendingUp className="h-4 w-4 text-primary-foreground" />
          </div>
        )}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full border border-sidebar-border bg-sidebar shadow-sm hover:bg-accent"
      >
        {isCollapsed ? (
          <Menu className="h-3 w-3" />
        ) : (
          <X className="h-3 w-3" />
        )}
      </button>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3">
        {/* Overview */}
        <NavGroup title="Visão Geral" isCollapsed={isCollapsed}>
          <NavItem
            to="/"
            icon={<LayoutDashboard className="h-4 w-4" />}
            label="Dashboard"
            isCollapsed={isCollapsed}
          />
        </NavGroup>

        {/* Modules */}
        <NavGroup title="Módulos" isCollapsed={isCollapsed}>
          <NavItem
            to="/financeiro"
            icon={<DollarSign className="h-4 w-4" />}
            label="Financeiro"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/estrategia"
            icon={<Target className="h-4 w-4" />}
            label="Estratégia"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/pessoas"
            icon={<Users className="h-4 w-4" />}
            label="Pessoas"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/qualidade"
            icon={<Award className="h-4 w-4" />}
            label="Qualidade"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/sst"
            icon={<ShieldCheck className="h-4 w-4" />}
            label="SST"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/operacoes"
            icon={<Briefcase className="h-4 w-4" />}
            label="Operações"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/comercial"
            icon={<TrendingUp className="h-4 w-4" />}
            label="Comercial"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/projetos"
            icon={<FolderKanban className="h-4 w-4" />}
            label="Projetos"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/pdi"
            icon={<GraduationCap className="h-4 w-4" />}
            label="PDI"
            isCollapsed={isCollapsed}
          />
        </NavGroup>

        {/* Settings */}
        <NavGroup title="Configurações" isCollapsed={isCollapsed} defaultOpen={false}>
          <NavItem
            to="/settings"
            icon={<SettingsIcon className="h-4 w-4" />}
            label="Configurações"
            isCollapsed={isCollapsed}
          />
        </NavGroup>
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-3">
        <div className={cn(
          "flex items-center gap-2 rounded-lg bg-accent/50 p-2",
          isCollapsed && "justify-center"
        )}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            ZF
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-xs font-medium">Empresa Demo</span>
              <span className="text-[10px] text-muted-foreground">Plano Pro</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
