"use client"

import { cn } from "@/lib/utils"

interface HealthScoreProps {
  score: number
  label?: string
  size?: "sm" | "md" | "lg"
}

export function HealthScore({ score, label = "System Health", size = "lg" }: HealthScoreProps) {
  const getColor = (score: number) => {
    if (score >= 80) return "text-success"
    if (score >= 60) return "text-warning"
    return "text-destructive"
  }

  const getStatus = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Attention Needed"
    return "Critical"
  }

  const sizeClasses = {
    sm: "h-24 w-24",
    md: "h-32 w-32",
    lg: "h-44 w-44",
  }

  const textSizes = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
  }

  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className={cn("relative", sizeClasses[size])}>
        <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-border" />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={cn("transition-all duration-1000 ease-out", getColor(score))}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-bold", textSizes[size], getColor(score))}>{score}</span>
          {size === "lg" && <span className="text-xs text-muted-foreground">/ 100</span>}
        </div>
      </div>
      <p className="mt-2 text-sm font-medium">{label}</p>
      <p className={cn("text-xs", getColor(score))}>{getStatus(score)}</p>
    </div>
  )
}
