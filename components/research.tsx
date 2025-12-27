"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { FileText, ExternalLink, Calendar, Users, Github } from "lucide-react"
import { getAllResearchPapers } from "@/lib/research-data"

const publications = getAllResearchPapers()

export function Research() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="research" className="relative py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Research &amp; Publications</span>
            <span className="text-magenta-400">/&gt;</span>
          </h2>

          <div className="space-y-8">
            {publications.map((publication, index) => (
              <Link href={`/research/${publication.id}`} key={publication.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                  className="cursor-pointer"
                >
                  <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all p-6 md:p-8 relative overflow-hidden group">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${publication.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Publication Type Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-mono bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 rounded">
                        {publication.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {publication.title}
                    </h3>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-cyan-400" />
                        <span>
                          {publication.authors
                            .map((a) => a.name)
                            .join(", ")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>{publication.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-cyan-400" />
                        <span>{publication.venue}</span>
                      </div>
                    </div>

                    {/* Abstract */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                        Abstract
                      </h4>
                      <p className="text-white/90 leading-relaxed">
                        {publication.abstract}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {publication.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              delay: index * 0.2 + i * 0.1,
                            }}
                            className="text-sm text-white/90 flex items-start gap-2"
                          >
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {publication.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 text-xs font-mono border border-cyan-400/30 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      <motion.div
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
                      >
                        <FileText className="w-4 h-4" />
                        <span>View Details</span>
                      </motion.div>

                      <motion.a
                        href={publication.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>External Link</span>
                      </motion.a>

                      {publication.githubUrl && (
                        <motion.a
                          href={publication.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05, x: 2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
