import { BarChart3, Bell, Cable } from "lucide-react"

const steps = [
  { icon: Cable, title: "Connect your farm", description: "Bring in the sensors you already use across beds, tanks, greenhouses, and fields with a guided setup." },
  { icon: BarChart3, title: "See what is changing", description: "A simple dashboard turns live conditions and longer-term trends into a shared picture for your whole team." },
  { icon: Bell, title: "Act before it costs you", description: "Receive focused alerts and practical next steps when a crop, zone, or system needs your attention." },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">From signal to action</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">Your growing day, with fewer unknowns.</h2>
          <p className="mt-4 text-lg text-muted-foreground">AquaSense fits around the way you already work—without adding another complicated system to manage.</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="relative rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><step.icon className="size-6" /></div>
                <span className="font-mono text-sm text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
                            
