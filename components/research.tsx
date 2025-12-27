"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { researchPapers } from "@/lib/research-data"

export function Research() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="research" className="relative py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Research &amp; Publications</span>
            <span className="text-magenta-400">/&gt;</span>
          </h2>

          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <Link href={`/research/${paper.id}`}>
                  <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all p-6 md:p-8 relative overflow-hidden group cursor-pointer">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${paper.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
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
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {paper.title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
