import { cn } from "@/lib/utils"
import { AlertCircle, AlertTriangle, Info, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Alert {
  id: string
  severity: "critical" | "warning" | "info"
  title: string
  system: string
  time: string
}

interface AlertListProps {
  alerts: Alert[]
  maxItems?: number
}

export function AlertList({ alerts, maxItems = 5 }: AlertListProps) {
  const displayedAlerts = alerts.slice(0, maxItems)

  const severityConfig = {
    critical: {
      icon: AlertCircle,
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/50",
      textColor: "text-destructive",
      dotColor: "bg-destructive animate-pulse",
    },
    warning: {
      icon: AlertTriangle,
      bgColor: "bg-warning/10",
      borderColor: "border-warning/50",
      textColor: "text-warning",
      dotColor: "bg-warning",
    },
    info: {
      icon: Info,
      bgColor: "bg-primary/10",
      borderColor: "border-primary/50",
      textColor: "text-primary",
      dotColor: "bg-primary",
    },
  }

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="font-semibold">Active Alerts</h3>
        <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
          {alerts.length} active
        </span>
      </div>
      <div className="divide-y divide-border">
        {displayedAlerts.map((alert) => {
          const config = severityConfig[alert.severity]
          const Icon = config.icon
          return (
            <div
              key={alert.id}
              className={cn("flex items-center gap-3 px-4 py-3 transition-colors hover:bg-secondary/50")}
            >
              <div className={cn("rounded-lg p-2", config.bgColor)}>
                <Icon className={cn("h-4 w-4", config.textColor)} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{alert.title}</p>
                <p className="text-xs text-muted-foreground">
                  {alert.system} • {alert.time}
                </p>
              </div>
              <div className={cn("h-2 w-2 rounded-full", config.dotColor)} />
            </div>
          )
        })}
      </div>
      {alerts.length > maxItems && (
        <div className="border-t border-border p-3">
          <Button variant="ghost" size="sm" className="w-full" asChild>
            <Link href="/dashboard/alerts">
              View all {alerts.length} alerts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
