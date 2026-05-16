"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { useTheme } from "next-themes"
import { useMounted } from "@/hooks/use-mounted"
import { SectionHeader } from "@/components/section-header"

const items = [
  {
    title: "State Engineer in Data Science, Big Data & AI",
    place: "ENSIASD, Taroudant",
    period: "2023 — 2026",
    detail:
      "Advanced engineering program in AI systems, ML pipelines, data engineering, and decision-support analytics.",
  },
  {
    title: "Core Scientific Foundation",
    place: "Morocco",
    period: "Before 2023",
    detail:
      "Strong mathematical and algorithmic background supporting machine learning and research-driven engineering.",
  },
]

export function Education() {
  const { theme } = useTheme()
  const mounted = useMounted()
  const isCyber = mounted && theme === "cyber"

  return (
    <section id="education" className="section-container">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Learning trajectory"
          title="Education"
          isCyber={isCyber}
        />
        <div className="relative ml-4 space-y-6 border-l border-cyan-500/30 pl-8">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl border p-6 backdrop-blur ${
                isCyber
                  ? "border-red-900/50 bg-black/50"
                  : "border-slate-700/60 bg-slate-900/50"
              }`}
            >
              <div className="absolute -left-[46px] mt-1 rounded-full border border-cyan-400/40 bg-cyan-500/10 p-2">
                <GraduationCap className="h-4 w-4 text-cyan-300" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-300">{item.place}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
