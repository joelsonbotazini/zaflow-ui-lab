import { MainLayout } from "@/components/layout/MainLayout";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { ChartCard, SimpleBarChart, SimpleDonutChart } from "@/components/dashboard/Charts";
import { Users, UserPlus, UserMinus, Heart } from "lucide-react";

const generateSparkline = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20);

const headcountData = [
  { name: "Jan", value: 142 },
  { name: "Fev", value: 145 },
  { name: "Mar", value: 148 },
  { name: "Abr", value: 152 },
  { name: "Mai", value: 154 },
  { name: "Jun", value: 156 },
];

const departmentData = [
  { name: "Tecnologia", value: 45, color: "hsl(217, 91%, 60%)" },
  { name: "Comercial", value: 32, color: "hsl(152, 69%, 31%)" },
  { name: "Operações", value: 28, color: "hsl(38, 92%, 50%)" },
  { name: "Administrativo", value: 25, color: "hsl(280, 65%, 60%)" },
  { name: "RH", value: 12, color: "hsl(0, 72%, 51%)" },
];

export default function Pessoas() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Pessoas</h1>
          <p className="text-sm text-muted-foreground">Gestão de recursos humanos</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="Total Colaboradores"
            value="156"
            trend={{ value: 3, label: "novos este mês" }}
            sparklineData={generateSparkline()}
            status="info"
            icon={<Users className="h-4 w-4" />}
          />
          <KpiCard
            title="Contratações"
            value="8"
            trend={{ value: 12, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<UserPlus className="h-4 w-4" />}
          />
          <KpiCard
            title="Turnover"
            value="3.2%"
            trend={{ value: -0.5, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<UserMinus className="h-4 w-4" />}
          />
          <KpiCard
            title="Satisfação"
            value="8.4"
            subtitle="/ 10"
            trend={{ value: 0.2, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<Heart className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Evolução Headcount" subtitle="Últimos 6 meses">
            <SimpleBarChart data={headcountData} height={280} />
          </ChartCard>
          <ChartCard title="Distribuição por Departamento" subtitle="Colaboradores ativos">
            <SimpleDonutChart data={departmentData} height={280} />
          </ChartCard>
        </div>
      </div>
    </MainLayout>
  );
}
