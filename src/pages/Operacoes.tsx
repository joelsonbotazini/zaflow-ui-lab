import { MainLayout } from "@/components/layout/MainLayout";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { ChartCard, SimpleBarChart, SimpleLineChart } from "@/components/dashboard/Charts";
import { Briefcase, Gauge, TrendingUp, Zap } from "lucide-react";

const generateSparkline = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20);

const productivityData = [
  { name: "Jan", value: 78 },
  { name: "Fev", value: 82 },
  { name: "Mar", value: 79 },
  { name: "Abr", value: 85 },
  { name: "Mai", value: 88 },
  { name: "Jun", value: 82 },
];

const efficiencyData = [
  { name: "Jan", oee: 78, meta: 85 },
  { name: "Fev", oee: 80, meta: 85 },
  { name: "Mar", oee: 82, meta: 85 },
  { name: "Abr", oee: 81, meta: 85 },
  { name: "Mai", oee: 84, meta: 85 },
  { name: "Jun", oee: 82, meta: 85 },
];

export default function Operacoes() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Operações</h1>
          <p className="text-sm text-muted-foreground">Eficiência operacional</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="OEE"
            value="82.4%"
            trend={{ value: 2.1, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<Gauge className="h-4 w-4" />}
          />
          <KpiCard
            title="Produtividade"
            value="+5.2%"
            trend={{ value: 1.8, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <KpiCard
            title="Capacidade"
            value="88%"
            trend={{ value: 3, label: "utilização" }}
            sparklineData={generateSparkline()}
            status="warning"
            icon={<Zap className="h-4 w-4" />}
          />
          <KpiCard
            title="Eficiência"
            value="91%"
            trend={{ value: 0.5, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<Briefcase className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Produtividade Mensal" subtitle="Últimos 6 meses">
            <SimpleBarChart data={productivityData} height={280} />
          </ChartCard>
          <ChartCard title="OEE vs Meta" subtitle="Evolução mensal">
            <SimpleLineChart
              data={efficiencyData}
              lines={[
                { dataKey: "oee", color: "hsl(217, 91%, 60%)", name: "OEE Real" },
                { dataKey: "meta", color: "hsl(152, 69%, 31%)", name: "Meta" },
              ]}
              height={280}
            />
          </ChartCard>
        </div>
      </div>
    </MainLayout>
  );
}
