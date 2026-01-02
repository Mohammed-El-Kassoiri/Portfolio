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
    <section id="research" className="section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Research & Publications</h2>

        <div className="space-y-6">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/research/${paper.id}`}>
                <Card className="card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                    {paper.title}
                  </h3>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
