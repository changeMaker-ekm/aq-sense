import { SystemCard } from "@/components/systems/system-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Grid3X3, List } from "lucide-react"

const systems = [
  {
    id: "1",
    name: "Main Grow Bed",
    type: "Deep Water Culture (DWC)",
    healthScore: 92,
    sensorCount: 8,
    lastUpdate: "2 min ago",
    isOnline: true,
    thumbnail: "/aquaponic-grow-bed-with-plants.jpg",
  },
  {
    id: "2",
    name: "Fish Tank A",
    type: "Tilapia Tank",
    healthScore: 78,
    sensorCount: 6,
    lastUpdate: "5 min ago",
    isOnline: true,
    thumbnail: "/fish-tank-with-tilapia.jpg",
  },
  {
    id: "3",
    name: "NFT Channel 1",
    type: "Nutrient Film Technique",
    healthScore: 85,
    sensorCount: 4,
    lastUpdate: "10 min ago",
    isOnline: true,
    thumbnail: "/nft-hydroponic-channel.jpg",
  },
  {
    id: "4",
    name: "Research Lab Tank",
    type: "Experimental Setup",
    healthScore: 45,
    sensorCount: 12,
    lastUpdate: "1 hour ago",
    isOnline: false,
    thumbnail: "/laboratory-aquaponic-research.jpg",
  },
  {
    id: "5",
    name: "Seedling Station",
    type: "Media Bed",
    healthScore: 88,
    sensorCount: 3,
    lastUpdate: "15 min ago",
    isOnline: true,
    thumbnail: "/seedling-growing-station.jpg",
  },
  {
    id: "6",
    name: "Backup System",
    type: "Hybrid",
    healthScore: 95,
    sensorCount: 5,
    lastUpdate: "30 min ago",
    isOnline: true,
    thumbnail: "/backup-aquaponic-system.jpg",
  },
]

export default function SystemsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Systems</h1>
          <p className="text-sm text-muted-foreground">Manage and monitor your aquaponic systems</p>
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          Add System
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search systems..." className="pl-9 bg-secondary/50" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-40 bg-secondary/50">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="offline">Offline</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="name">
          <SelectTrigger className="w-40 bg-secondary/50">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="health">Health Score</SelectItem>
            <SelectItem value="updated">Last Updated</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-1 rounded-lg border border-border p-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 bg-secondary">
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Systems Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {systems.map((system) => (
          <SystemCard key={system.id} {...system} />
        ))}
      </div>
    </div>
  )
}
