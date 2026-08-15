import { Activity, Bell, Droplets, Leaf, ShieldCheck, Timer } from "lucide-react"

const features = [
  { icon: ShieldCheck, title: "Protect every crop", description: "Know when conditions drift before stress becomes visible. Early warnings help you save plants, time, and yield." },
  { icon: Droplets, title: "Use water wisely", description: "See where water is going across beds and zones, then fine-tune irrigation with confidence instead of guesswork." },
  { icon: Timer, title: "Save your best hours", description: "Replace repetitive checks with one clear view of what needs attention now and what can wait until tomorrow." },
  { icon: Activity, title: "Read the whole farm", description: "Bring climate, water quality, and system health together so one change never surprises you somewhere else." },
  { icon: Leaf, title: "Make decisions in context", description: "Turn raw sensor readings into practical recommendations that fit the crop stage and your growing plan." },
  { icon: Bell, title: "Stay ahead from anywhere", description: "Get the right alert at the right moment, whether you are in the field, the packing shed, or away from the farm." },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-y border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">The grower advantage</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">A clearer day on the farm starts with better signals.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Everything you need to turn live farm data into healthier crops and steadier operations.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="bg-card p-6 transition-colors hover:bg-background">
              <feature.icon className="size-6 text-primary" />
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
                            
