import { cn } from "@/lib/utils"
import { CheckCircle, AlertCircle, Settings, Droplets, Fish, Leaf } from "lucide-react"

interface Activity {
  id: string
  type: "success" | "alert" | "config" | "water" | "fish" | "plant"
  message: string
  time: string
}

interface ActivityFeedProps {
  activities: Activity[]
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  const typeConfig = {
    success: { icon: CheckCircle, color: "text-success", bgColor: "bg-success/10" },
    alert: { icon: AlertCircle, color: "text-destructive", bgColor: "bg-destructive/10" },
    config: { icon: Settings, color: "text-muted-foreground", bgColor: "bg-muted" },
    water: { icon: Droplets, color: "text-primary", bgColor: "bg-primary/10" },
    fish: { icon: Fish, color: "text-accent", bgColor: "bg-accent/10" },
    plant: { icon: Leaf, color: "text-success", bgColor: "bg-success/10" },
  }

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <h3 className="font-semibold">Recent Activity</h3>
      </div>
      <div className="max-h-80 overflow-y-auto">
        <div className="relative px-4 py-2">
          {/* Timeline line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-border" />

          {activities.map((activity, index) => {
            const config = typeConfig[activity.type]
            const Icon = config.icon
            return (
              <div key={activity.id} className="relative flex gap-3 py-3">
                <div className={cn("relative z-10 rounded-full p-1.5", config.bgColor)}>
                  <Icon className={cn("h-3 w-3", config.color)} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
