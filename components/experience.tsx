"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building2 } from "lucide-react"

const experiences = [
  {
    title: "Stagiaire Data Science & Machine Learning",
    company: "XAI Morocco",
    period: "Août 2025 - Octobre 2025",
    description:
      "Contribution au développement de la plateforme X-EdTech, un écosystème éducatif intégrant plusieurs modules IA.",
    highlights: [
      "X-Forms: Génération automatique de formulaires intelligents",
      "X-Quiz: Création intelligente de questions d'évaluation",
      "X-Table: Visualisation avancée et analyse des données éducatives",
    ],
    tags: ["Data Science", "Machine Learning", "IA", "EdTech"],
  },
]

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="relative py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-100">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-16 md:-left-[4.5rem] top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50" />

                {/* Experience card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 shadow-xl ml-8 md:ml-0"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-400 font-medium mb-2">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-400 font-medium bg-slate-700/50 px-4 py-2 rounded-lg whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="text-sm text-slate-300 flex items-start gap-3"
                      >
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
