import { MainLayout } from "@/components/layout/MainLayout";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { ChartCard, SimpleBarChart, SimpleDonutChart, SimpleLineChart } from "@/components/dashboard/Charts";
import {
  DollarSign,
  Target,
  Users,
  Award,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  FolderKanban,
  GraduationCap,
  ArrowUpRight,
  Clock,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Mock data for sparklines
const generateSparkline = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20);

// Mock data for charts
const monthlyRevenueData = [
  { name: "Jan", value: 4000 },
  { name: "Fev", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Abr", value: 4500 },
  { name: "Mai", value: 6000 },
  { name: "Jun", value: 5500 },
];

const projectStatusData = [
  { name: "Concluídos", value: 45, color: "hsl(152, 69%, 31%)" },
  { name: "Em Andamento", value: 32, color: "hsl(217, 91%, 60%)" },
  { name: "Atrasados", value: 8, color: "hsl(0, 72%, 51%)" },
  { name: "Pendentes", value: 15, color: "hsl(38, 92%, 50%)" },
];

const cashFlowData = [
  { name: "Jan", receitas: 45000, despesas: 32000 },
  { name: "Fev", receitas: 52000, despesas: 38000 },
  { name: "Mar", receitas: 48000, despesas: 35000 },
  { name: "Abr", receitas: 61000, despesas: 42000 },
  { name: "Mai", receitas: 55000, despesas: 39000 },
  { name: "Jun", receitas: 67000, despesas: 45000 },
];

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard Consolidado</h1>
            <p className="text-sm text-muted-foreground">
              Visão geral dos principais indicadores da empresa
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Clock className="h-4 w-4" />
              Última atualização: há 5 min
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="Receita Mensal"
            value="R$ 127.5K"
            trend={{ value: 12.5, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<DollarSign className="h-4 w-4" />}
          />
          <KpiCard
            title="Taxa de Conversão"
            value="68.2%"
            trend={{ value: 4.2, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <KpiCard
            title="NPS Score"
            value="72"
            subtitle="/ 100"
            trend={{ value: -2.1, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="warning"
            icon={<Award className="h-4 w-4" />}
          />
          <KpiCard
            title="Colaboradores Ativos"
            value="156"
            trend={{ value: 3, label: "novos este mês" }}
            sparklineData={generateSparkline()}
            status="info"
            icon={<Users className="h-4 w-4" />}
          />
        </div>

        {/* Main Charts Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ChartCard
            title="Fluxo de Caixa"
            subtitle="Últimos 6 meses"
            className="lg:col-span-2"
          >
            <SimpleLineChart
              data={cashFlowData}
              lines={[
                { dataKey: "receitas", color: "hsl(152, 69%, 31%)", name: "Receitas" },
                { dataKey: "despesas", color: "hsl(0, 72%, 51%)", name: "Despesas" },
              ]}
              height={250}
            />
          </ChartCard>
          
          <ChartCard
            title="Status dos Projetos"
            subtitle="Distribuição atual"
          >
            <SimpleDonutChart data={projectStatusData} height={250} />
          </ChartCard>
        </div>

        {/* Module Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Financeiro */}
          <ModuleCard
            title="Financeiro"
            description="Gestão financeira e contábil"
            icon={<DollarSign className="h-5 w-5" />}
            iconColor="bg-chart-2"
            href="/financeiro"
            actions={[
              { label: "Ver relatório completo", onClick: () => {} },
              { label: "Exportar dados", onClick: () => {} },
            ]}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Margem EBITDA</span>
                <span className="font-semibold">24.8%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">ROI</span>
                <span className="font-semibold">18.5%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Liquidez</span>
                <StatusBadge status="success" label="Saudável" />
              </div>
            </div>
            <Link to="/financeiro">
              <Button variant="ghost" size="sm" className="mt-3 w-full gap-1">
                Ver mais <ArrowUpRight className="h-3 w-3" />
              </Button>
            </Link>
          </ModuleCard>

          {/* Estratégia */}
          <ModuleCard
            title="Estratégia"
            description="OKRs e metas estratégicas"
            icon={<Target className="h-5 w-5" />}
            iconColor="bg-chart-4"
            href="/estrategia"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">OKRs no prazo</span>
                <span className="font-semibold">78%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Metas alcançadas</span>
                <span className="font-semibold">12/15</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Status geral</span>
                <StatusBadge status="success" label="No Caminho" />
              </div>
            </div>
          </ModuleCard>

          {/* Pessoas */}
          <ModuleCard
            title="Pessoas"
            description="Gestão de recursos humanos"
            icon={<Users className="h-5 w-5" />}
            iconColor="bg-chart-1"
            href="/pessoas"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Turnover</span>
                <span className="font-semibold">3.2%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Satisfação</span>
                <span className="font-semibold">8.4/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Clima</span>
                <StatusBadge status="success" label="Positivo" />
              </div>
            </div>
          </ModuleCard>

          {/* Qualidade */}
          <ModuleCard
            title="Qualidade"
            description="Gestão da qualidade"
            icon={<Award className="h-5 w-5" />}
            iconColor="bg-chart-3"
            href="/qualidade"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">NCs Abertas</span>
                <span className="font-semibold">7</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Auditorias</span>
                <span className="font-semibold">3 pendentes</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Certificações</span>
                <StatusBadge status="success" label="Em dia" />
              </div>
            </div>
          </ModuleCard>

          {/* SST */}
          <ModuleCard
            title="SST"
            description="Saúde e segurança do trabalho"
            icon={<ShieldCheck className="h-5 w-5" />}
            iconColor="bg-chart-5"
            href="/sst"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Dias sem acidentes</span>
                <span className="font-semibold">127</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Treinamentos</span>
                <span className="font-semibold">94% completos</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <StatusBadge status="success" label="Conforme" />
              </div>
            </div>
          </ModuleCard>

          {/* Operações */}
          <ModuleCard
            title="Operações"
            description="Eficiência operacional"
            icon={<Briefcase className="h-5 w-5" />}
            iconColor="bg-primary"
            href="/operacoes"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">OEE</span>
                <span className="font-semibold">82.4%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Produtividade</span>
                <span className="font-semibold">+5.2%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Capacidade</span>
                <StatusBadge status="warning" label="88%" />
              </div>
            </div>
          </ModuleCard>
        </div>

        {/* Alerts Section */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="mb-4 font-semibold text-foreground">Alertas e Notificações</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg bg-destructive/5 p-3">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Fluxo de caixa negativo previsto</p>
                <p className="text-xs text-muted-foreground">Projeção indica déficit de R$ 15.000 para próximo mês</p>
              </div>
              <Button variant="outline" size="sm">Ver detalhes</Button>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-warning/5 p-3">
              <Clock className="h-5 w-5 text-warning" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">3 projetos com prazo próximo</p>
                <p className="text-xs text-muted-foreground">Entregas previstas para os próximos 7 dias</p>
              </div>
              <Button variant="outline" size="sm">Ver projetos</Button>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-success/5 p-3">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Meta trimestral atingida</p>
                <p className="text-xs text-muted-foreground">Receita do Q4 superou a meta em 8%</p>
              </div>
              <Button variant="outline" size="sm">Celebrar</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
