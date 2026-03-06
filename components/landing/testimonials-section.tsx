import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "AquaSense has completely transformed how I manage my farm. The real-time alerts have saved my fish stock multiple times.",
    author: "Eileen",
    role: "Urban Farmer, GreenGrow",
    avatar: "/professional-woman-farmer-portrait.jpg",
  },
  // {
  //   quote:
  //     "It's like having an expert aquaponics consultant available 24/7.",
  //   author: "James Mathew",
  //   role: "Agricultural Researcher",
  //   avatar: "/professional-man-scientist-portrait.jpg",
  // },
  {
    quote: "We've increased our yield by 20% since implementing AquaSense across our commercial operation.",
    author: "Anu Menon",
    role: "Operations Director, AquaFarms Inc",
    avatar: "/professional-woman-portrait.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by farmers worldwide</h2>
          <p className="mt-4 text-lg text-muted-foreground">See what our community of growers has to say.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="relative rounded-xl border border-border bg-card p-6">
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="mb-6 text-muted-foreground">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
