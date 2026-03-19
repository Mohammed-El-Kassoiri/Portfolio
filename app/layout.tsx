import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const siteUrl = "https://mohammed-el-kassoiri.vercel.app"

export const metadata: Metadata = {
  title: {
    default: "Mohammed El Kassoiri | AI Engineer & Data Scientist",
    template: "%s | Mohammed El Kassoiri",
  },
  description:
    "AI Engineer & Data Scientist from Morocco specializing in Machine Learning, Deep Learning, Computer Vision, NLP, and Agricultural AI. Building intelligent systems that make a real difference.",
  keywords: [
    "Mohammed El Kassoiri",
    "AI Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Natural Language Processing",
    "PyTorch",
    "TensorFlow",
    "Python",
    "Portfolio",
    "Morocco",
    "AI Engineer Morocco",
    "Data Scientist Morocco",
    "Agricultural AI",
    "Remote Sensing",
    "Satellite Image Analysis",
    "Attention U-Net",
    "Water Stress Mapping",
    "Artificial Intelligence",
    "Fraud Detection",
    "Darija NLP",
    "Robot Arm",
  ],
  authors: [
    {
      name: "Mohammed El Kassoiri",
      url: "https://github.com/Mohammed-El-Kassoiri",
    },
  ],
  creator: "Mohammed El Kassoiri",
  publisher: "Mohammed El Kassoiri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mohammed El Kassoiri | AI Engineer & Data Scientist",
    title: "Mohammed El Kassoiri | AI Engineer & Data Scientist",
    description:
      "AI Engineer & Data Scientist from Morocco specializing in Machine Learning, Deep Learning, Computer Vision, NLP, and Agricultural AI.",
    images: [
      {
        url: `${siteUrl}/apple-icon.png`,
        width: 180,
        height: 180,
        alt: "Mohammed El Kassoiri – AI Engineer & Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mohammed El Kassoiri | AI Engineer & Data Scientist",
    description:
      "AI Engineer & Data Scientist from Morocco specializing in Machine Learning, Deep Learning, Computer Vision, NLP, and Agricultural AI.",
    images: [`${siteUrl}/apple-icon.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
  generator: "Next.js",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammed El Kassoiri",
  url: siteUrl,
  jobTitle: "AI Engineer & Data Scientist",
  description:
    "AI Engineer & Data Scientist from Morocco specializing in Machine Learning, Deep Learning, Computer Vision, NLP, and Agricultural AI.",
  sameAs: [
    "https://github.com/Mohammed-El-Kassoiri",
    "https://linkedin.com/in/Mohammed-El-Kassoiri",
  ],
  knowsAbout: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Python",
    "PyTorch",
    "TensorFlow",
    "Agricultural AI",
    "Remote Sensing",
  ],
  nationality: "Moroccan",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
