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
    color: "blue",
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
    color: "green",
    skills: [
      { name: "Python", icon: FileCode },
      { name: "SQL", icon: Database },
      { name: "JavaScript", icon: Code2 },
      { name: "R", icon: Code2 },
    ],
  },
  {
    title: "Frameworks & APIs",
    color: "purple",
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
    color: "blue",
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
    color: "green",
    skills: [
      { name: "NLTK", icon: MessageSquare },
      { name: "spaCy", icon: MessageSquare },
      { name: "Gensim", icon: MessageSquare },
      { name: "TextBlob", icon: MessageSquare },
    ],
  },
  {
    title: "Math & Theory",
    color: "purple",
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
      case "blue":
        return "text-blue-600 dark:text-blue-400"
      case "green":
        return "text-green-600 dark:text-green-400"
      case "purple":
        return "text-purple-600 dark:text-purple-400"
      default:
        return "text-blue-600 dark:text-blue-400"
    }
  }

  return (
    <section id="skills" className="relative py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-slate-700"
              >
                <h3
                  className={`text-xl font-semibold mb-6 ${getColorClass(
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
                          duration: 0.4,
                          delay: index * 0.1 + i * 0.05,
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all group"
                      >
                        <Icon
                          className={`w-8 h-8 ${getColorClass(
                            category.color,
                          )}`}
                        />
                        <span className="text-xs text-gray-700 dark:text-gray-300 text-center font-medium">
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
