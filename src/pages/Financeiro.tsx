import { MainLayout } from "@/components/layout/MainLayout";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { ChartCard, SimpleBarChart, SimpleLineChart, SimpleAreaChart } from "@/components/dashboard/Charts";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Wallet,
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data
const generateSparkline = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20);

const cashFlowData = [
  { name: "Jan", receitas: 145000, despesas: 98000 },
  { name: "Fev", receitas: 152000, despesas: 105000 },
  { name: "Mar", receitas: 138000, despesas: 95000 },
  { name: "Abr", receitas: 161000, despesas: 112000 },
  { name: "Mai", receitas: 155000, despesas: 108000 },
  { name: "Jun", receitas: 167000, despesas: 115000 },
];

const revenueByCategory = [
  { name: "Produtos", value: 85000, color: "hsl(217, 91%, 60%)" },
  { name: "Serviços", value: 45000, color: "hsl(152, 69%, 31%)" },
  { name: "Consultoria", value: 28000, color: "hsl(38, 92%, 50%)" },
  { name: "Licenças", value: 15000, color: "hsl(280, 65%, 60%)" },
];

const expensesByCategory = [
  { name: "Pessoal", value: 52000, color: "hsl(0, 72%, 51%)" },
  { name: "Operacional", value: 28000, color: "hsl(38, 92%, 50%)" },
  { name: "Marketing", value: 18000, color: "hsl(217, 91%, 60%)" },
  { name: "Infraestrutura", value: 12000, color: "hsl(152, 69%, 31%)" },
];

const financialIndicators = [
  { indicator: "Margem Bruta", value: "42.5%", trend: 2.3, status: "success" as const },
  { indicator: "Margem EBITDA", value: "24.8%", trend: 1.2, status: "success" as const },
  { indicator: "Margem Líquida", value: "18.2%", trend: -0.5, status: "warning" as const },
  { indicator: "ROE", value: "22.4%", trend: 3.1, status: "success" as const },
  { indicator: "ROI", value: "18.5%", trend: 0.8, status: "success" as const },
  { indicator: "Liquidez Corrente", value: "2.4", trend: 0.3, status: "success" as const },
  { indicator: "Endividamento", value: "35.2%", trend: -2.1, status: "success" as const },
  { indicator: "Prazo Médio Recebimento", value: "45 dias", trend: 5, status: "warning" as const },
];

const transactions = [
  { id: 1, description: "Venda - Cliente ABC", type: "receita", value: 25000, date: "2024-01-15", status: "confirmado" },
  { id: 2, description: "Pagamento Fornecedor XYZ", type: "despesa", value: 8500, date: "2024-01-14", status: "confirmado" },
  { id: 3, description: "Serviço Consultoria", type: "receita", value: 12000, date: "2024-01-14", status: "pendente" },
  { id: 4, description: "Folha de Pagamento", type: "despesa", value: 45000, date: "2024-01-10", status: "confirmado" },
  { id: 5, description: "Venda - Cliente DEF", type: "receita", value: 18500, date: "2024-01-08", status: "confirmado" },
];

export default function Financeiro() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Financeiro</h1>
            <p className="text-sm text-muted-foreground">
              Gestão financeira e indicadores contábeis
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>

        {/* KPIs Row */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="Receita Mensal"
            value="R$ 167K"
            trend={{ value: 7.8, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <KpiCard
            title="Despesas"
            value="R$ 115K"
            trend={{ value: 3.2, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="warning"
            icon={<TrendingDown className="h-4 w-4" />}
          />
          <KpiCard
            title="Lucro Líquido"
            value="R$ 52K"
            trend={{ value: 15.4, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<Wallet className="h-4 w-4" />}
          />
          <KpiCard
            title="Saldo em Caixa"
            value="R$ 234K"
            trend={{ value: 8.1, label: "vs. mês anterior" }}
            sparklineData={generateSparkline()}
            status="success"
            icon={<PiggyBank className="h-4 w-4" />}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Fluxo de Caixa" subtitle="Receitas vs Despesas - Últimos 6 meses">
            <SimpleLineChart
              data={cashFlowData}
              lines={[
                { dataKey: "receitas", color: "hsl(152, 69%, 31%)", name: "Receitas" },
                { dataKey: "despesas", color: "hsl(0, 72%, 51%)", name: "Despesas" },
              ]}
              height={280}
            />
          </ChartCard>

          <ChartCard title="Receitas por Categoria" subtitle="Distribuição do mês atual">
            <SimpleBarChart data={revenueByCategory} height={280} />
          </ChartCard>
        </div>

        {/* Indicators Table */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Indicadores Financeiros</h3>
            <Button variant="ghost" size="sm">Ver todos</Button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {financialIndicators.map((item, index) => (
              <div key={index} className="rounded-lg bg-accent/30 p-4">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {item.indicator}
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground">{item.value}</span>
                  <span className={`flex items-center text-xs font-medium ${
                    item.trend > 0 ? "text-success" : item.trend < 0 ? "text-destructive" : "text-muted-foreground"
                  }`}>
                    {item.trend > 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {Math.abs(item.trend)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Últimas Transações</h3>
            <Button variant="ghost" size="sm">Ver todas</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium">{tx.description}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {tx.type === "receita" ? (
                        <ArrowUpRight className="h-4 w-4 text-success" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-destructive" />
                      )}
                      <span className="capitalize">{tx.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                  <TableCell>
                    <StatusBadge 
                      status={tx.status === "confirmado" ? "success" : "warning"} 
                      label={tx.status} 
                    />
                  </TableCell>
                  <TableCell className={`text-right font-medium ${
                    tx.type === "receita" ? "text-success" : "text-destructive"
                  }`}>
                    {tx.type === "receita" ? "+" : "-"} R$ {tx.value.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
}
