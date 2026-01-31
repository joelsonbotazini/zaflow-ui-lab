import { useState } from "react";
import {
  Building2,
  CalendarDays,
  ChevronDown,
  Bell,
  Search,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export function TopBar() {
  const [selectedCompany, setSelectedCompany] = useState("Empresa Demo");
  const [selectedPeriod, setSelectedPeriod] = useState("Últimos 30 dias");
  const [selectedUnit, setSelectedUnit] = useState("Todas as Unidades");

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/80 px-6 backdrop-blur-xl">
      {/* Left section - Company Switcher */}
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 border-border bg-card hover:bg-accent">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{selectedCompany}</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>Selecionar Empresa</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSelectedCompany("Empresa Demo")}>
              Empresa Demo
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedCompany("Filial São Paulo")}>
              Filial São Paulo
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedCompany("Filial Rio de Janeiro")}>
              Filial Rio de Janeiro
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Center section - Global Filters */}
      <div className="flex items-center gap-3">
        {/* Period Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2 border-border bg-card hover:bg-accent">
              <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm">{selectedPeriod}</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-48">
            <DropdownMenuLabel>Período</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSelectedPeriod("Hoje")}>
              Hoje
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedPeriod("Últimos 7 dias")}>
              Últimos 7 dias
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedPeriod("Últimos 30 dias")}>
              Últimos 30 dias
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedPeriod("Este mês")}>
              Este mês
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedPeriod("Este trimestre")}>
              Este trimestre
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedPeriod("Este ano")}>
              Este ano
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Unit Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2 border-border bg-card hover:bg-accent">
              <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm">{selectedUnit}</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-48">
            <DropdownMenuLabel>Unidade</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSelectedUnit("Todas as Unidades")}>
              Todas as Unidades
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedUnit("Matriz")}>
              Matriz
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedUnit("Unidade Norte")}>
              Unidade Norte
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedUnit("Unidade Sul")}>
              Unidade Sul
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Right section - Search and Profile */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar..."
            className="w-56 bg-accent/50 pl-9 text-sm placeholder:text-muted-foreground focus:bg-card"
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative hover:bg-accent">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-medium">João Silva</span>
                <span className="text-xs text-muted-foreground">joao@empresa.com</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Meu Perfil</DropdownMenuItem>
            <DropdownMenuItem>Preferências</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
