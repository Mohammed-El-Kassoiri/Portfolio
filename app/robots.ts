import type { MetadataRoute } from "next"

const siteUrl = "https://mohammed-el-kassoiri.vercel.app"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
