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
    <section id="contact" className="bg-gray-50 py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Get In Touch
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
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
                  className="w-16 h-16 border-2 border-blue-600 rounded-lg bg-white hover:bg-blue-600 transition-all flex items-center justify-center text-blue-600 hover:text-white shadow-sm hover:shadow-md group"
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
          >
            Say Hello 👋
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
