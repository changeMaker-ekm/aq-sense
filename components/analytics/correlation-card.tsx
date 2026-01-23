import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface CorrelationCardProps {
  metric1: string
  metric2: string
  correlation: number
  description: string
}

export function CorrelationCard({ metric1, metric2, correlation, description }: CorrelationCardProps) {
  const strength = Math.abs(correlation)
  const isPositive = correlation > 0
  const isStrong = strength > 0.7
  const isModerate = strength > 0.4 && strength <= 0.7

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {isStrong ? (
            isPositive ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )
          ) : (
            <Minus className="h-4 w-4 text-muted-foreground" />
          )}
          <span className="text-sm font-medium">
            {metric1} ↔ {metric2}
          </span>
        </div>
        <span
          className={cn(
            "text-lg font-bold",
            isStrong && isPositive && "text-success",
            isStrong && !isPositive && "text-destructive",
            isModerate && "text-warning",
            !isStrong && !isModerate && "text-muted-foreground",
          )}
        >
          {(correlation * 100).toFixed(0)}%
        </span>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  )
}
