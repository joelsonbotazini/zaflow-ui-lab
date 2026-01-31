import { MainLayout } from "@/components/layout/MainLayout";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { ChartCard, SimpleBarChart, SimpleLineChart } from "@/components/dashboard/Charts";
import { Award, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";

const generateSparkline = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20);

const ncsData = [
  { name: "Jan", abertas: 12, fechadas: 10 },
  { name: "Fev", abertas: 8, fechadas: 11 },
  { name: "Mar", abertas: 15, fechadas: 13 },
  { name: "Abr", abertas: 6, fechadas: 9 },
  { name: "Mai", abertas: 9, fechadas: 8 },
  { name: "Jun", abertas: 7, fechadas: 10 },
];

const auditScores = [
  { name: "ISO 9001", value: 92, color: "hsl(152, 69%, 31%)" },
  { name: "ISO 14001", value: 88, color: "hsl(217, 91%, 60%)" },
  { name: "ISO 45001", value: 85, color: "hsl(38, 92%, 50%)" },
];

export default function Qualidade() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Qualidade</h1>
          <p className="text-sm text-muted-foreground">Gestão da qualidade e certificações</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="NCs Abertas"
            value="7"
            trend={{ value: -22, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<AlertTriangle className="h-4 w-4" />}
          />
          <KpiCard
            title="NCs Fechadas"
            value="10"
            trend={{ value: 15, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<CheckCircle className="h-4 w-4" />}
          />
          <KpiCard
            title="Score Auditoria"
            value="92%"
            trend={{ value: 3, label: "vs. auditoria anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<FileCheck className="h-4 w-4" />}
          />
          <KpiCard
            title="Certificações"
            value="3"
            subtitle="ativas"
            sparklineData={generateSparkline()}
            status="success"
            icon={<Award className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Não Conformidades" subtitle="Abertas vs Fechadas">
            <SimpleLineChart
              data={ncsData}
              lines={[
                { dataKey: "abertas", color: "hsl(0, 72%, 51%)", name: "Abertas" },
                { dataKey: "fechadas", color: "hsl(152, 69%, 31%)", name: "Fechadas" },
              ]}
              height={280}
            />
          </ChartCard>
          <ChartCard title="Score por Certificação" subtitle="Última auditoria">
            <SimpleBarChart data={auditScores} height={280} />
          </ChartCard>
        </div>
      </div>
    </MainLayout>
  );
}
