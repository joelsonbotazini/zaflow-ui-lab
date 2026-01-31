import { MainLayout } from "@/components/layout/MainLayout";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { ChartCard, SimpleBarChart, SimpleAreaChart } from "@/components/dashboard/Charts";
import { ShieldCheck, AlertTriangle, Clock, Award } from "lucide-react";

const generateSparkline = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20);

const accidentsData = [
  { name: "Jan", value: 0 },
  { name: "Fev", value: 1 },
  { name: "Mar", value: 0 },
  { name: "Abr", value: 0 },
  { name: "Mai", value: 0 },
  { name: "Jun", value: 0 },
];

const trainingData = [
  { name: "NR-10", value: 98, color: "hsl(152, 69%, 31%)" },
  { name: "NR-35", value: 95, color: "hsl(217, 91%, 60%)" },
  { name: "NR-12", value: 92, color: "hsl(38, 92%, 50%)" },
  { name: "CIPA", value: 100, color: "hsl(280, 65%, 60%)" },
];

export default function SST() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">SST</h1>
          <p className="text-sm text-muted-foreground">Saúde e segurança do trabalho</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="Dias sem Acidentes"
            value="127"
            trend={{ value: 100, label: "consecutivos" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<ShieldCheck className="h-4 w-4" />}
          />
          <KpiCard
            title="Incidentes"
            value="0"
            trend={{ value: -100, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<AlertTriangle className="h-4 w-4" />}
          />
          <KpiCard
            title="Treinamentos"
            value="94%"
            subtitle="completos"
            sparklineData={generateSparkline()}
            status="success"
            icon={<Award className="h-4 w-4" />}
          />
          <KpiCard
            title="Próxima Auditoria"
            value="15"
            subtitle="dias"
            sparklineData={generateSparkline()}
            status="info"
            icon={<Clock className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Acidentes por Mês" subtitle="Últimos 6 meses">
            <SimpleAreaChart data={accidentsData} height={280} color="hsl(0, 72%, 51%)" />
          </ChartCard>
          <ChartCard title="Treinamentos Obrigatórios" subtitle="Taxa de conclusão">
            <SimpleBarChart data={trainingData} height={280} />
          </ChartCard>
        </div>
      </div>
    </MainLayout>
  );
}
