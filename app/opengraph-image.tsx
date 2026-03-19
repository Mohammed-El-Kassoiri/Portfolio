import { ImageResponse } from "next/og"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mohammedelkassoiri.app"
const siteHost = siteUrl.replace(/^https?:\/\//, "")

export const runtime = "edge"

export const alt = "Mohammed El Kassoiri – AI Engineer & Data Scientist"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow accent */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            zIndex: 1,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(59,130,246,0.15)",
              border: "1px solid rgba(59,130,246,0.4)",
              borderRadius: "999px",
              padding: "6px 20px",
              color: "#93c5fd",
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            AI Engineer · Data Scientist · Morocco
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "80px",
              fontWeight: 800,
              color: "#f1f5f9",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Mohammed El Kassoiri
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "26px",
              color: "#94a3b8",
              maxWidth: "860px",
              lineHeight: 1.5,
            }}
          >
            Machine Learning · Deep Learning · Computer Vision · NLP · Agricultural AI
          </div>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
              borderRadius: "2px",
              marginTop: "4px",
            }}
          />

          {/* URL */}
          <div
            style={{
              fontSize: "20px",
              color: "#60a5fa",
              letterSpacing: "0.03em",
            }}
          >
            {siteHost}
          </div>
        </div>
      </div>
    ),
    size
  )
}
