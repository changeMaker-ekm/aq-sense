import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-border bg-card p-8 lg:p-14">
          <Quote className="size-10 text-primary/50" />
          <blockquote className="mt-6 max-w-4xl text-2xl font-medium leading-relaxed text-balance sm:text-3xl">“AquaSense gives my team the confidence to focus on the crop instead of chasing readings. We see issues earlier, waste less water, and finish the day knowing what matters next.”</blockquote>
          <div className="mt-8 flex items-center gap-3">
            <Avatar className="size-11"><AvatarImage src="/professional-woman-farmer-portrait.jpg" alt="Eileen, urban farmer" /><AvatarFallback>EW</AvatarFallback></Avatar>
            <div><p className="font-semibold">Eileen W.</p><p className="text-sm text-muted-foreground">Urban farmer, GreenGrow</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
                            
