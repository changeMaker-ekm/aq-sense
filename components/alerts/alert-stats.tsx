import { AlertCircle, AlertTriangle, Info, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface AlertStatsProps {
  critical: number
  warning: number
  info: number
  resolved: number
}

export function AlertStats({ critical, warning, info, resolved }: AlertStatsProps) {
  const stats = [
    {
      label: "Critical",
      value: critical,
      icon: AlertCircle,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      label: "Warning",
      value: warning,
      icon: AlertTriangle,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      label: "Info",
      value: info,
      icon: Info,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Resolved Today",
      value: resolved,
      icon: CheckCircle,
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", stat.bgColor)}>
              <stat.icon className={cn("h-5 w-5", stat.color)} />
            </div>
            <span className={cn("text-3xl font-bold", stat.color)}>{stat.value}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
