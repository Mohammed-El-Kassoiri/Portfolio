"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, GraduationCap, Rocket, Code2 } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.div
                className="card p-6 hover:-translate-y-1 transition-transform duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Current Focus
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Data Scientist & AI Engineer specializing in Machine Learning and Deep Learning. Currently contributing to the X-EdTech Platform at XAI Morocco.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="card p-6 hover:-translate-y-1 transition-transform duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Education
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      ENSIASD - Data Science, Big Data & AI
                      <br />
                      <span className="text-sm text-gray-500">Taroudant, Morocco 🇲🇦</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="card p-6 hover:-translate-y-1 transition-transform duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Rocket className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Seeking PFE Internship to apply cutting-edge ML/AI skills in a dynamic environment where innovation meets impact.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <Code2 className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Code Snippet</h3>
                </div>
                <pre className="text-sm text-gray-700 font-mono overflow-x-auto bg-gray-50 p-4 rounded-lg">
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
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
