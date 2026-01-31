import { MainLayout } from "@/components/layout/MainLayout";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { ChartCard, SimpleBarChart } from "@/components/dashboard/Charts";
import { GraduationCap, BookOpen, Award, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const generateSparkline = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20);

const trainingData = [
  { name: "Liderança", value: 85, color: "hsl(217, 91%, 60%)" },
  { name: "Técnico", value: 92, color: "hsl(152, 69%, 31%)" },
  { name: "Soft Skills", value: 78, color: "hsl(38, 92%, 50%)" },
  { name: "Compliance", value: 95, color: "hsl(280, 65%, 60%)" },
];

const developmentPlans = [
  { name: "Maria Santos", role: "Gerente de Projetos", progress: 75, status: "on_track" },
  { name: "João Silva", role: "Desenvolvedor Senior", progress: 60, status: "on_track" },
  { name: "Ana Costa", role: "Analista de RH", progress: 45, status: "at_risk" },
  { name: "Pedro Oliveira", role: "Coordenador", progress: 90, status: "on_track" },
];

export default function PDI() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">PDI</h1>
          <p className="text-sm text-muted-foreground">Plano de Desenvolvimento Individual</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="PDIs Ativos"
            value="48"
            trend={{ value: 8, label: "novos este mês" }}
            sparklineData={generateSparkline()}
            status="info"
            icon={<GraduationCap className="h-4 w-4" />}
          />
          <KpiCard
            title="Taxa Conclusão"
            value="72%"
            trend={{ value: 5, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<Award className="h-4 w-4" />}
          />
          <KpiCard
            title="Treinamentos"
            value="24"
            trend={{ value: 12, label: "em andamento" }}
            sparklineData={generateSparkline()}
            status="info"
            icon={<BookOpen className="h-4 w-4" />}
          />
          <KpiCard
            title="Horas Treinamento"
            value="1.2K"
            trend={{ value: 15, label: "este mês" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<Clock className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Treinamentos por Categoria" subtitle="Taxa de conclusão">
            <SimpleBarChart data={trainingData} height={280} />
          </ChartCard>
          
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 font-semibold text-foreground">PDIs em Destaque</h3>
            <div className="space-y-4">
              {developmentPlans.map((plan, index) => (
                <div key={index} className="rounded-lg bg-accent/30 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <span className="font-medium">{plan.name}</span>
                      <p className="text-xs text-muted-foreground">{plan.role}</p>
                    </div>
                    <StatusBadge 
                      status={plan.status === "on_track" ? "success" : "warning"} 
                      label={plan.status === "on_track" ? "No Caminho" : "Em Risco"} 
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={plan.progress} className="h-2 flex-1" />
                    <span className="text-sm font-semibold">{plan.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
