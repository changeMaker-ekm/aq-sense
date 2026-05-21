import Link from "next/link"
import { Droplets, Github, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  // Product: [
  //   { name: "Features", href: "#features" },
  //   { name: "Pricing", href: "#pricing" },
  //   // { name: "API", href: "/api" },
  //   { name: "Integrations", href: "/integrations" },
  // ],
  // Company: [
  //   // { name: "About", href: "/about" },
  //   // { name: "Blog", href: "/blog" },
  //   // { name: "Careers", href: "/careers" },
  //   { name: "Contact", href: "/contact" },
  // ],
  // Resources: [
  //   { name: "Documentation", href: "/docs" },
  //   { name: "Help Center", href: "/help" },
  //   { name: "Community", href: "/community" },
  //   { name: "Status", href: "/status" },
  // ],
  // Legal: [
  //   { name: "Privacy", href: "/privacy" },
  //   { name: "Terms", href: "/terms" },
  //   { name: "Security", href: "/security" },
  // ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Droplets className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">AquaSense</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Intelligent IoT monitoring for aquaponic farming. Transform data into healthier harvests.
            </p>
            <div className="mt-6 flex gap-4">
              {/* <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link> */}
              {/* <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link> */}
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold">{category}</h3>
              <ul className="space-y-3">
                {/* {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))} */}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AquaSense IoT. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Made with care for sustainable farming</p>
        </div>
      </div>
    </footer>
  )
}
