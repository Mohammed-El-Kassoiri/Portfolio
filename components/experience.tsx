"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"

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
    <section id="experience" className="section" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>

          <div className="relative">
            {/* Timeline line - left side */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-8 ml-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[34px] top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm" />

                <div className="card p-6 hover:-translate-y-1 transition-transform duration-200">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-sm text-gray-500">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-600 mb-4">{exp.description}</p>

                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="badge"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
