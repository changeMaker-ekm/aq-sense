import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-border bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to grow smarter?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of farmers using AquaSense to optimize their operations. Start your free subscription today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Input type="email" placeholder="Enter your email" className="h-12 bg-background sm:w-80" />
              <Button size="lg" className="h-12 bg-primary hover:bg-primary/90">
                Subscribe to newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            {/* <p className="mt-4 text-sm text-muted-foreground">14-day free trial. No credit card required.</p> */}
          </div>
        </div>
      </div>
    </section>
  )
}
