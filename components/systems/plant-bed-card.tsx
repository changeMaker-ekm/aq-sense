import { Leaf, Sprout, CalendarDays } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface PlantBedCardProps {
  name: string
  plantType: string
  count: number
  growthStage: string
  growthProgress: number
  plantedDate: string
  expectedHarvest: string
}

export function PlantBedCard({
  name,
  plantType,
  count,
  growthStage,
  growthProgress,
  plantedDate,
  expectedHarvest,
}: PlantBedCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
            <Leaf className="h-6 w-6 text-success" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{plantType}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">{count}</p>
          <p className="text-xs text-muted-foreground">plants</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Growth Stage</span>
          <span className="font-medium">{growthStage}</span>
        </div>
        <div className="mt-2">
          <Progress value={growthProgress} className="h-2" />
          <p className="mt-1 text-xs text-right text-muted-foreground">{growthProgress}% complete</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 border-t border-border pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1 text-muted-foreground">
            <Sprout className="h-3 w-3" /> Planted
          </span>
          <span>{plantedDate}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1 text-muted-foreground">
            <CalendarDays className="h-3 w-3" /> Harvest
          </span>
          <span>{expectedHarvest}</span>
        </div>
      </div>
    </div>
  )
}
