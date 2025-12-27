"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { FileText, ExternalLink, Calendar, Users, Github } from "lucide-react"

interface Publication {
  title: string
  abstract: string
  authors: string
  date: string
  venue: string
  type: string
  highlights: string[]
  tags: string[]
  gradient: string
  paper: string
  github?: string
}

const publications: Publication[] = [
  {
    title:
      "Mapping Water Stress and Agricultural Adaptation Potential Using Multi-Source 16-Band Attention U-Net: Case of Taroudant, Morocco",
    abstract:
      "Water scarcity is a critical challenge in the Souss-Massa region of Morocco. Traditional monitoring methods (field visits) are slow, and standard indices (NDVI) often fail to capture root-zone moisture stress. This project introduces a Multi-Modal Attention U-Net that fuses 16 spectral and environmental bands to precisely segment agricultural areas and map water stress zones.",
    authors: "Mohammed El Kassoiri",
    date: "2024",
    venue: "ResearchGate",
    type: "Research Paper",
    highlights: [
      "Multi-source data fusion (16 bands: optical, radar, SMAP, DEM, slope, precipitation)",
      "Attention U-Net architecture achieving 93.6% accuracy and Mean IoU of 0.81",
      "Weak supervision pipeline developed on Google Earth Engine",
      "Real-world application in Taroudant region water management",
    ],
    tags: [
      "Remote Sensing",
      "Deep Learning",
      "Attention U-Net",
      "Water Stress",
      "Agriculture",
      "Morocco",
      "Sentinel-1",
      "Sentinel-2",
      "SMAP",
      "Google Earth Engine",
    ],
    gradient: "from-amber-400 to-lime-500",
    paper:
      "https://www.researchgate.net/publication/399089388_Mapping_Water_Stress_and_Agricultural_Adaptation_Potential_Using_Multi-Source_16-Band_Attention_U-Net_Case_of_Taroudant_Morocco",
    github:
      "https://github.com/Mohammed-El-Kassoiri/Mapping-Water-Stress-and-Agricultural-Adaptation-Potential",
  },
]

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
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
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
                        <span>{publication.authors}</span>
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
                      <motion.a
                        href={publication.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
                      >
                        <FileText className="w-4 h-4" />
                        <span>View Paper</span>
                      </motion.a>

                      {publication.github && (
                        <motion.a
                          href={publication.github}
                          target="_blank"
                          rel="noopener noreferrer"
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
