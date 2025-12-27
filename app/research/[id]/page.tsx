"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Users,
  Eye,
  Download,
  Quote,
  ExternalLink,
  Github,
  FileText,
  Tag,
  BookOpen,
  Share2,
  Home,
  ChevronRight,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { PDFViewer } from "@/components/pdf-viewer"
import { getResearchPaperById, ResearchPaper } from "@/lib/research-data"

export default function ResearchDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [paper, setPaper] = useState<ResearchPaper | null>(null)
  const [showCitations, setShowCitations] = useState(false)

  useEffect(() => {
    const id = params.id as string
    const foundPaper = getResearchPaperById(id)
    if (foundPaper) {
      setPaper(foundPaper)
    }
  }, [params.id])

  if (!paper) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Research Paper Not Found
          </h1>
          <Link
            href="/#research"
            className="text-cyan-400 hover:underline font-mono"
          >
            ← Back to Research
          </Link>
        </div>
      </div>
    )
  }

  const citationFormats = [
    {
      format: "APA",
      text: `${paper.authors.map((a) => a.name).join(", ")} (${paper.date}). ${paper.title}. ${paper.venue}. ${paper.doi ? `https://doi.org/${paper.doi}` : paper.paperUrl}`,
    },
    {
      format: "MLA",
      text: `${paper.authors.map((a) => a.name).join(", ")}. "${paper.title}." ${paper.venue}, ${paper.date}.`,
    },
    {
      format: "BibTeX",
      text: `@article{elkassoiri${paper.date},
  title={${paper.title}},
  author={${paper.authors.map((a) => a.name).join(" and ")}},
  year={${paper.date}},
  venue={${paper.venue}},
  ${paper.doi ? `doi={${paper.doi}},` : ""}
  url={${paper.paperUrl}}
}`,
    },
  ]

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: paper.title,
          text: paper.abstract,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-mono mb-8 text-white/60"
        >
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href="/#research"
            className="hover:text-cyan-400 transition-colors"
          >
            Research
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white/80 truncate max-w-[200px] md:max-w-none">
            {paper.title.substring(0, 50)}...
          </span>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            href="/#research"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-8">
                {/* Type Badge */}
                <span className="inline-block px-3 py-1 text-sm font-mono bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 rounded mb-4">
                  {paper.type}
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {paper.title}
                </h1>

                {/* Authors */}
                <div className="mb-6">
                  <div className="flex items-start gap-2 text-white/90">
                    <Users className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      {paper.authors.map((author, index) => (
                        <div key={index} className="mb-2">
                          <span className="font-semibold">{author.name}</span>
                          {author.affiliation && (
                            <span className="text-white/60 text-sm ml-2">
                              ({author.affiliation})
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Publication Info */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{paper.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span>{paper.venue}</span>
                  </div>
                  {paper.doi && (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      <span>DOI: {paper.doi}</span>
                    </div>
                  )}
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-6 mb-6 p-4 bg-cyan-400/5 border border-cyan-400/20 rounded">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {paper.metrics.views.toLocaleString()}
                      </div>
                      <div className="text-xs text-white/60">Views</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {paper.metrics.downloads.toLocaleString()}
                      </div>
                      <div className="text-xs text-white/60">Downloads</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Quote className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {paper.metrics.citations.toLocaleString()}
                      </div>
                      <div className="text-xs text-white/60">Citations</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={paper.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-mono bg-cyan-400 text-black rounded hover:bg-cyan-300 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View on ResearchGate</span>
                  </motion.a>

                  {paper.githubUrl && (
                    <motion.a
                      href={paper.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </motion.a>
                  )}

                  <motion.button
                    onClick={handleShare}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </motion.button>
                </div>
              </Card>
            </motion.div>

            {/* Abstract Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Abstract
                </h2>
                <p className="text-white/90 leading-relaxed whitespace-pre-line">
                  {paper.fullAbstract}
                </p>
              </Card>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  Key Highlights
                </h2>
                <ul className="space-y-3">
                  {paper.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-white/90 flex items-start gap-3"
                    >
                      <span className="text-cyan-400 text-xl mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* PDF Viewer */}
            {paper.pdfUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-8">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Research Paper PDF
                  </h2>
                  <PDFViewer pdfUrl={paper.pdfUrl} title={paper.title} />
                </Card>
              </motion.div>
            )}

            {/* References Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  References
                </h2>
                <ol className="space-y-4 list-none">
                  {paper.references.map((ref) => (
                    <li
                      key={ref.id}
                      className="text-white/80 text-sm leading-relaxed"
                    >
                      <span className="text-cyan-400 font-mono mr-3">
                        [{ref.id}]
                      </span>
                      {ref.text}
                    </li>
                  ))}
                </ol>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Keywords/Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-6 sticky top-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-mono border border-cyan-400/30 text-cyan-400 rounded bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Citations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Quote className="w-5 h-5" />
                  Cite this work
                </h3>
                <div className="space-y-4">
                  {citationFormats.map((citation, i) => (
                    <div key={i}>
                      <button
                        onClick={() => setShowCitations(!showCitations)}
                        className="text-sm font-mono text-cyan-400 mb-2 hover:underline"
                      >
                        {citation.format}
                      </button>
                      {showCitations && (
                        <div className="text-xs text-white/70 bg-black/50 p-3 rounded border border-cyan-400/20 font-mono whitespace-pre-wrap break-words">
                          {citation.text}
                        </div>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => setShowCitations(!showCitations)}
                    className="text-sm font-mono text-cyan-400 hover:underline w-full text-left"
                  >
                    {showCitations ? "Hide citations" : "Show all citations"}
                  </button>
                </div>
              </Card>
            </motion.div>

            {/* Related Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-cyan-400/30 bg-black/50 backdrop-blur-sm p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  Related Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {paper.tags.slice(0, 8).map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono border border-cyan-400/30 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
