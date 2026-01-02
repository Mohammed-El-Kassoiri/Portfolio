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
    <section id="contact" className="relative py-20 px-4 min-h-screen flex items-center" ref={ref}>
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently seeking a PFE internship and open to exciting opportunities in AI and Machine Learning. Let's
            connect and build something amazing together!
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
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-16 h-16 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-slate-700"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">© 2024 Mohammed El Kassoiri. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
