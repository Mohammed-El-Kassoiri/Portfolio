"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-8 ml-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-33px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />

              <div className="card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-600 mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
