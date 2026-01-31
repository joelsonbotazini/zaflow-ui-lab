import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "success" | "warning" | "error" | "info" | "neutral";
  label: string;
  className?: string;
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const getStatusClasses = () => {
    switch (status) {
      case "success":
        return "status-success";
      case "warning":
        return "status-warning";
      case "error":
        return "status-error";
      case "info":
        return "status-info";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        getStatusClasses(),
        className
      )}
    >
      {label}
    </span>
  );
}
