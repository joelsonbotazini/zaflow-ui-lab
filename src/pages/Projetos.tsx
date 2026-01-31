import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import {
  Search,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for projects
const projects = [
  { 
    id: 1, 
    name: "Implementação ERP", 
    client: "Cliente ABC", 
    manager: "João Silva", 
    startDate: "2024-01-15", 
    endDate: "2024-06-30", 
    progress: 75, 
    status: "em_andamento",
    budget: 250000,
    spent: 180000,
  },
  { 
    id: 2, 
    name: "Migração Cloud", 
    client: "Cliente XYZ", 
    manager: "Maria Santos", 
    startDate: "2024-02-01", 
    endDate: "2024-04-30", 
    progress: 90, 
    status: "em_andamento",
    budget: 120000,
    spent: 108000,
  },
  { 
    id: 3, 
    name: "Desenvolvimento App Mobile", 
    client: "Cliente DEF", 
    manager: "Pedro Oliveira", 
    startDate: "2023-11-01", 
    endDate: "2024-03-31", 
    progress: 100, 
    status: "concluido",
    budget: 180000,
    spent: 175000,
  },
  { 
    id: 4, 
    name: "Consultoria Estratégica", 
    client: "Cliente GHI", 
    manager: "Ana Costa", 
    startDate: "2024-03-01", 
    endDate: "2024-08-31", 
    progress: 35, 
    status: "em_andamento",
    budget: 95000,
    spent: 32000,
  },
  { 
    id: 5, 
    name: "Integração APIs", 
    client: "Cliente JKL", 
    manager: "Carlos Lima", 
    startDate: "2024-01-20", 
    endDate: "2024-02-28", 
    progress: 45, 
    status: "atrasado",
    budget: 45000,
    spent: 38000,
  },
  { 
    id: 6, 
    name: "Auditoria de Segurança", 
    client: "Cliente MNO", 
    manager: "Fernanda Reis", 
    startDate: "2024-04-01", 
    endDate: "2024-05-15", 
    progress: 0, 
    status: "pendente",
    budget: 35000,
    spent: 0,
  },
  { 
    id: 7, 
    name: "Treinamento Equipe", 
    client: "Interno", 
    manager: "Roberto Alves", 
    startDate: "2024-02-15", 
    endDate: "2024-03-15", 
    progress: 100, 
    status: "concluido",
    budget: 25000,
    spent: 22000,
  },
  { 
    id: 8, 
    name: "Redesign Portal", 
    client: "Cliente PQR", 
    manager: "Luciana Martins", 
    startDate: "2024-03-10", 
    endDate: "2024-07-31", 
    progress: 20, 
    status: "em_andamento",
    budget: 85000,
    spent: 15000,
  },
];

const getStatusLabel = (status: string) => {
  const labels: Record<string, { label: string; status: "success" | "warning" | "error" | "info" }> = {
    concluido: { label: "Concluído", status: "success" },
    em_andamento: { label: "Em Andamento", status: "info" },
    atrasado: { label: "Atrasado", status: "error" },
    pendente: { label: "Pendente", status: "warning" },
  };
  return labels[status] || { label: status, status: "info" as const };
};

export default function Projetos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.manager.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "todos" || project.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Projetos</h1>
            <p className="text-sm text-muted-foreground">
              Gestão e acompanhamento de projetos
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Projeto
          </Button>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar projetos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="em_andamento">Em Andamento</SelectItem>
                <SelectItem value="concluido">Concluído</SelectItem>
                <SelectItem value="atrasado">Atrasado</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>

        {/* Data Table */}
        <div className="rounded-xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">
                  <Button variant="ghost" className="h-8 gap-1 p-0 font-semibold hover:bg-transparent">
                    Projeto <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Prazo</TableHead>
                <TableHead>Progresso</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Orçamento</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.map((project) => {
                const statusInfo = getStatusLabel(project.status);
                const budgetProgress = (project.spent / project.budget) * 100;
                
                return (
                  <TableRow key={project.id} className="cursor-pointer hover:bg-accent/50">
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell className="text-muted-foreground">{project.client}</TableCell>
                    <TableCell className="text-muted-foreground">{project.manager}</TableCell>
                    <TableCell className="text-muted-foreground">
                      <span className="text-xs">{project.startDate} → {project.endDate}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                          <div 
                            className={`h-full rounded-full ${
                              project.progress === 100 
                                ? "bg-success" 
                                : project.status === "atrasado" 
                                  ? "bg-destructive" 
                                  : "bg-info"
                            }`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{project.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={statusInfo.status} label={statusInfo.label} />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="text-sm">
                        <span className="font-medium">R$ {project.spent.toLocaleString()}</span>
                        <span className="text-muted-foreground"> / {project.budget.toLocaleString()}</span>
                      </div>
                      <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                        <div 
                          className={`h-full rounded-full ${
                            budgetProgress > 100 ? "bg-destructive" : budgetProgress > 80 ? "bg-warning" : "bg-success"
                          }`}
                          style={{ width: `${Math.min(budgetProgress, 100)}%` }}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Eye className="h-4 w-4" /> Ver detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Edit className="h-4 w-4" /> Editar
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="gap-2 text-destructive">
                            <Trash2 className="h-4 w-4" /> Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          
          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-border px-4 py-3">
            <span className="text-sm text-muted-foreground">
              Mostrando {filteredProjects.length} de {projects.length} projetos
            </span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
