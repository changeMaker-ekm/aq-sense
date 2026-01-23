import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Settings, RefreshCw, Battery, Signal } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface SensorRowProps {
  id: string
  name: string
  type: string
  icon: LucideIcon
  value: string
  unit: string
  status: "online" | "offline" | "warning" | "calibrating"
  battery?: number
  signal?: number
  lastCalibrated?: string
}

export function SensorRow({
  name,
  type,
  icon: Icon,
  value,
  unit,
  status,
  battery,
  signal,
  lastCalibrated,
}: SensorRowProps) {
  const statusConfig = {
    online: { label: "Online", color: "bg-success/10 text-success border-success/30" },
    offline: { label: "Offline", color: "bg-destructive/10 text-destructive border-destructive/30" },
    warning: { label: "Warning", color: "bg-warning/10 text-warning border-warning/30" },
    calibrating: { label: "Calibrating", color: "bg-primary/10 text-primary border-primary/30" },
  }

  const config = statusConfig[status]

  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary/50">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-medium truncate">{name}</h4>
          <Badge variant="outline" className={cn("text-xs", config.color)}>
            {config.label}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{type}</p>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold">
          {value}
          <span className="ml-1 text-sm font-normal text-muted-foreground">{unit}</span>
        </p>
        {lastCalibrated && <p className="text-xs text-muted-foreground">Calibrated {lastCalibrated}</p>}
      </div>

      {(battery !== undefined || signal !== undefined) && (
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {battery !== undefined && (
            <div className="flex items-center gap-1">
              <Battery className={cn("h-4 w-4", battery < 20 ? "text-destructive" : "")} />
              <span>{battery}%</span>
            </div>
          )}
          {signal !== undefined && (
            <div className="flex items-center gap-1">
              <Signal className={cn("h-4 w-4", signal < 30 ? "text-warning" : "")} />
              <span>{signal}%</span>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <RefreshCw className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
