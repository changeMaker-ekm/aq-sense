import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Hobbyist",
    price: "₹50",
    period: "/month",
    description: "Perfect for home aquaponic setups",
    features: ["Up to 4 sensors", "1 system", "7-day data history", "Email alerts", "Basic recommendations"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹250",
    period: "/month",
    description: "For serious growers and small farms",
    features: [
      "Up to 15 sensors",
      "3 systems",
      "90-day data history",
      "Email, SMS & push alerts",
      "AI recommendations",
      "Custom reports",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For commercial operations",
    features: [
      "Unlimited sensors",
      "Unlimited systems",
      "Unlimited data history",
      "All alert channels",
      "Advanced AI insights",
      "API access",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your farming operation. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-xl border bg-card p-8",
                plan.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={cn("w-full", plan.popular ? "bg-primary hover:bg-primary/90" : "")}
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
