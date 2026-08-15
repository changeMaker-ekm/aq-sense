import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "AquaSense for Growers | Grow with confidence",
  description:
    "AquaSense helps growers and farmers monitor every growing space, catch problems early, and make better decisions from one clear view.",
  generator: "v0.app",
  icons: {
    icon: [
      // {
      //   url: "/leaf-icon.png",
      //   media: "(prefers-color-scheme: light)",
      // },
      // {
      //   url: "/leaf-icon.png",
      //   media: "(prefers-color-scheme: dark)",
      // },
      {
        url: "/icons8-hydroponics.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
