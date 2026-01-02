import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohammed El Kassoiri | AI Engineer & Data Scientist",
  description: "AI Engineer & Data Scientist specializing in Machine Learning, Deep Learning, Computer Vision, and NLP",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
