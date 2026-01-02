"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar } from "lucide-react"

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
    <section id="experience" className="relative py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-green-500 to-orange-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 ml-12 md:ml-20"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[3.25rem] md:-left-[3.75rem] top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg" />

                <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-3 text-sm text-blue-600 dark:text-blue-400 font-medium">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold mb-3">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
