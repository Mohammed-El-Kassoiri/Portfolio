"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Terminal, Sparkles, Zap } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center gap-2">
                <span>🎯</span>
                Current Focus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Data Scientist & AI Engineer specializing in Machine Learning and Deep Learning. Currently contributing to the X-EdTech Platform at XAI Morocco.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3 flex items-center gap-2">
                <span>🎓</span>
                Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ENSIASD - Data Science, Big Data & AI
                <br />
                <span className="text-sm">Taroudant, Morocco 🇲🇦</span>
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3 flex items-center gap-2">
                <span>🚀</span>
                Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seeking PFE Internship to apply cutting-edge ML/AI skills in a dynamic environment where innovation meets impact.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6 bg-gray-50">
              <pre className="text-sm text-green-600 font-mono overflow-x-auto">
{`class AI:
  def __init__(self):
      self.name = "Mohammed El Kassoiri"
      self.role = "Data Scientist 
                          & AI Engineer"
      self.location = "Morocco 🇲🇦"
      self.focus = [
         "Machine Learning",
          "Deep Learning",
          "Data Science",
          "NLP"
      ]
    
  def say_hi(self):
      print("Let's build the future!")

me = AI()
me.say_hi()`}
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
