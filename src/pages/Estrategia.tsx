import { MainLayout } from "@/components/layout/MainLayout";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { ChartCard, SimpleBarChart, SimpleDonutChart } from "@/components/dashboard/Charts";
import { Target, Flag, TrendingUp, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const generateSparkline = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20);

const okrData = [
  { name: "Q1", value: 85 },
  { name: "Q2", value: 92 },
  { name: "Q3", value: 78 },
  { name: "Q4", value: 88 },
];

const goalsByArea = [
  { name: "Vendas", value: 35, color: "hsl(217, 91%, 60%)" },
  { name: "Produto", value: 28, color: "hsl(152, 69%, 31%)" },
  { name: "Marketing", value: 20, color: "hsl(38, 92%, 50%)" },
  { name: "Operações", value: 17, color: "hsl(280, 65%, 60%)" },
];

const objectives = [
  { name: "Aumentar receita em 30%", progress: 78, status: "on_track" },
  { name: "Lançar 3 novos produtos", progress: 66, status: "on_track" },
  { name: "Reduzir churn em 15%", progress: 45, status: "at_risk" },
  { name: "Expandir para 2 novos mercados", progress: 100, status: "completed" },
];

export default function Estrategia() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Estratégia</h1>
            <p className="text-sm text-muted-foreground">OKRs e metas estratégicas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="OKRs Ativos"
            value="12"
            trend={{ value: 2, label: "novos este trimestre" }}
            sparklineData={generateSparkline()}
            status="info"
            icon={<Target className="h-4 w-4" />}
          />
          <KpiCard
            title="Taxa de Conclusão"
            value="78%"
            trend={{ value: 5.2, label: "vs. trimestre anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<CheckCircle2 className="h-4 w-4" />}
          />
          <KpiCard
            title="Metas no Prazo"
            value="85%"
            trend={{ value: -2.1, label: "vs. trimestre anterior" }}
            sparklineData={generateSparkline()}
            status="warning"
            icon={<Flag className="h-4 w-4" />}
          />
          <KpiCard
            title="Score Estratégico"
            value="8.4"
            subtitle="/ 10"
            trend={{ value: 0.3, label: "vs. trimestre anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<TrendingUp className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Performance por Trimestre" subtitle="Taxa de conclusão de OKRs">
            <SimpleBarChart data={okrData} height={250} />
          </ChartCard>
          <ChartCard title="Metas por Área" subtitle="Distribuição atual">
            <SimpleDonutChart data={goalsByArea} height={250} />
          </ChartCard>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="mb-4 font-semibold text-foreground">Objetivos Principais</h3>
          <div className="space-y-4">
            {objectives.map((obj, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium">{obj.name}</span>
                    <StatusBadge 
                      status={obj.status === "completed" ? "success" : obj.status === "on_track" ? "info" : "warning"} 
                      label={obj.status === "completed" ? "Concluído" : obj.status === "on_track" ? "No Caminho" : "Em Risco"} 
                    />
                  </div>
                  <Progress value={obj.progress} className="h-2" />
                </div>
                <span className="text-sm font-semibold text-muted-foreground">{obj.progress}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
