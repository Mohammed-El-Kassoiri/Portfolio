import type { MetadataRoute } from "next"
import { researchPapers } from "@/lib/research-data"

const siteUrl = "https://mohammed-el-kassoiri.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const researchRoutes = researchPapers.map((paper) => ({
    url: `${siteUrl}/research/${paper.id}`,
    lastModified: new Date(paper.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...researchRoutes,
  ]
}
