import { Button } from "@/components/ui/button"
import { Plus, Activity, Lightbulb, RefreshCw } from "lucide-react"

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
        <Plus className="h-4 w-4" />
        Add Reading
      </Button>
      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
        <Activity className="h-4 w-4" />
        Run Diagnostics
      </Button>
      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
        <Lightbulb className="h-4 w-4" />
        View Recommendations
      </Button>
      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
        <RefreshCw className="h-4 w-4" />
        Refresh Data
      </Button>
    </div>
  )
}
