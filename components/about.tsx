"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, GraduationCap, Target } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="relative py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info Cards */}
            <div className="space-y-6">
              <motion.div
                className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Current Focus
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Data Scientist & AI Engineer specializing in Machine Learning and Deep Learning. Currently contributing to the X-EdTech Platform at XAI Morocco.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Education
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      ENSIASD - Data Science, Big Data & AI
                      <br />
                      <span className="text-sm">Taroudant, Morocco 🇲🇦</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Mission
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Seeking PFE Internship to apply cutting-edge ML/AI skills in a dynamic environment where innovation
                      meets impact.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Code Snippet */}
            <div className="space-y-6">
              <motion.div
                className="p-6 rounded-xl bg-gray-900 dark:bg-slate-950 shadow-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <pre className="text-sm text-green-400 font-mono overflow-x-auto">
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
