"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"
import { useState } from "react"

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const links = [{ href: "#features", label: "Why growers choose us" }, { href: "#how-it-works", label: "How it works" }, { href: "#pricing", label: "Pricing" }]
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary"><Leaf className="size-5 text-primary-foreground" /></div>
          <span className="text-xl font-semibold tracking-tight">AquaSense</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">{links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link>)}</div>
        <div className="hidden items-center gap-3 md:flex"><Button variant="ghost" asChild><Link href="/login">Log in</Link></Button><Button asChild><Link href="/signup">For growers <span aria-hidden="true">→</span></Link></Button></div>
        <button className="rounded-md p-2 md:hidden" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}</button>
      </nav>
      {mobileMenuOpen && <div className="border-t border-border bg-background px-6 py-5 md:hidden"><div className="flex flex-col gap-4">{links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>)}<div className="flex gap-3 pt-2"><Button variant="outline" asChild><Link href="/login">Log in</Link></Button><Button asChild><Link href="/signup">For growers</Link></Button></div></div></div>}
    </header>
  )
}
                            
