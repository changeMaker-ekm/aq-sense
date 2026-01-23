"use client"

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TrendsChartProps {
  data: Array<{
    time: string
    ph: number
    do: number
    temp: number
    ammonia: number
  }>
  selectedMetrics: string[]
}

const metricConfig: Record<string, { color: string; label: string }> = {
  ph: { color: "hsl(var(--primary))", label: "pH Level" },
  do: { color: "hsl(var(--success))", label: "Dissolved Oxygen" },
  temp: { color: "hsl(var(--accent))", label: "Temperature" },
  ammonia: { color: "hsl(var(--warning))", label: "Ammonia" },
}

export function TrendsChart({ data, selectedMetrics }: TrendsChartProps) {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Parameter Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                {Object.entries(metricConfig).map(([key, config]) => (
                  <linearGradient key={key} id={`gradient-${key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={config.color} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={config.color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Legend />
              {selectedMetrics.map((metric) => (
                <Area
                  key={metric}
                  type="monotone"
                  dataKey={metric}
                  name={metricConfig[metric]?.label || metric}
                  stroke={metricConfig[metric]?.color || "hsl(var(--primary))"}
                  fill={`url(#gradient-${metric})`}
                  strokeWidth={2}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
