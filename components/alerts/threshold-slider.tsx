"use client"
import { useState } from "react"

interface ThresholdSliderProps {
  parameter: string
  unit: string
  min: number
  max: number
  warningLow: number
  warningHigh: number
  criticalLow: number
  criticalHigh: number
  onChange?: (values: { warningLow: number; warningHigh: number; criticalLow: number; criticalHigh: number }) => void
}

export function ThresholdSlider({
  parameter,
  unit,
  min,
  max,
  warningLow: initialWarningLow,
  warningHigh: initialWarningHigh,
  criticalLow: initialCriticalLow,
  criticalHigh: initialCriticalHigh,
  onChange,
}: ThresholdSliderProps) {
  const [warningLow, setWarningLow] = useState(initialWarningLow)
  const [warningHigh, setWarningHigh] = useState(initialWarningHigh)
  const [criticalLow, setCriticalLow] = useState(initialCriticalLow)
  const [criticalHigh, setCriticalHigh] = useState(initialCriticalHigh)

  const range = max - min

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold">{parameter}</h3>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>

      {/* Visual range display */}
      <div className="relative mb-6 h-8 w-full rounded-lg overflow-hidden">
        {/* Critical low zone */}
        <div
          className="absolute top-0 bottom-0 bg-destructive/30"
          style={{
            left: 0,
            width: `${((criticalLow - min) / range) * 100}%`,
          }}
        />
        {/* Warning low zone */}
        <div
          className="absolute top-0 bottom-0 bg-warning/30"
          style={{
            left: `${((criticalLow - min) / range) * 100}%`,
            width: `${((warningLow - criticalLow) / range) * 100}%`,
          }}
        />
        {/* Safe zone */}
        <div
          className="absolute top-0 bottom-0 bg-success/30"
          style={{
            left: `${((warningLow - min) / range) * 100}%`,
            width: `${((warningHigh - warningLow) / range) * 100}%`,
          }}
        />
        {/* Warning high zone */}
        <div
          className="absolute top-0 bottom-0 bg-warning/30"
          style={{
            left: `${((warningHigh - min) / range) * 100}%`,
            width: `${((criticalHigh - warningHigh) / range) * 100}%`,
          }}
        />
        {/* Critical high zone */}
        <div
          className="absolute top-0 bottom-0 bg-destructive/30"
          style={{
            left: `${((criticalHigh - min) / range) * 100}%`,
            right: 0,
          }}
        />
      </div>

      {/* Threshold values */}
      <div className="grid grid-cols-4 gap-4 text-center text-sm">
        <div>
          <p className="text-muted-foreground mb-1">Critical Low</p>
          <p className="font-medium text-destructive">{criticalLow}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Warning Low</p>
          <p className="font-medium text-warning">{warningLow}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Warning High</p>
          <p className="font-medium text-warning">{warningHigh}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Critical High</p>
          <p className="font-medium text-destructive">{criticalHigh}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-destructive/30" />
          <span>Critical</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-warning/30" />
          <span>Warning</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-success/30" />
          <span>Safe</span>
        </div>
      </div>
    </div>
  )
}
