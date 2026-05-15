"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { ResearchPaper } from "@/lib/research-data"
import { Download, Github, ExternalLink, Calendar } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useMounted } from "@/hooks/use-mounted"

export default function ResearchDetailClient({ paper }: { paper: ResearchPaper }) {
  const [selectedFigure, setSelectedFigure] = useState<string | null>(null)
  const [showPdfPreview, setShowPdfPreview] = useState(false)
  const { theme } = useTheme()
  const mounted = useMounted()
  const isCyber = mounted && theme === "cyber"
  const pageBg = isCyber ? "bg-black text-red-100" : "bg-slate-950 text-slate-100"
  const cardClass = isCyber
    ? "border-red-900/40 bg-black/50 backdrop-blur-sm"
    : "border-slate-700/60 bg-slate-900/60 backdrop-blur-sm"
  const accentClass = isCyber ? "text-red-400" : "text-blue-400"

  return (
    <div className={`min-h-screen ${pageBg}`}>
      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Back Navigation */}
        <Link
          href="/#research"
          className={`inline-flex items-center gap-2 mb-8 transition-colors ${accentClass}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Research
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className={`${cardClass} p-8 mb-8`}>
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {paper.title}
            </h1>

            {/* Authors and Metadata */}
            <div className={`flex flex-wrap gap-4 mb-6 ${isCyber ? "text-red-200/75" : "text-slate-300"}`}>
              <div className="flex items-center gap-2">
                <span className={`${accentClass} font-semibold`}>Authors:</span>
                <span>{paper.authors}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className={`w-4 h-4 ${accentClass}`} />
                <span>{paper.date}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className={isCyber ? "bg-red-900/20 border border-red-700/50 text-red-300 hover:bg-red-900/30" : "bg-blue-500/20 border border-blue-500/50 text-blue-300 hover:bg-blue-500/30"}
              >
                <a
                  href={paper.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Paper
                </a>
              </Button>

              {paper.pdf && (
                <Button
                  asChild
                  className={isCyber ? "bg-red-900/20 border border-red-700/50 text-red-300 hover:bg-red-900/30" : "bg-blue-500/20 border border-blue-500/50 text-blue-300 hover:bg-blue-500/30"}
                >
                  <a
                    href={paper.pdf}
                    download
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </Button>
              )}

              {paper.github && (
                <Button
                  asChild
                  className={isCyber ? "bg-red-900/20 border border-red-700/50 text-red-300 hover:bg-red-900/30" : "bg-blue-500/20 border border-blue-500/50 text-blue-300 hover:bg-blue-500/30"}
                >
                  <a
                    href={paper.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Abstract Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className={`${cardClass} p-8 mb-8`}>
            <h2 className={`text-2xl font-bold ${accentClass} mb-4`}>Abstract</h2>
            <p className={`${isCyber ? "text-red-200/80" : "text-slate-200"} leading-relaxed text-justify`}>
              {paper.abstract}
            </p>
          </Card>
        </motion.div>

        {/* Figures Section */}
        {paper.figures && paper.figures.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className={`${cardClass} p-8 mb-8`}>
              <h2 className={`text-2xl font-bold ${accentClass} mb-6`}>
                Figures
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paper.figures.map((figure) => (
                  <Dialog
                    key={figure.id}
                    open={selectedFigure === figure.id}
                    onOpenChange={(open) =>
                      setSelectedFigure(open ? figure.id : null)
                    }
                  >
                    <DialogTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="cursor-pointer group"
                      >
                          <div className={`relative aspect-video rounded-lg overflow-hidden mb-3 border transition-colors ${isCyber ? "bg-red-950/20 border-red-900/30 group-hover:border-red-700/50" : "bg-slate-800/50 border-slate-700/50 group-hover:border-blue-500/50"}`}>
                          <Image
                            src={figure.src}
                            alt={figure.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <p className={`text-sm font-mono ${isCyber ? "text-red-200/80" : "text-slate-200"}`}>
                          {figure.caption}
                        </p>
                        {figure.description && (
                          <p className={`text-xs mt-2 ${isCyber ? "text-red-300/60" : "text-slate-400"}`}>
                            {figure.description}
                          </p>
                        )}
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className={`max-w-4xl ${isCyber ? "bg-black border-red-900/40" : "bg-slate-900 border-slate-700/60"}`}>
                      <DialogTitle className={accentClass}>
                        {figure.caption}
                      </DialogTitle>
                      <div className={`relative aspect-video rounded-lg overflow-hidden ${isCyber ? "bg-red-950/20" : "bg-slate-800/50"}`}>
                        <Image
                          src={figure.src}
                          alt={figure.alt}
                          fill
                          className="object-contain"
                          sizes="100vw"
                        />
                      </div>
                      {figure.description && (
                        <p className={`text-sm ${isCyber ? "text-red-200/80" : "text-slate-300"}`}>
                          {figure.description}
                        </p>
                      )}
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {/* PDF Viewer Section */}
        {paper.pdf && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className={`${cardClass} p-8 mb-8`}>
              <h2 className={`text-2xl font-bold ${accentClass} mb-4`}>
                PDF Preview
              </h2>
              <p className={`text-sm mb-4 ${isCyber ? "text-red-200/70" : "text-slate-300"}`}>
                load the embedded viewer only when needed to improve performance on slower devices.
              </p>
              {!showPdfPreview ? (
                <Button
                  onClick={() => setShowPdfPreview(true)}
                  className={isCyber ? "bg-red-700 hover:bg-red-600 text-white" : "bg-blue-600 hover:bg-blue-500 text-white"}
                >
                  Load PDF preview
                </Button>
              ) : (
                <div className={`relative w-full h-[600px] rounded-lg overflow-hidden border ${isCyber ? "bg-red-950/20 border-red-900/30" : "bg-slate-800/50 border-slate-700/60"}`}>
                  <iframe
                    src={paper.pdf}
                    className="w-full h-full"
                    title="Research Paper PDF"
                  />
                </div>
              )}
            </Card>
          </motion.div>
        )}

        {/* References Section */}
        {paper.references && paper.references.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className={`${cardClass} p-8 mb-8`}>
              <h2 className={`text-2xl font-bold ${accentClass} mb-6`}>
                References
              </h2>
              <ol className="space-y-3 list-decimal list-inside">
                {paper.references.map((reference) => (
                  <li
                    key={reference.id}
                    className={`text-sm leading-relaxed pl-2 ${isCyber ? "text-red-200/80" : "text-slate-300"}`}
                  >
                    {reference.url ? (
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${accentClass} hover:underline`}
                      >
                        {reference.text}
                      </a>
                    ) : (
                      <span>{reference.text}</span>
                    )}
                  </li>
                ))}
              </ol>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
