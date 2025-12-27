"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { motion } from "framer-motion"
import { Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFViewerProps {
  pdfUrl: string
  title: string
}

export function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)
  const [loading, setLoading] = useState(true)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.0))
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5))
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex items-center justify-between mb-4 p-4 bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg">
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={previousPage}
            disabled={pageNumber <= 1}
            className="p-2 border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <span className="text-white text-sm font-mono px-3">
            Page {pageNumber} of {numPages || "?"}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            disabled={!numPages || pageNumber >= numPages}
            className="p-2 border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="p-2 border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ZoomOut className="w-5 h-5" />
          </motion.button>
          <span className="text-white text-sm font-mono px-3">
            {Math.round(scale * 100)}%
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={zoomIn}
            disabled={scale >= 2.0}
            className="p-2 border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ZoomIn className="w-5 h-5" />
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, x: 2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </motion.button>
      </div>

      {/* PDF Display */}
      <div className="flex justify-center bg-gray-900/50 border border-cyan-400/30 rounded-lg p-4 overflow-auto">
        {loading && (
          <div className="flex items-center justify-center min-h-[600px]">
            <div className="text-cyan-400 font-mono">Loading PDF...</div>
          </div>
        )}
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center min-h-[600px]">
              <div className="text-cyan-400 font-mono">Loading PDF...</div>
            </div>
          }
          error={
            <div className="flex items-center justify-center min-h-[600px]">
              <div className="text-red-400 font-mono">
                Failed to load PDF. The file may not be available.
              </div>
            </div>
          }
          className="flex justify-center"
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-2xl"
          />
        </Document>
      </div>
    </div>
  )
}
