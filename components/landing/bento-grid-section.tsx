import { ArrowUpRight, Droplets, Leaf, LineChart, SunMedium } from "lucide-react"

export function BentoGridSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Built for the growing day</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">The details that keep a harvest moving.</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">See the story behind every reading, from the first morning walk to the last check of the day.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src="/aquaponic-farm-dashboard-with-sensor-metrics-ph-te.jpg" alt="AquaSense farm dashboard showing sensor metrics" className="aspect-[16/8] w-full object-cover" />
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[{ icon: Droplets, title: "Water in context", text: "Compare zones, spot waste, and keep irrigation aligned with crop demand." }, { icon: SunMedium, title: "Climate awareness", text: "Understand how light and temperature shape the conditions in your beds." }, { icon: Leaf, title: "Crop-first insights", text: "Translate readings into actions your team can use in the field." }, { icon: LineChart, title: "Progress over time", text: "Track what is working and build a better plan for the next cycle." }].map((item) => (
            <article key={item.title} className="group rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1">
              <item.icon className="size-6 text-primary" />
              <h3 className="mt-5 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <ArrowUpRight className="mt-6 size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
                            
