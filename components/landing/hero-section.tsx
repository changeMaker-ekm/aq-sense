import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Play, Sprout } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
            <Sprout className="size-4" />
            Built for growers who do more with less
          </div>
          <h1 className="max-w-xl text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Spend less time guessing. <span className="text-primary">Grow with confidence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            AquaSense brings your crop, water, and climate signals into one calm workspace—so you can catch problems early, protect every harvest, and make the next right call.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/signup">
                Start growing smarter
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#how-it-works">
                <Play data-icon="inline-start" />
                See how it works
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {["No hardware lock-in", "Setup in under an hour", "Built for real farm days"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="size-4 text-primary" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
            <img src="/aquaponic-grow-bed-with-plants.jpg" alt="Lush aquaponic grow beds with healthy plants" className="aspect-[4/3] w-full object-cover" />
            <div className="grid grid-cols-3 border-t border-border bg-card">
              {[['24/7', 'Live visibility'], ['18%', 'Less water waste'], ['1 place', 'For every signal']].map(([value, label]) => (
                <div key={label} className="border-r border-border px-3 py-4 last:border-r-0 sm:px-5">
                  <p className="text-lg font-semibold text-primary">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-background p-4 shadow-xl sm:block">
            <p className="text-xs font-medium text-muted-foreground">Today&apos;s field note</p>
            <p className="mt-1 text-sm font-semibold">Water quality is right on target</p>
            <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-muted"><div className="h-full w-[88%] rounded-full bg-primary" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
                            
