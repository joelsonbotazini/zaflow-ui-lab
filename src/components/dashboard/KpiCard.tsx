import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    label: string;
  };
  sparklineData?: number[];
  icon?: ReactNode;
  status?: "success" | "warning" | "error" | "info" | "neutral";
  className?: string;
}

export function KpiCard({
  title,
  value,
  subtitle,
  trend,
  sparklineData,
  icon,
  status = "neutral",
  className,
}: KpiCardProps) {
  const getTrendIcon = () => {
    if (!trend) return null;
    if (trend.value > 0) return <TrendingUp className="h-3 w-3" />;
    if (trend.value < 0) return <TrendingDown className="h-3 w-3" />;
    return <Minus className="h-3 w-3" />;
  };

  const getTrendColor = () => {
    if (!trend) return "";
    if (trend.value > 0) return "text-success";
    if (trend.value < 0) return "text-destructive";
    return "text-muted-foreground";
  };

  const getSparklineColor = () => {
    switch (status) {
      case "success":
        return "hsl(152, 69%, 31%)";
      case "warning":
        return "hsl(38, 92%, 50%)";
      case "error":
        return "hsl(0, 72%, 51%)";
      case "info":
        return "hsl(217, 91%, 60%)";
      default:
        return "hsl(217, 91%, 60%)";
    }
  };

  const chartData = sparklineData?.map((value, index) => ({ value, index })) || [];

  return (
    <div className={cn("kpi-card group", className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            {icon && (
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-muted-foreground">
                {icon}
              </span>
            )}
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {title}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              {value}
            </span>
            {subtitle && (
              <span className="text-sm text-muted-foreground">{subtitle}</span>
            )}
          </div>
          {trend && (
            <div className={cn("mt-2 flex items-center gap-1 text-xs font-medium", getTrendColor())}>
              {getTrendIcon()}
              <span>{trend.value > 0 ? "+" : ""}{trend.value}%</span>
              <span className="text-muted-foreground">{trend.label}</span>
            </div>
          )}
        </div>
        
        {sparklineData && sparklineData.length > 0 && (
          <div className="h-12 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={getSparklineColor()} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={getSparklineColor()} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={getSparklineColor()}
                  strokeWidth={1.5}
                  fill={`url(#gradient-${title})`}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
