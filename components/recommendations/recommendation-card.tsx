"use client"

import { cn } from "@/lib/utils"
import { AlertCircle, AlertTriangle, Lightbulb, Check, Clock, BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface RecommendationCardProps {
  id: string
  severity: "critical" | "warning" | "info"
  title: string
  system: string
  currentValue: string
  targetValue: string
  description: string
  steps: string[]
  relatedArticle?: { title: string; url: string }
  onMarkDone?: (id: string) => void
  onDismiss?: (id: string) => void
  onSnooze?: (id: string) => void
}

export function RecommendationCard({
  id,
  severity,
  title,
  system,
  currentValue,
  targetValue,
  description,
  steps,
  relatedArticle,
  onMarkDone,
  onDismiss,
  onSnooze,
}: RecommendationCardProps) {
  const [expanded, setExpanded] = useState(true)

  const severityConfig = {
    critical: {
      icon: AlertCircle,
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/50",
      textColor: "text-destructive",
      label: "Critical",
    },
    warning: {
      icon: AlertTriangle,
      bgColor: "bg-warning/10",
      borderColor: "border-warning/50",
      textColor: "text-warning",
      label: "Warning",
    },
    info: {
      icon: Lightbulb,
      bgColor: "bg-primary/10",
      borderColor: "border-primary/50",
      textColor: "text-primary",
      label: "Suggestion",
    },
  }

  const config = severityConfig[severity]
  const Icon = config.icon

  return (
    <div className={cn("rounded-xl border bg-card overflow-hidden", config.borderColor)}>
      {/* Header */}
      <div
        className={cn("flex items-center gap-3 p-4 cursor-pointer hover:bg-secondary/30", config.bgColor)}
        onClick={() => setExpanded(!expanded)}
      >
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", config.bgColor)}>
          <Icon className={cn("h-5 w-5", config.textColor)} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={cn("text-xs font-medium px-2 py-0.5 rounded", config.bgColor, config.textColor)}>
              {config.label}
            </span>
            <span className="text-xs text-muted-foreground">{system}</span>
          </div>
          <h3 className="font-semibold mt-1">{title}</h3>
        </div>
        <div className="text-right mr-2">
          <p className="text-sm font-medium">
            Current: <span className={config.textColor}>{currentValue}</span>
          </p>
          <p className="text-xs text-muted-foreground">Target: {targetValue}</p>
        </div>
        {expanded ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </div>

      {/* Content */}
      {expanded && (
        <div className="p-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          {/* Steps */}
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Recommended Actions:</h4>
            <ol className="space-y-2">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Related Article */}
          {relatedArticle && (
            <a
              href={relatedArticle.url}
              className="flex items-center gap-2 text-sm text-primary hover:underline mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="h-4 w-4" />
              Learn more: {relatedArticle.title}
            </a>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2 pt-4 border-t border-border">
            {onMarkDone && (
              <Button
                size="sm"
                className="gap-2 bg-success hover:bg-success/90 text-success-foreground"
                onClick={() => onMarkDone(id)}
              >
                <Check className="h-4 w-4" />
                Mark Complete
              </Button>
            )}
            {onSnooze && (
              <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={() => onSnooze(id)}>
                <Clock className="h-4 w-4" />
                Snooze 24h
              </Button>
            )}
            {onDismiss && (
              <Button variant="ghost" size="sm" onClick={() => onDismiss(id)}>
                Dismiss
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
