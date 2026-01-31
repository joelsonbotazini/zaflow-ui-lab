import { MainLayout } from "@/components/layout/MainLayout";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { ChartCard, SimpleBarChart, SimpleDonutChart, SimpleLineChart } from "@/components/dashboard/Charts";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

const generateSparkline = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20);

const salesData = [
  { name: "Jan", value: 45000 },
  { name: "Fev", value: 52000 },
  { name: "Mar", value: 48000 },
  { name: "Abr", value: 61000 },
  { name: "Mai", value: 55000 },
  { name: "Jun", value: 67000 },
];

const funnelData = [
  { name: "Leads", value: 450, color: "hsl(217, 91%, 60%)" },
  { name: "Qualificados", value: 280, color: "hsl(280, 65%, 60%)" },
  { name: "Propostas", value: 120, color: "hsl(38, 92%, 50%)" },
  { name: "Fechados", value: 45, color: "hsl(152, 69%, 31%)" },
];

const conversionData = [
  { name: "Jan", taxa: 12, meta: 15 },
  { name: "Fev", taxa: 14, meta: 15 },
  { name: "Mar", taxa: 11, meta: 15 },
  { name: "Abr", taxa: 16, meta: 15 },
  { name: "Mai", taxa: 15, meta: 15 },
  { name: "Jun", taxa: 18, meta: 15 },
];

export default function Comercial() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Comercial</h1>
          <p className="text-sm text-muted-foreground">Vendas e performance comercial</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="Vendas Mensais"
            value="R$ 67K"
            trend={{ value: 21.8, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<DollarSign className="h-4 w-4" />}
          />
          <KpiCard
            title="Novos Clientes"
            value="12"
            trend={{ value: 50, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<Users className="h-4 w-4" />}
          />
          <KpiCard
            title="Taxa Conversão"
            value="18%"
            trend={{ value: 3, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <KpiCard
            title="Pipeline"
            value="R$ 450K"
            trend={{ value: 15, label: "oportunidades" }}
            sparklineData={generateSparkline()}
            status="info"
            icon={<Target className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ChartCard title="Vendas Mensais" subtitle="Últimos 6 meses" className="lg:col-span-2">
            <SimpleBarChart data={salesData} height={280} />
          </ChartCard>
          <ChartCard title="Funil de Vendas" subtitle="Status atual">
            <SimpleDonutChart data={funnelData} height={280} />
          </ChartCard>
        </div>

        <ChartCard title="Taxa de Conversão" subtitle="Real vs Meta">
          <SimpleLineChart
            data={conversionData}
            lines={[
              { dataKey: "taxa", color: "hsl(217, 91%, 60%)", name: "Taxa Real" },
              { dataKey: "meta", color: "hsl(152, 69%, 31%)", name: "Meta" },
            ]}
            height={250}
          />
        </ChartCard>
      </div>
    </MainLayout>
  );
}
