"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { FileText } from "lucide-react"
import { researchPapers } from "@/lib/research-data"

export function Research() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="research" className="relative py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-100">
            Research & Publications
          </h2>

          <div className="space-y-6">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/research/${paper.id}`}>
                  <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300 p-6 md:p-8 relative overflow-hidden group cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${paper.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    <div className="relative z-10 flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <FileText className="w-8 h-8 text-blue-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                          {paper.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Click to read more →
                        </p>
                      </div>
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
