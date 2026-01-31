import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ModuleCardProps {
  title: string;
  description?: string;
  icon: ReactNode;
  iconColor?: string;
  children: ReactNode;
  actions?: {
    label: string;
    onClick: () => void;
  }[];
  href?: string;
  className?: string;
}

export function ModuleCard({
  title,
  description,
  icon,
  iconColor = "bg-primary",
  children,
  actions,
  href,
  className,
}: ModuleCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:shadow-soft",
        className
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground",
              iconColor
            )}
          >
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          {href && (
            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          )}
          {actions && actions.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {actions.map((action, index) => (
                  <DropdownMenuItem key={index} onClick={action.onClick}>
                    {action.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">{children}</div>
    </div>
  );
}
