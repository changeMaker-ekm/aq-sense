"use client"

import { HealthScore } from "@/components/dashboard/health-score"
import { MetricCard } from "@/components/dashboard/metric-card"
import { AlertList } from "@/components/dashboard/alert-list"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { SparklineChart } from "@/components/dashboard/sparkline-chart"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { Droplets, Thermometer, Wind, Gauge, Fish, Waves } from "lucide-react"

const metrics = [
  {
    title: "pH Level",
    value: "6.8",
    unit: "pH",
    icon: Droplets,
    status: "normal" as const,
    trend: { value: 2.1, direction: "down" as const },
    range: { min: 6.0, max: 8.0, current: 6.8 },
  },
  {
    title: "Dissolved Oxygen",
    value: "7.2",
    unit: "mg/L",
    icon: Waves,
    status: "normal" as const,
    trend: { value: 0.5, direction: "up" as const },
    range: { min: 5.0, max: 10.0, current: 7.2 },
  },
  {
    title: "Ammonia",
    value: "0.8",
    unit: "ppm",
    icon: Gauge,
    status: "warning" as const,
    trend: { value: 15, direction: "up" as const },
    range: { min: 0, max: 2.0, current: 0.8 },
  },
  {
    title: "Water Temp",
    value: "24.5",
    unit: "°C",
    icon: Thermometer,
    status: "normal" as const,
    trend: { value: 1.2, direction: "up" as const },
    range: { min: 20, max: 30, current: 24.5 },
  },
  {
    title: "Air Temp",
    value: "26.8",
    unit: "°C",
    icon: Wind,
    status: "normal" as const,
    trend: { value: 0.8, direction: "down" as const },
    range: { min: 18, max: 35, current: 26.8 },
  },
  {
    title: "Water Level",
    value: "92",
    unit: "%",
    icon: Fish,
    status: "normal" as const,
    range: { min: 0, max: 100, current: 92 },
  },
]

const alerts = [
  {
    id: "1",
    severity: "critical" as const,
    title: "pH Level Below Safe Range",
    system: "Main Grow Bed",
    time: "2 min ago",
  },
  { id: "2", severity: "warning" as const, title: "Ammonia Rising", system: "Fish Tank A", time: "15 min ago" },
  { id: "3", severity: "warning" as const, title: "Temperature Rising", system: "Greenhouse", time: "1 hour ago" },
  { id: "4", severity: "info" as const, title: "Scheduled Feeding", system: "Fish Tank B", time: "30 min" },
]

const activities = [
  {
    id: "1",
    type: "alert" as const,
    message: "Critical: pH dropped below 6.5 in Main Grow Bed",
    time: "2 minutes ago",
  },
  { id: "2", type: "fish" as const, message: "Automated feeding completed for Fish Tank A", time: "30 minutes ago" },
  { id: "3", type: "water" as const, message: "Water level topped up automatically", time: "1 hour ago" },
  { id: "4", type: "config" as const, message: "Sensor calibration completed: DO Sensor #3", time: "2 hours ago" },
  { id: "5", type: "success" as const, message: "All systems returned to normal parameters", time: "3 hours ago" },
  {
    id: "6",
    type: "plant" as const,
    message: "Growth milestone: Lettuce batch #12 ready for harvest",
    time: "5 hours ago",
  },
]

// Generate sparkline data
const sparklineData = Array.from({ length: 24 }, (_, i) => ({
  value: 6.5 + Math.sin(i / 4) * 0.3 + Math.random() * 0.2,
}))

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Monitor your aquaponic systems in real-time</p>
        </div>
        <QuickActions />
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-4">
        {/* Health Score */}
        <div className="rounded-xl border border-border bg-card p-6 lg:col-span-1">
          <HealthScore score={78} />
        </div>

        {/* Sparkline Chart */}
        <div className="rounded-xl border border-border bg-card p-6 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">pH Level - Last 24 Hours</h3>
              <p className="text-sm text-muted-foreground">Tracking most volatile parameter</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">6.8</p>
              <p className="text-xs text-muted-foreground">Current</p>
            </div>
          </div>
          <SparklineChart data={sparklineData} height={120} />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Alerts and Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AlertList alerts={alerts} />
        <ActivityFeed activities={activities} />
      </div>
    </div>
  )
}
