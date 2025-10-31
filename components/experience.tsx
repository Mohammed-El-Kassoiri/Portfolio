"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const experiences = [
  {
    title: "PFA Internship",
    company: "XAI Morocco",
    period: "Aug 2025 - Oct 2025",
    description: "Developing X-EdTech Platform - an AI-powered educational ecosystem",
    highlights: [
      "X-Forms: Dynamic form creation with AI-powered field suggestions",
      "X-Quiz: Intelligent assessment builder with auto-generated questions",
      "X-Table: Smart data visualization for educational analytics",
      "X-Survey: Advanced survey system with NLP-powered response analysis",
      "X-Classroom: Integrated virtual classroom hub",
    ],
    tags: ["AI", "EdTech", "Full Stack", "Data Analytics"],
    color: "cyan",
  },
]

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="relative py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Experience</span>
            <span className="text-magenta-400">/&gt;</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-magenta-500 to-green-400" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-12 md:mb-16"
              >
                <div className="md:flex md:items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:order-2"}`}>
                    <div className="border border-cyan-400/30 p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:border-cyan-400 transition-all ml-8 md:ml-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-cyan-400 font-mono">{exp.period}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-magenta-400 font-mono mb-3">{exp.company}</p>
                      <p className="text-white mb-4">{exp.description}</p>

                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-white flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-mono border border-cyan-400/30 text-cyan-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
