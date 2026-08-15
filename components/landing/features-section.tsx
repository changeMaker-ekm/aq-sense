import { Activity, Bell, Brain, Gauge, History, Settings } from "lucide-react"

const features = [
  { icon: Gauge, title: "Know your conditions", description: "See moisture, temperature, pH, water levels, and more in one calm, readable view." },
  { icon: Bell, title: "Catch problems early", description: "Get a useful alert when a crop needs attention — before a small shift becomes a lost harvest." },
  { icon: Brain, title: "Make the next decision", description: "Turn farm signals into practical recommendations you can use during the day, not after it." },
  { icon: History, title: "Learn from every season", description: "Compare trends and growing cycles to understand what makes your operation thrive." },
  { icon: Activity, title: "Run every site together", description: "Keep a steady pulse on multiple growing spaces without running between dashboards." },
  { icon: Settings, title: "Set it up your way", description: "Configure sensors, thresholds, and routines around how your farm actually works." },
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
