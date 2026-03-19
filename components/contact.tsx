"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Mohammed-El-Kassoiri",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/Mohammed-El-Kassoiri",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:mohammed.kassoiri@gmail.com",
    icon: Mail,
  },
]

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="relative py-20 px-6 min-h-screen flex items-center" ref={ref}>
      <div className="container mx-auto max-w-4xl z-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            Get In Touch
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm an AI & Data Engineer open to exciting full-time opportunities in AI, Data Science, and Machine Learning. 
            Let's connect and build something amazing together!
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-16 h-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all flex items-center justify-center text-slate-400 hover:text-blue-400"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </div>

          <motion.a
            href="mailto:mohammed.kassoiri@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-blue-500/30"
          >
            Say Hello 👋
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-slate-700"
          >
            <p className="text-slate-400 text-sm">
              © 2026 Mohammed El Kassoiri. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
