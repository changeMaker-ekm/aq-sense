import { cn } from "@/lib/utils"
import { Droplets, Fish, Leaf, ThermometerSun, Waves, Zap } from "lucide-react"

const bentoItems = [
  {
    icon: Droplets,
    title: "Water that works",
    description: "Keep every growing system in balance with live water quality signals and clear thresholds.",
    className: "lg:col-span-2 lg:row-span-1",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: ThermometerSun,
    title: "Microclimates mapped",
    description: "Understand the conditions shaping each bed, greenhouse, and growing zone.",
    className: "lg:col-span-1 lg:row-span-2",
    gradient: "from-accent/20 to-transparent",
  },
  {
    icon: Fish,
    title: "Fish Health",
    description: "Track feeding schedules, stock levels, and health indicators for your aquatic life.",
    className: "lg:col-span-1 lg:row-span-1",
    gradient: "from-success/20 to-transparent",
  },
  {
    icon: Leaf,
    title: "Plant Growth",
    description: "Monitor growth stages, nutrient levels, and harvest timing for maximum yield.",
    className: "lg:col-span-1 lg:row-span-1",
    gradient: "from-success/20 to-transparent",
  },
  {
    icon: Waves,
    title: "Water Quality",
    description: "Comprehensive dissolved oxygen and ammonia monitoring for a balanced ecosystem.",
    className: "lg:col-span-1 lg:row-span-1",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Get notified immediately when any parameter needs attention.",
    className: "lg:col-span-1 lg:row-span-1",
    gradient: "from-accent/20 to-transparent",
  },
]

export function BentoGridSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Complete ecosystem monitoring</h2>
          <p className="mt-4 text-lg text-muted-foreground">Every metric that matters, all in one place.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-3">
          {bentoItems.map((item) => (
            <div
              key={item.title}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50",
                item.className,
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", item.gradient)} />
              <div className="relative">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background/80 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
