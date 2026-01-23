import { Activity, Bell, Brain, Gauge, History, Settings } from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "Real-time Monitoring",
    description: "Track pH, dissolved oxygen, ammonia, temperature, humidity, and water levels with instant updates.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Multi-channel notifications via email, SMS, or voice call when parameters exceed safe thresholds.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description: "Get intelligent, actionable suggestions to optimize your system based on real-time data analysis.",
  },
  {
    icon: History,
    title: "Historical Analytics",
    description: "Visualize trends, identify patterns, and make data-driven decisions with comprehensive reports.",
  },
  {
    icon: Activity,
    title: "Multi-System Management",
    description: "Monitor multiple farms and systems from a single dashboard with unified control.",
  },
  {
    icon: Settings,
    title: "Device Configuration",
    description: "Easy sensor calibration, firmware updates, and device management with guided wizards.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to grow smarter</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive tools to monitor, analyze, and optimize your aquaponic systems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
