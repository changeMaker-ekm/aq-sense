"use client"

import { useState } from "react"
import { RecommendationCard } from "@/components/recommendations/recommendation-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, History, CheckCircle } from "lucide-react"

const initialRecommendations = [
  {
    id: "1",
    severity: "critical" as const,
    title: "pH Dropping Below Safe Range",
    system: "Main Grow Bed",
    currentValue: "6.2",
    targetValue: "6.8-7.2",
    description:
      "The pH level has been steadily declining over the past 6 hours and is now below the safe range for optimal plant nutrient uptake. This could be caused by excessive fish waste, decomposing organic matter, or insufficient buffering capacity.",
    steps: [
      "Add 50g calcium hydroxide (slaked lime) per 1000L of system water",
      "Reduce fish feeding by 20% for the next 48 hours to decrease waste production",
      "Check and clean any accumulated debris from grow beds",
      "Retest pH in 6 hours and adjust if necessary",
    ],
    relatedArticle: { title: "Understanding pH Management in Aquaponics", url: "#" },
  },
  {
    id: "2",
    severity: "warning" as const,
    title: "Ammonia Approaching Warning Level",
    system: "Fish Tank A",
    currentValue: "0.8 ppm",
    targetValue: "< 0.5 ppm",
    description:
      "Ammonia concentration is rising and approaching the warning threshold. This typically indicates overfeeding, insufficient nitrifying bacteria, or a biofilter issue.",
    steps: [
      "Reduce feeding amount by 25% for the next 3 days",
      "Check biofilter media for clogging or dead zones",
      "Test nitrite levels to assess nitrification process",
      "Consider a 10% water change if levels continue rising",
    ],
    relatedArticle: { title: "Managing the Nitrogen Cycle", url: "#" },
  },
  {
    id: "3",
    severity: "info" as const,
    title: "Optimize Feeding Schedule",
    system: "All Systems",
    currentValue: "3x daily",
    targetValue: "4x daily (smaller portions)",
    description:
      "Based on your current fish density and growth stage, switching to more frequent, smaller feedings could improve feed conversion ratio and reduce ammonia spikes.",
    steps: [
      "Divide current daily feed amount into 4 portions instead of 3",
      "Adjust automated feeder schedule to 6:00, 10:00, 14:00, and 18:00",
      "Monitor fish behavior and adjust portions if feed is not consumed within 5 minutes",
    ],
  },
  {
    id: "4",
    severity: "info" as const,
    title: "Consider Adding Supplemental Aeration",
    system: "Fish Tank A",
    currentValue: "7.2 mg/L",
    targetValue: "> 8.0 mg/L",
    description:
      "While dissolved oxygen levels are within acceptable range, they could be optimized. Higher DO levels improve fish metabolism and reduce stress.",
    steps: [
      "Install an additional air stone or diffuser in the tank",
      "Consider a venturi aerator for more efficient oxygenation",
      "Monitor DO levels during peak temperature hours (2-4 PM)",
    ],
  },
]

const historyRecommendations = [
  {
    id: "h1",
    severity: "warning" as const,
    title: "Temperature Adjustment Needed",
    system: "Greenhouse",
    currentValue: "29°C",
    targetValue: "24-26°C",
    description: "Temperature exceeded optimal range during afternoon hours.",
    steps: ["Increased ventilation", "Added shade cloth"],
    completedAt: "Jan 14, 2026",
    outcome: "Success - Temperature stabilized within 4 hours",
  },
  {
    id: "h2",
    severity: "critical" as const,
    title: "Critical: Water Level Low",
    system: "Main System",
    currentValue: "65%",
    targetValue: "> 85%",
    description: "Water level dropped significantly due to evaporation.",
    steps: ["Topped up system", "Installed automatic top-off"],
    completedAt: "Jan 12, 2026",
    outcome: "Success - Automatic top-off system now maintains level",
  },
]

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState(initialRecommendations)
  const [completed, setCompleted] = useState<string[]>([])

  const handleMarkDone = (id: string) => {
    setCompleted([...completed, id])
    setRecommendations(recommendations.filter((r) => r.id !== id))
  }

  const handleDismiss = (id: string) => {
    setRecommendations(recommendations.filter((r) => r.id !== id))
  }

  const handleSnooze = (id: string) => {
    setRecommendations(recommendations.filter((r) => r.id !== id))
  }

  const stats = {
    critical: recommendations.filter((r) => r.severity === "critical").length,
    warning: recommendations.filter((r) => r.severity === "warning").length,
    info: recommendations.filter((r) => r.severity === "info").length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">AI Recommendations</h1>
          <p className="text-sm text-muted-foreground">Actionable suggestions to optimize your systems</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <span className="text-sm">{stats.critical} Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-warning" />
            <span className="text-sm">{stats.warning} Warning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span className="text-sm">{stats.info} Suggestions</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="active" className="gap-2">
            <Lightbulb className="h-4 w-4" />
            Active Recommendations
          </TabsTrigger>
          <TabsTrigger value="history" className="gap-2">
            <History className="h-4 w-4" />
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {recommendations.length > 0 ? (
            recommendations.map((rec) => (
              <RecommendationCard
                key={rec.id}
                {...rec}
                onMarkDone={handleMarkDone}
                onDismiss={handleDismiss}
                onSnooze={handleSnooze}
              />
            ))
          ) : (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-success mb-4" />
              <h3 className="text-lg font-semibold mb-2">All caught up!</h3>
              <p className="text-muted-foreground">No active recommendations at this time. Great job!</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          {historyRecommendations.map((rec) => (
            <div key={rec.id} className="rounded-xl border border-border bg-card p-4 opacity-75">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{rec.title}</h3>
                    <span className="text-xs text-muted-foreground">Completed {rec.completedAt}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{rec.system}</p>
                  <p className="text-sm text-success mt-2">{rec.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
