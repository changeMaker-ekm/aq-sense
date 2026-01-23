import { Fish } from "lucide-react"

interface FishStockCardProps {
  species: string
  count: number
  avgWeight: string
  lastFed: string
  feedingSchedule: string
  batchId: string
}

export function FishStockCard({ species, count, avgWeight, lastFed, feedingSchedule, batchId }: FishStockCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
            <Fish className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold">{species}</h3>
            <p className="text-sm text-muted-foreground">Batch: {batchId}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Population</p>
          <p className="text-2xl font-bold">{count.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Avg Weight</p>
          <p className="text-2xl font-bold">{avgWeight}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 border-t border-border pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Last Fed</span>
          <span>{lastFed}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Schedule</span>
          <span>{feedingSchedule}</span>
        </div>
      </div>
    </div>
  )
}
