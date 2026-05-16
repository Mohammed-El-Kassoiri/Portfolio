"use client"

import { motion } from "framer-motion"
import { ExternalLink, ShieldCheck } from "lucide-react"
import { useTheme } from "next-themes"
import { useMounted } from "@/hooks/use-mounted"
import { SectionHeader } from "@/components/section-header"

const certs = [
  {
    name: "Deep Learning Specialization",
    issuer: "Online Professional Program",
    link: "https://www.coursera.org/",
  },
  {
    name: "Machine Learning Engineering Foundations",
    issuer: "Industry-focused Training",
    link: "https://www.coursera.org/",
  },
  {
    name: "Data Science & Analytics",
    issuer: "Applied AI Curriculum",
    link: "https://www.coursera.org/",
  },
]

export function Certifications() {
  const { theme } = useTheme()
  const mounted = useMounted()
  const isCyber = mounted && theme === "cyber"

  return (
    <section id="certifications" className="section-container">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Verified growth"
          title="Certifications"
          isCyber={isCyber}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {certs.map((cert, idx) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group rounded-2xl border p-6 backdrop-blur transition ${
                isCyber
                  ? "border-red-900/50 bg-black/50 hover:border-red-600/60"
                  : "border-slate-700/60 bg-slate-900/50 hover:border-cyan-400/40"
              }`}
            >
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{cert.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                Verification link <ExternalLink className="h-4 w-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
