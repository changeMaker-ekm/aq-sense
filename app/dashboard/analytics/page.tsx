"use client"

import { useState } from "react"
import { TrendsChart } from "@/components/analytics/trends-chart"
import { CorrelationCard } from "@/components/analytics/correlation-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Download, FileText, AlertTriangle } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Generate sample data
const generateData = () => {
  const data = []
  for (let i = 0; i < 24; i++) {
    data.push({
      time: `${i}:00`,
      ph: 6.5 + Math.sin(i / 4) * 0.4 + Math.random() * 0.2,
      do: 7 + Math.cos(i / 6) * 0.5 + Math.random() * 0.3,
      temp: 24 + Math.sin(i / 8) * 2 + Math.random() * 0.5,
      ammonia: 0.3 + Math.sin(i / 5) * 0.2 + Math.random() * 0.1,
    })
  }
  return data
}

const correlations = [
  { metric1: "Feed Rate", metric2: "Ammonia", correlation: 0.87, description: "High positive correlation detected" },
  {
    metric1: "Temperature",
    metric2: "DO Level",
    correlation: -0.72,
    description: "Strong inverse relationship - higher temps reduce DO",
  },
  {
    metric1: "pH Level",
    metric2: "Plant Growth",
    correlation: 0.65,
    description: "Moderate positive correlation",
  },
  {
    metric1: "Water Flow",
    metric2: "Ammonia",
    correlation: -0.54,
    description: "Better flow reduces ammonia buildup",
  },
]

const anomalies = [
  {
    time: "Today, 14:32",
    parameter: "pH Level",
    value: "5.8",
    expectedRange: "6.5-7.5",
    severity: "high" as const,
  },
  {
    time: "Today, 11:15",
    parameter: "Ammonia",
    value: "0.9 ppm",
    expectedRange: "< 0.5 ppm",
    severity: "medium" as const,
  },
  {
    time: "Yesterday, 18:45",
    parameter: "Temperature",
    value: "29°C",
    expectedRange: "24-26°C",
    severity: "medium" as const,
  },
]

export default function AnalyticsPage() {
  const [selectedMetrics, setSelectedMetrics] = useState(["ph", "do"])
  const [dateRange, setDateRange] = useState("24h")
  const data = generateData()

  const toggleMetric = (metric: string) => {
    if (selectedMetrics.includes(metric)) {
      setSelectedMetrics(selectedMetrics.filter((m) => m !== metric))
    } else {
      setSelectedMetrics([...selectedMetrics, metric])
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-sm text-muted-foreground">Visualize trends and identify patterns in your data</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <FileText className="h-4 w-4" />
            Generate Report
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Date Range:</span>
        </div>
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-40 bg-secondary/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 Hours</SelectItem>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
            <SelectItem value="90d">Last 90 Days</SelectItem>
            <SelectItem value="custom">Custom Range</SelectItem>
          </SelectContent>
        </Select>

        <div className="h-6 w-px bg-border hidden sm:block" />

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Parameters:</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {[
            { id: "ph", label: "pH Level" },
            { id: "do", label: "Dissolved Oxygen" },
            { id: "temp", label: "Temperature" },
            { id: "ammonia", label: "Ammonia" },
          ].map((metric) => (
            <div key={metric.id} className="flex items-center gap-2">
              <Checkbox
                id={metric.id}
                checked={selectedMetrics.includes(metric.id)}
                onCheckedChange={() => toggleMetric(metric.id)}
              />
              <Label htmlFor={metric.id} className="text-sm cursor-pointer">
                {metric.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chart */}
      <TrendsChart data={data} selectedMetrics={selectedMetrics} />

      {/* Correlations and Anomalies */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Correlations */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold mb-4">Detected Correlations</h3>
          <p className="text-sm text-muted-foreground mb-4">
            AI-detected relationships between parameters in your system
          </p>
          <div className="space-y-3">
            {correlations.map((correlation, index) => (
              <CorrelationCard key={index} {...correlation} />
            ))}
          </div>
        </div>

        {/* Anomalies */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h3 className="font-semibold">Detected Anomalies</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Readings that deviated significantly from expected values
          </p>
          <div className="space-y-3">
            {anomalies.map((anomaly, index) => (
              <div
                key={index}
                className={`rounded-lg border p-3 ${
                  anomaly.severity === "high"
                    ? "border-destructive/30 bg-destructive/5"
                    : anomaly.severity === "medium"
                      ? "border-warning/30 bg-warning/5"
                      : "border-primary/30 bg-primary/5"
                }`}
              >
                <div className="flex items-start gap-2">
                  <AlertTriangle
                    className={`h-4 w-4 mt-0.5 ${
                      anomaly.severity === "high"
                        ? "text-destructive"
                        : anomaly.severity === "medium"
                          ? "text-warning"
                          : "text-primary"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{anomaly.parameter} Anomaly</p>
                    <p className="text-xs text-muted-foreground">
                      {anomaly.value} (expected: {anomaly.expectedRange})
                    </p>
                    <p className="text-xs text-muted-foreground">{anomaly.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
