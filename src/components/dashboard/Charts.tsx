import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  PieChart,
  Pie,
  Legend,
  Line,
  LineChart,
  Area,
  AreaChart,
} from "recharts";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function ChartCard({ title, subtitle, children, className }: ChartCardProps) {
  return (
    <div className={`rounded-xl border border-border bg-card p-5 ${className}`}>
      <div className="mb-4">
        <h3 className="font-semibold text-foreground">{title}</h3>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
}

interface BarChartData {
  name: string;
  value: number;
  color?: string;
}

interface SimpleBarChartProps {
  data: BarChartData[];
  height?: number;
  showGrid?: boolean;
}

export function SimpleBarChart({ data, height = 200, showGrid = true }: SimpleBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />}
        <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            fontSize: '12px',
          }}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || 'hsl(var(--chart-1))'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

interface DonutChartData {
  name: string;
  value: number;
  color: string;
}

interface SimpleDonutChartProps {
  data: DonutChartData[];
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
}

export function SimpleDonutChart({ 
  data, 
  height = 200, 
  innerRadius = 50, 
  outerRadius = 80 
}: SimpleDonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            fontSize: '12px',
          }}
        />
        <Legend 
          verticalAlign="bottom" 
          height={36}
          formatter={(value) => (
            <span style={{ color: 'hsl(var(--foreground))', fontSize: '11px' }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

interface LineChartData {
  name: string;
  [key: string]: string | number;
}

interface SimpleLineChartProps {
  data: LineChartData[];
  lines: {
    dataKey: string;
    color: string;
    name?: string;
  }[];
  height?: number;
  showGrid?: boolean;
}

export function SimpleLineChart({ data, lines, height = 200, showGrid = true }: SimpleLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />}
        <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            fontSize: '12px',
          }}
        />
        {lines.map((line, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.color}
            strokeWidth={2}
            dot={false}
            name={line.name || line.dataKey}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

interface AreaChartData {
  name: string;
  value: number;
  value2?: number;
}

interface SimpleAreaChartProps {
  data: AreaChartData[];
  height?: number;
  color?: string;
  showGrid?: boolean;
}

export function SimpleAreaChart({ 
  data, 
  height = 200, 
  color = 'hsl(var(--chart-1))',
  showGrid = true 
}: SimpleAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.3} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />}
        <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            fontSize: '12px',
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fill="url(#areaGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
