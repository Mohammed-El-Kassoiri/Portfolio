"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Robot Arm Object Sorting System",
    description:
      "Real-time object detection and automated sorting system using advanced CV algorithms for color sorting.",
    tags: ["Python", "OpenCV", "Tkinter","Arduino", "Computer Vision"],
    highlights: [
      "Real-time object detection",
      "Automated sorting & tracking",
      "Environmental impact focus",
      "High accuracy sorting by color",
    ],
    gradient: "from-cyan-400 to-blue-500",
    github: "https://github.com/yourusername/robot-arm-sorting",
  },
  {
    title: "English to Darija Translation",
    description:
      "Neural translation system bridging English and Moroccan Darija using state-of-the-art NLP techniques.",
    tags: ["NLP", "Neural Networks", "Transformers", "Deep Learning"],
    highlights: [
      "Multilingual NLP processing",
      "Neural translation models",
      "Cultural bridge technology",
      "Research innovation",
    ],
    gradient: "from-magenta-400 to-purple-500",
    github: "https://github.com/yourusername/english-darija-translation",
  },
  {
    title: "Letterboxd Movie Analytics & Recommendation System",
    description:
      "Analyzed Letterboxd user data and built a personalized movie recommendation system that suggests unseen films by combining past ratings with movie content.",
    tags: ["Data Science","Python", "NLP", "Scikit-learn", 
    "TF-IDF + cosine similarity","LDA","SVD"],
    highlights: [
     "Letterboxd Movie Analytics",
     "Personalized Recommendation System",
     "User Behavior & Movie Content Analysis",
     "Fast & Scalable API",
    ],
    gradient: "from-green-400 to-emerald-500",
    github: "https://github.com/yourusername/fraud-detection-api",
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="relative py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Featured Projects</span>
            <span className="text-magenta-400">/&gt;</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -15,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                <Card className="h-full border-cyan-400/30 bg-black/50 backdrop-blur-sm hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all p-6 relative overflow-hidden group">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
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
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white text-sm mb-4 leading-relaxed">{project.description}</p>

                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="text-xs text-white flex items-start gap-2"
                        >
                          <span className="text-cyan-400">▹</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2 py-1 text-xs font-mono border border-cyan-400/30 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-mono border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </motion.a>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-mono border border-magenta-400/50 text-magenta-400 rounded hover:bg-magenta-400/20 hover:border-magenta-400 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </motion.button>
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
