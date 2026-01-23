import { Wifi, BarChart3, Lightbulb } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Wifi,
    title: "Connect Sensors",
    description:
      "Install IoT sensors in your aquaponic system. Our guided setup makes connecting devices simple and quick.",
  },
  {
    step: "02",
    icon: BarChart3,
    title: "Monitor Data",
    description:
      "Watch real-time metrics flow into your dashboard. Track every parameter that matters for healthy growth.",
  },
  {
    step: "03",
    icon: Lightbulb,
    title: "Get Recommendations",
    description: "Receive AI-powered insights and actionable recommendations to optimize your farm's performance.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-y border-border bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get started in three simple steps</h2>
          <p className="mt-4 text-lg text-muted-foreground">From setup to actionable insights in minutes, not hours.</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-1/2 hidden h-px w-full bg-gradient-to-r from-border via-primary/50 to-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-card">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
