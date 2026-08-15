import { Button } from "@/components/ui/button"
import { ArrowRight, Sprout } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6"><div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground lg:p-16"><div className="relative max-w-2xl"><Sprout className="size-8" /><h2 className="mt-6 text-3xl font-bold tracking-tight text-balance sm:text-5xl">Make your next growing decision with more confidence.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80">Join growers using AquaSense to protect crops, reduce waste, and build a calmer, more predictable operation.</p><div className="mt-8"><Button size="lg" variant="secondary" asChild><Link href="/signup">Start your free trial <ArrowRight data-icon="inline-end" /></Link></Button></div></div></div></div>
    </section>
  )
}
                            
