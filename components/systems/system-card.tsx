import { cn } from "@/lib/utils"
import { HealthScore } from "@/components/dashboard/health-score"
import { Server, MoreVertical, Wifi, WifiOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface SystemCardProps {
  id: string
  name: string
  type: string
  healthScore: number
  sensorCount: number
  lastUpdate: string
  isOnline: boolean
  thumbnail?: string
}

export function SystemCard({
  id,
  name,
  type,
  healthScore,
  sensorCount,
  lastUpdate,
  isOnline,
  thumbnail,
}: SystemCardProps) {
  return (
    <div className="group relative rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
      {/* Thumbnail/Header */}
      <div className="relative h-32 overflow-hidden rounded-t-xl bg-secondary">
        {thumbnail ? (
          <img src={thumbnail || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Server className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />

        {/* Status indicator */}
        <div
          className={cn(
            "absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium",
            isOnline ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive",
          )}
        >
          {isOnline ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
          {isOnline ? "Online" : "Offline"}
        </div>

        {/* Actions */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 bg-background/50 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/systems/${id}`}>View Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Edit System</DropdownMenuItem>
            <DropdownMenuItem>Run Diagnostics</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Delete System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      <Link href={`/dashboard/systems/${id}`} className="block p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate">{name}</h3>
            <p className="text-sm text-muted-foreground">{type}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <span>{sensorCount} sensors</span>
              <span>Updated {lastUpdate}</span>
            </div>
          </div>
          <HealthScore score={healthScore} size="sm" label="" />
        </div>
      </Link>
    </div>
  )
}
