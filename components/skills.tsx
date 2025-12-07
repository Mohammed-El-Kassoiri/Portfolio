"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Brain,
  Code2,
  Database,
  Eye,
  MessageSquare,
  BarChart3,
  FileCode,
  Boxes,
  Wrench,
} from "lucide-react"

const skillCategories = [
  {
    title: "AI & Deep Learning",
    color: "cyan",
    skills: [
      { name: "Machine Learning", icon: Brain },
      { name: "Deep Learning", icon: Brain },
      { name: "Transformers", icon: Brain },
      { name: "Hugging Face", icon: Brain },
      { name: "Computer Vision", icon: Eye },
      { name: "NLP", icon: MessageSquare },
    ],
  },
  {
    title: "Programming",
    color: "magenta",
    skills: [
      { name: "Python", icon: FileCode },
      { name: "SQL", icon: Database },
      { name: "JavaScript", icon: Code2 },
      { name: "R", icon: Code2 },
    ],
  },
  {
    title: "Frameworks & APIs",
    color: "green",
    skills: [
      { name: "PyTorch", icon: Boxes },
      { name: "TensorFlow", icon: Boxes },
      { name: "Keras", icon: Boxes },
      { name: "Scikit-learn", icon: Boxes },
      { name: "Flask", icon: Wrench },
      { name: "FastAPI", icon: Wrench },
    ],
  },
  {
    title: "Data & Databases",
    color: "cyan",
    skills: [
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: Database },
      { name: "SciPy", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "SQLite", icon: Database },
    ],
  },
  {
    title: "NLP Stack",
    color: "magenta",
    skills: [
      { name: "NLTK", icon: MessageSquare },
      { name: "spaCy", icon: MessageSquare },
      { name: "Gensim", icon: MessageSquare },
      { name: "TextBlob", icon: MessageSquare },
    ],
  },
  {
    title: "Math & Theory",
    color: "green",
    skills: [
      { name: "Statistics", icon: BarChart3 },
      { name: "Probabilities", icon: BarChart3 },
      { name: "Linear Algebra", icon: BarChart3 },
      { name: "Analysis", icon: BarChart3 },
    ],
  },
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getColorClass = (color: string) => {
    switch (color) {
      case "cyan":
        return "text-cyan-400"
      case "magenta":
        return "text-magenta-400"
      case "green":
        return "text-green-400"
      default:
        return "text-cyan-400"
    }
  }

  return (
    <section id="skills" className="relative py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Skills & Expertise</span>
            <span className="text-magenta-400">/&gt;</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="border border-cyan-400/30 p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:border-cyan-400 transition-all"
              >
                <h3
                  className={`text-xl font-mono mb-6 ${getColorClass(
                    category.color,
                  )}`}
                >
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, i) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + i * 0.1,
                        }}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all group"
                      >
                        <Icon
                          className={`w-8 h-8 ${getColorClass(
                            category.color,
                          )} group-hover:scale-110 transition-transform`}
                        />
                        <span className="text-xs text-gray-300 text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
