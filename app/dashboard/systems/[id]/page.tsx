import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { HealthScore } from "@/components/dashboard/health-score"
import { MetricCard } from "@/components/dashboard/metric-card"
import { SensorRow } from "@/components/systems/sensor-row"
import { FishStockCard } from "@/components/systems/fish-stock-card"
import { PlantBedCard } from "@/components/systems/plant-bed-card"
import { ArrowLeft, Settings, RefreshCw, Download, Droplets, Thermometer, Waves, Gauge, Wifi, Zap } from "lucide-react"
import Link from "next/link"

const systemMetrics = [
  {
    title: "pH Level",
    value: "6.8",
    unit: "pH",
    icon: Droplets,
    status: "normal" as const,
    range: { min: 6.0, max: 8.0, current: 6.8 },
  },
  {
    title: "Dissolved Oxygen",
    value: "7.2",
    unit: "mg/L",
    icon: Waves,
    status: "normal" as const,
    range: { min: 5.0, max: 10.0, current: 7.2 },
  },
  {
    title: "Water Temp",
    value: "24.5",
    unit: "°C",
    icon: Thermometer,
    status: "normal" as const,
    range: { min: 20, max: 30, current: 24.5 },
  },
  {
    title: "Ammonia",
    value: "0.3",
    unit: "ppm",
    icon: Gauge,
    status: "normal" as const,
    range: { min: 0, max: 2.0, current: 0.3 },
  },
]

const sensors = [
  {
    id: "1",
    name: "pH Sensor #1",
    type: "Atlas Scientific pH",
    icon: Droplets,
    value: "6.8",
    unit: "pH",
    status: "online" as const,
    battery: 85,
    signal: 92,
    lastCalibrated: "2 days ago",
  },
  {
    id: "2",
    name: "DO Sensor #1",
    type: "Atlas Scientific DO",
    icon: Waves,
    value: "7.2",
    unit: "mg/L",
    status: "online" as const,
    battery: 72,
    signal: 88,
    lastCalibrated: "5 days ago",
  },
  {
    id: "3",
    name: "Temperature Probe #1",
    type: "DS18B20",
    icon: Thermometer,
    value: "24.5",
    unit: "°C",
    status: "online" as const,
    battery: 95,
    signal: 96,
    lastCalibrated: "1 week ago",
  },
  {
    id: "4",
    name: "Ammonia Sensor #1",
    type: "NH3 Probe",
    icon: Gauge,
    value: "0.3",
    unit: "ppm",
    status: "warning" as const,
    battery: 18,
    signal: 75,
    lastCalibrated: "3 weeks ago",
  },
  {
    id: "5",
    name: "Flow Meter #1",
    type: "Hall Effect Sensor",
    icon: Wifi,
    value: "12.5",
    unit: "L/min",
    status: "online" as const,
    signal: 90,
    lastCalibrated: "1 month ago",
  },
  {
    id: "6",
    name: "Power Monitor",
    type: "Energy Meter",
    icon: Zap,
    value: "245",
    unit: "W",
    status: "online" as const,
    signal: 98,
  },
]

export default function SystemDetailPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/systems">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Main Grow Bed</h1>
            <p className="text-sm text-muted-foreground">Deep Water Culture (DWC) • 8 sensors</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-xl border border-border bg-card p-6 lg:col-span-1">
          <HealthScore score={92} size="md" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
          {systemMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sensors">Sensors</TabsTrigger>
          <TabsTrigger value="fish">Fish Stock</TabsTrigger>
          <TabsTrigger value="plants">Plants</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Fish Summary */}
            <FishStockCard
              species="Tilapia"
              count={250}
              avgWeight="450g"
              lastFed="2 hours ago"
              feedingSchedule="Every 6 hours"
              batchId="TL-2024-001"
            />

            {/* Plant Summary */}
            <PlantBedCard
              name="Bed A - Lettuce"
              plantType="Butterhead Lettuce"
              count={120}
              growthStage="Mature"
              growthProgress={85}
              plantedDate="Dec 15, 2025"
              expectedHarvest="Jan 20, 2026"
            />
          </div>
        </TabsContent>

        <TabsContent value="sensors" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Connected Sensors</h2>
            <Button size="sm" className="gap-2 bg-primary">
              Add Sensor
            </Button>
          </div>
          <div className="space-y-3">
            {sensors.map((sensor) => (
              <SensorRow key={sensor.id} {...sensor} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fish" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Fish Stock Management</h2>
            <Button size="sm" className="gap-2 bg-primary">
              Add Batch
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FishStockCard
              species="Tilapia"
              count={250}
              avgWeight="450g"
              lastFed="2 hours ago"
              feedingSchedule="Every 6 hours"
              batchId="TL-2024-001"
            />
            <FishStockCard
              species="Tilapia (Juvenile)"
              count={500}
              avgWeight="85g"
              lastFed="1 hour ago"
              feedingSchedule="Every 4 hours"
              batchId="TL-2024-002"
            />
          </div>
        </TabsContent>

        <TabsContent value="plants" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Plant Beds</h2>
            <Button size="sm" className="gap-2 bg-primary">
              Add Bed
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PlantBedCard
              name="Bed A"
              plantType="Butterhead Lettuce"
              count={120}
              growthStage="Mature"
              growthProgress={85}
              plantedDate="Dec 15, 2025"
              expectedHarvest="Jan 20, 2026"
            />
            <PlantBedCard
              name="Bed B"
              plantType="Romaine Lettuce"
              count={100}
              growthStage="Vegetative"
              growthProgress={45}
              plantedDate="Jan 1, 2026"
              expectedHarvest="Feb 10, 2026"
            />
            <PlantBedCard
              name="Bed C"
              plantType="Basil"
              count={80}
              growthStage="Seedling"
              growthProgress={20}
              plantedDate="Jan 10, 2026"
              expectedHarvest="Feb 25, 2026"
            />
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Event History</h2>
            <p className="text-muted-foreground">System event log and historical data will appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
