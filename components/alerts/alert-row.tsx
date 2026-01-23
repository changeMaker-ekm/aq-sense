"use client"

import { cn } from "@/lib/utils"
import { AlertCircle, AlertTriangle, Info, Check, Clock, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import Link from "next/link"

interface AlertRowProps {
  id: string
  severity: "critical" | "warning" | "info"
  title: string
  description: string
  parameter: string
  currentValue: string
  threshold: string
  system: string
  systemId: string
  time: string
  status: "active" | "acknowledged" | "resolved"
  recommendation?: string
  onAcknowledge?: (id: string) => void
  onResolve?: (id: string) => void
  selected?: boolean
  onSelect?: (id: string, selected: boolean) => void
}

export function AlertRow({
  id,
  severity,
  title,
  description,
  parameter,
  currentValue,
  threshold,
  system,
  systemId,
  time,
  status,
  recommendation,
  onAcknowledge,
  onResolve,
  selected,
  onSelect,
}: AlertRowProps) {
  const [expanded, setExpanded] = useState(false)

  const severityConfig = {
    critical: {
      icon: AlertCircle,
      bgColor: "bg-destructive/10",
      borderColor: "border-l-destructive",
      textColor: "text-destructive",
      badgeColor: "bg-destructive/10 text-destructive border-destructive/30",
    },
    warning: {
      icon: AlertTriangle,
      bgColor: "bg-warning/10",
      borderColor: "border-l-warning",
      textColor: "text-warning",
      badgeColor: "bg-warning/10 text-warning border-warning/30",
    },
    info: {
      icon: Info,
      bgColor: "bg-primary/10",
      borderColor: "border-l-primary",
      textColor: "text-primary",
      badgeColor: "bg-primary/10 text-primary border-primary/30",
    },
  }

  const config = severityConfig[severity]
  const Icon = config.icon

  return (
    <div
      className={cn("rounded-lg border border-l-4 bg-card transition-all", config.borderColor, expanded && "shadow-lg")}
    >
      <div
        className="flex items-center gap-4 p-4 cursor-pointer hover:bg-secondary/30"
        onClick={() => setExpanded(!expanded)}
      >
        {onSelect && (
          <Checkbox
            checked={selected}
            onCheckedChange={(checked) => onSelect(id, checked as boolean)}
            onClick={(e) => e.stopPropagation()}
          />
        )}

        <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", config.bgColor)}>
          <Icon className={cn("h-5 w-5", config.textColor)} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-medium truncate">{title}</h4>
            {status === "acknowledged" && (
              <span className="rounded-full bg-warning/10 px-2 py-0.5 text-xs text-warning">Acknowledged</span>
            )}
            {status === "resolved" && (
              <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs text-success">Resolved</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground truncate">
            {system} • {parameter}: {currentValue} (threshold: {threshold})
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          {time}
        </div>

        <ChevronRight className={cn("h-5 w-5 text-muted-foreground transition-transform", expanded && "rotate-90")} />
      </div>

      {expanded && (
        <div className="border-t border-border px-4 py-4">
          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          {recommendation && (
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 mb-4">
              <h5 className="text-sm font-medium text-primary mb-2">Recommended Action</h5>
              <p className="text-sm text-muted-foreground">{recommendation}</p>
            </div>
          )}

          <div className="flex items-center justify-between">
            <Link
              href={`/dashboard/systems/${systemId}`}
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              View System
              <ExternalLink className="h-3 w-3" />
            </Link>

            <div className="flex items-center gap-2">
              {status === "active" && onAcknowledge && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onAcknowledge(id)
                  }}
                >
                  Acknowledge
                </Button>
              )}
              {status !== "resolved" && onResolve && (
                <Button
                  size="sm"
                  className="gap-1 bg-success hover:bg-success/90 text-success-foreground"
                  onClick={(e) => {
                    e.stopPropagation()
                    onResolve(id)
                  }}
                >
                  <Check className="h-4 w-4" />
                  Mark Resolved
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
