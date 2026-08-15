import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-28 pb-12 lg:pt-36 lg:pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <Leaf className="size-4" /> Built for growers
          </p>
          <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Grow with confidence, <span className="text-primary">not guesswork.</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            AquaSense gives farmers a clear view of what is happening across every bed, tank, and crop — so you can act early and harvest more.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/signup">See your farm clearly <ArrowRight data-icon="inline-end" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#how-it-works"><Play data-icon="inline-start" /> How it works</Link>
            </Button>
          </div>
          <p className="mt-5 font-mono text-xs text-muted-foreground">For small farms, growing teams, and the people who care deeply about both.</p>
        </div>
        <div className="relative min-h-[380px] overflow-hidden border border-primary/20 bg-card shadow-xl lg:min-h-[540px]">
          <img src="/professional-woman-farmer-portrait.jpg" alt="Farmer inspecting a growing system" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-primary-foreground">
            <div><p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/70">Today on the farm</p><p className="mt-1 font-serif text-2xl">12 beds looking good</p></div>
            <div className="border border-primary-foreground/30 bg-foreground/30 px-3 py-2 text-right backdrop-blur-sm"><p className="font-mono text-xs text-primary-foreground/70">Next check</p><p className="font-semibold">in 42 min</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
