import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, MessageCircle, Video, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Getting Started",
    description: "Learn the basics of setting up your aquaponic monitoring system",
    icon: BookOpen,
    articles: 8,
  },
  {
    title: "Sensors & Devices",
    description: "Installation, calibration, and troubleshooting guides",
    icon: BookOpen,
    articles: 15,
  },
  {
    title: "Alerts & Notifications",
    description: "Configure and manage your alert settings",
    icon: BookOpen,
    articles: 6,
  },
  {
    title: "Best Practices",
    description: "Optimize your aquaponic system for best results",
    icon: BookOpen,
    articles: 12,
  },
]

const popularArticles = [
  { title: "How to calibrate your pH sensor", category: "Sensors" },
  { title: "Understanding the nitrogen cycle", category: "Best Practices" },
  { title: "Setting up alert thresholds", category: "Alerts" },
  { title: "Connecting your first sensor", category: "Getting Started" },
  { title: "Troubleshooting offline sensors", category: "Sensors" },
]

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Help & Support</h1>
        <p className="text-sm text-muted-foreground">Find answers and get help with AquaSense</p>
      </div>

      {/* Search */}
      <div className="relative max-w-2xl">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search for help articles..." className="h-14 pl-12 text-lg bg-secondary/50" />
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Documentation</h3>
          <p className="text-sm text-muted-foreground mb-4">Browse our comprehensive guides</p>
          <Button variant="outline" className="w-full bg-transparent">
            View Docs
          </Button>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Video className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Video Tutorials</h3>
          <p className="text-sm text-muted-foreground mb-4">Watch step-by-step video guides</p>
          <Button variant="outline" className="w-full bg-transparent">
            Watch Videos
          </Button>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Contact Support</h3>
          <p className="text-sm text-muted-foreground mb-4">Get help from our support team</p>
          <Button className="w-full bg-primary">Contact Us</Button>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Browse by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="#"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-secondary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{category.articles} articles</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Popular Articles</h2>
        <div className="rounded-xl border border-border bg-card divide-y divide-border">
          {popularArticles.map((article) => (
            <Link
              key={article.title}
              href="#"
              className="flex items-center justify-between p-4 transition-colors hover:bg-secondary/30"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span>{article.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{article.category}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
