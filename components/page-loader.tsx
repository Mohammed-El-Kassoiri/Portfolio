"use client"

import { AnimatePresence, motion } from "framer-motion"

export function PageLoader({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="h-20 w-20 rounded-2xl border border-cyan-400/40 bg-cyan-400/10"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.p
              className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-300"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
