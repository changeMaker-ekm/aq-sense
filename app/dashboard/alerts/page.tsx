"use client"

import { useState } from "react"
import { AlertRow } from "@/components/alerts/alert-row"
import { AlertStats } from "@/components/alerts/alert-stats"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Settings, Check, Filter } from "lucide-react"
import Link from "next/link"

const initialAlerts = [
  {
    id: "1",
    severity: "critical" as const,
    title: "pH Level Below Safe Range",
    description:
      "The pH level in Main Grow Bed has dropped below the safe threshold. This could affect plant nutrient uptake and fish health if not addressed promptly.",
    parameter: "pH",
    currentValue: "6.2",
    threshold: "6.5-7.5",
    system: "Main Grow Bed",
    systemId: "1",
    time: "2 min ago",
    status: "active" as const,
    recommendation:
      "Add 50g calcium hydroxide per 1000L of water. Reduce fish feeding by 20% for 48 hours. Retest pH in 6 hours.",
  },
  {
    id: "2",
    severity: "warning" as const,
    title: "Ammonia Levels Rising",
    description:
      "Ammonia concentration is approaching the warning threshold. This typically indicates overfeeding or insufficient biofiltration.",
    parameter: "Ammonia",
    currentValue: "0.8 ppm",
    threshold: "< 0.5 ppm",
    system: "Fish Tank A",
    systemId: "2",
    time: "15 min ago",
    status: "active" as const,
    recommendation:
      "Reduce feeding amount by 25% for the next 3 days. Check biofilter media for clogging. Consider a partial water change if levels continue rising.",
  },
  {
    id: "3",
    severity: "warning" as const,
    title: "Temperature Rising Above Optimal",
    description:
      "Water temperature is 2°C above the optimal range for tilapia. This may increase stress and reduce dissolved oxygen levels.",
    parameter: "Water Temp",
    currentValue: "28°C",
    threshold: "24-26°C",
    system: "Greenhouse",
    systemId: "3",
    time: "1 hour ago",
    status: "acknowledged" as const,
    recommendation:
      "Increase ventilation or activate cooling fans. Add shade cloth if sunlight is direct. Monitor dissolved oxygen closely.",
  },
  {
    id: "4",
    severity: "info" as const,
    title: "Scheduled Feeding Reminder",
    description: "Automated feeding is scheduled to occur in 30 minutes for Fish Tank B.",
    parameter: "Feeding",
    currentValue: "Scheduled",
    threshold: "Every 6 hours",
    system: "Fish Tank B",
    systemId: "2",
    time: "30 min",
    status: "active" as const,
  },
  {
    id: "5",
    severity: "critical" as const,
    title: "Dissolved Oxygen Critical",
    description:
      "DO levels have dropped to critical levels. Fish may be stressed and at risk if not addressed immediately.",
    parameter: "DO",
    currentValue: "4.2 mg/L",
    threshold: "> 5.0 mg/L",
    system: "Research Lab Tank",
    systemId: "4",
    time: "5 min ago",
    status: "active" as const,
    recommendation:
      "Immediately increase aeration. Check air pumps and diffusers for blockages. Consider emergency water change with oxygenated water.",
  },
  {
    id: "6",
    severity: "info" as const,
    title: "Sensor Calibration Due",
    description: "pH Sensor #2 in NFT Channel 1 is due for calibration based on the recommended schedule.",
    parameter: "Calibration",
    currentValue: "30 days",
    threshold: "30 days",
    system: "NFT Channel 1",
    systemId: "3",
    time: "Today",
    status: "active" as const,
  },
]

export default function AlertsPage() {
  const [alerts, setAlerts] = useState(initialAlerts)
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([])
  const [filter, setFilter] = useState("all")

  const handleAcknowledge = (id: string) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, status: "acknowledged" as const } : alert)))
  }

  const handleResolve = (id: string) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, status: "resolved" as const } : alert)))
  }

  const handleSelect = (id: string, selected: boolean) => {
    if (selected) {
      setSelectedAlerts([...selectedAlerts, id])
    } else {
      setSelectedAlerts(selectedAlerts.filter((alertId) => alertId !== id))
    }
  }

  const handleBulkAcknowledge = () => {
    setAlerts(
      alerts.map((alert) =>
        selectedAlerts.includes(alert.id) && alert.status === "active"
          ? { ...alert, status: "acknowledged" as const }
          : alert,
      ),
    )
    setSelectedAlerts([])
  }

  const filteredAlerts = alerts.filter((alert) => {
    if (filter === "all") return true
    if (filter === "active") return alert.status === "active"
    if (filter === "acknowledged") return alert.status === "acknowledged"
    if (filter === "resolved") return alert.status === "resolved"
    return alert.severity === filter
  })

  const stats = {
    critical: alerts.filter((a) => a.severity === "critical" && a.status !== "resolved").length,
    warning: alerts.filter((a) => a.severity === "warning" && a.status !== "resolved").length,
    info: alerts.filter((a) => a.severity === "info" && a.status !== "resolved").length,
    resolved: alerts.filter((a) => a.status === "resolved").length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Alert Center</h1>
          <p className="text-sm text-muted-foreground">Monitor and manage system alerts</p>
        </div>
        <Button variant="outline" className="gap-2 bg-transparent" asChild>
          <Link href="/dashboard/alerts/settings">
            <Settings className="h-4 w-4" />
            Alert Settings
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <AlertStats {...stats} />

      {/* Tabs and Filters */}
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TabsList className="bg-secondary/50">
            <TabsTrigger value="all" onClick={() => setFilter("all")}>
              All Alerts
            </TabsTrigger>
            <TabsTrigger value="active" onClick={() => setFilter("active")}>
              Active
            </TabsTrigger>
            <TabsTrigger value="acknowledged" onClick={() => setFilter("acknowledged")}>
              Acknowledged
            </TabsTrigger>
            <TabsTrigger value="resolved" onClick={() => setFilter("resolved")}>
              Resolved
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search alerts..." className="pl-9 w-64 bg-secondary/50" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-36 bg-secondary/50">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severity</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="info">Info</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedAlerts.length > 0 && (
          <div className="flex items-center gap-4 rounded-lg border border-border bg-secondary/30 p-3">
            <span className="text-sm font-medium">{selectedAlerts.length} selected</span>
            <Button variant="outline" size="sm" onClick={handleBulkAcknowledge}>
              <Check className="mr-2 h-4 w-4" />
              Acknowledge Selected
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setSelectedAlerts([])}>
              Clear Selection
            </Button>
          </div>
        )}

        {/* Alert List */}
        <TabsContent value="all" className="space-y-3 mt-0">
          {filteredAlerts.map((alert) => (
            <AlertRow
              key={alert.id}
              {...alert}
              onAcknowledge={handleAcknowledge}
              onResolve={handleResolve}
              selected={selectedAlerts.includes(alert.id)}
              onSelect={handleSelect}
            />
          ))}
          {filteredAlerts.length === 0 && (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <p className="text-muted-foreground">No alerts found matching your criteria.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="active" className="space-y-3 mt-0">
          {filteredAlerts.map((alert) => (
            <AlertRow
              key={alert.id}
              {...alert}
              onAcknowledge={handleAcknowledge}
              onResolve={handleResolve}
              selected={selectedAlerts.includes(alert.id)}
              onSelect={handleSelect}
            />
          ))}
        </TabsContent>

        <TabsContent value="acknowledged" className="space-y-3 mt-0">
          {filteredAlerts.map((alert) => (
            <AlertRow
              key={alert.id}
              {...alert}
              onAcknowledge={handleAcknowledge}
              onResolve={handleResolve}
              selected={selectedAlerts.includes(alert.id)}
              onSelect={handleSelect}
            />
          ))}
        </TabsContent>

        <TabsContent value="resolved" className="space-y-3 mt-0">
          {filteredAlerts.map((alert) => (
            <AlertRow
              key={alert.id}
              {...alert}
              onAcknowledge={handleAcknowledge}
              onResolve={handleResolve}
              selected={selectedAlerts.includes(alert.id)}
              onSelect={handleSelect}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
