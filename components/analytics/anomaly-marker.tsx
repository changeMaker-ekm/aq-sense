import { AlertTriangle } from "lucide-react"

interface AnomalyMarkerProps {
  time: string
  parameter: string
  value: string
  expectedRange: string
  severity: "low" | "medium" | "high"
}

export function AnomalyMarker({ time, parameter, value, expectedRange, severity }: AnomalyMarkerProps) {
  const severityColors = {
    low: "border-primary/30 bg-primary/5",
    medium: "border-warning/30 bg-warning/5",
    high: "border-destructive/30 bg-destructive/5",
  }

  const severityTextColors = {
    low: "text-primary",
    medium: "text-warning",
    high: "text-destructive",
  }

  return (
    <div className={cn("rounded-lg border p-3", severityColors[severity])}>
      <div className="flex items-start gap-2">
        <AlertTriangle className={cn("h-4 w-4 mt-0.5", severityTextColors[severity])} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium">{parameter} Anomaly</p>
          <p className="text-xs text-muted-foreground">
            {value} (expected: {expectedRange})
          </p>
          <p className="text-xs text-muted-foreground">{time}</p>
        </div>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
