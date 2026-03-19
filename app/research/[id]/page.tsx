import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getResearchPaperById, researchPapers } from "@/lib/research-data"
import ResearchDetailClient from "./ResearchDetailClient"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return researchPapers.map((paper) => ({ id: paper.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const paper = getResearchPaperById(id)

  if (!paper) {
    return {
      title: "Research Paper Not Found",
    }
  }

  const siteUrl = "https://mohammed-el-kassoiri.vercel.app"
  const pageUrl = `${siteUrl}/research/${paper.id}`

  return {
    title: paper.title,
    description: paper.abstract.slice(0, 200) + "…",
    keywords: [
      paper.title,
      paper.authors,
      paper.venue,
      "Research Paper",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Remote Sensing",
      "Agricultural AI",
      "Water Stress",
      "Morocco",
      "Mohammed El Kassoiri",
    ],
    authors: [{ name: paper.authors }],
    openGraph: {
      type: "article",
      url: pageUrl,
      title: paper.title,
      description: paper.abstract.slice(0, 200) + "…",
      publishedTime: paper.date,
      authors: [paper.authors],
      siteName: "Mohammed El Kassoiri | AI Engineer & Data Scientist",
    },
    twitter: {
      card: "summary_large_image",
      title: paper.title,
      description: paper.abstract.slice(0, 200) + "…",
    },
    alternates: {
      canonical: pageUrl,
    },
  }
}

export default async function ResearchDetailPage({ params }: Props) {
  const { id } = await params
  const paper = getResearchPaperById(id)

  if (!paper) {
    notFound()
  }

  return <ResearchDetailClient paper={paper} />
}

