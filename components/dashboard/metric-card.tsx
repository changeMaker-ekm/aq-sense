"use client"

import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  unit: string
  icon: LucideIcon
  status: "normal" | "warning" | "critical"
  trend?: {
    value: number
    direction: "up" | "down"
  }
  range?: {
    min: number
    max: number
    current: number
  }
}

export function MetricCard({ title, value, unit, icon: Icon, status, trend, range }: MetricCardProps) {
  const statusColors = {
    normal: "border-success/50 bg-success/5",
    warning: "border-warning/50 bg-warning/5",
    critical: "border-destructive/50 bg-destructive/5",
  }

  const statusDotColors = {
    normal: "bg-success",
    warning: "bg-warning",
    critical: "bg-destructive animate-pulse",
  }

  const statusTextColors = {
    normal: "text-success",
    warning: "text-warning",
    critical: "text-destructive",
  }

  const statusBgColors = {
    normal: "bg-success",
    warning: "bg-warning",
    critical: "bg-destructive",
  }

  return (
    <div className={cn("rounded-xl border p-4 transition-all hover:shadow-lg", statusColors[status])}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className={cn("h-2 w-2 rounded-full", statusDotColors[status])} />
          <span className="text-sm text-muted-foreground">{title}</span>
        </div>
        <div className={cn("rounded-lg p-2", status === "normal" ? "bg-primary/10" : `${statusColors[status]}`)}>
          <Icon className={cn("h-4 w-4", status === "normal" ? "text-primary" : statusTextColors[status])} />
        </div>
      </div>

      <div className="mt-3">
        <span className="text-3xl font-bold">{value}</span>
        <span className="ml-1 text-sm text-muted-foreground">{unit}</span>
      </div>

      {trend && (
        <div className="mt-2 flex items-center gap-1 text-xs">
          <span className={trend.direction === "up" ? "text-destructive" : "text-success"}>
            {trend.direction === "up" ? "↑" : "↓"} {Math.abs(trend.value)}%
          </span>
          <span className="text-muted-foreground">from last hour</span>
        </div>
      )}

      {range && (
        <div className="mt-3">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{range.min}</span>
            <span>{range.max}</span>
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className={cn("h-full rounded-full transition-all", statusBgColors[status])}
              style={{ width: `${((range.current - range.min) / (range.max - range.min)) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
