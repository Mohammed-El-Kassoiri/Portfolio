"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getResearchPaperById } from "@/lib/research-data"
import { FileText, Download, Github, ExternalLink, Calendar } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ResearchDetailPage() {
  const params = useParams()
  const id = params.id as string
  const paper = getResearchPaperById(id)
  const [selectedFigure, setSelectedFigure] = useState<string | null>(null)

  if (!paper) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Research Paper Not Found</h1>
          <Link href="/" className="text-cyan-400 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Back Navigation */}
        <Link
          href="/#research"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
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
          <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-8 mb-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {paper.title}
            </h1>

            {/* Authors and Metadata */}
            <div className="flex flex-wrap gap-4 mb-6 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-semibold">Authors:</span>
                <span>{paper.authors}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{paper.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{paper.venue}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/30"
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
                  className="bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/30"
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
                  className="bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/30"
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
          <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Abstract</h2>
            <p className="text-white/90 leading-relaxed text-justify">
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
            <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                Figures
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paper.figures.map((figure, index) => (
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
                        <div className="relative aspect-video bg-white/5 rounded-lg overflow-hidden mb-3 border border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors">
                          <div className="absolute inset-0 flex items-center justify-center text-white/50">
                            <FileText className="w-12 h-12" />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/70 text-sm">
                              Click to view
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-white/80 font-mono">
                          {figure.caption}
                        </p>
                        {figure.description && (
                          <p className="text-xs text-white/60 mt-2">
                            {figure.description}
                          </p>
                        )}
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-black border-cyan-400/30">
                      <DialogTitle className="text-cyan-400">
                        {figure.caption}
                      </DialogTitle>
                      <div className="relative aspect-video bg-white/5 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-white/50">
                          <FileText className="w-16 h-16" />
                        </div>
                      </div>
                      {figure.description && (
                        <p className="text-white/80 text-sm">
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
            <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                PDF Preview
              </h2>
              <div className="relative w-full h-[600px] bg-white/5 rounded-lg overflow-hidden border border-cyan-400/20">
                <iframe
                  src={paper.pdf}
                  className="w-full h-full"
                  title="Research Paper PDF"
                />
              </div>
              <div className="mt-4 text-center">
                <Button
                  asChild
                  className="bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/30"
                >
                  <a href={paper.pdf} download className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Full PDF
                  </a>
                </Button>
              </div>
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
            <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                References
              </h2>
              <ol className="space-y-3 list-decimal list-inside">
                {paper.references.map((reference) => (
                  <li
                    key={reference.id}
                    className="text-white/80 text-sm leading-relaxed pl-2"
                  >
                    {reference.url ? (
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 hover:underline"
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
