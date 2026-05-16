"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, MessageSquare, Send, X } from "lucide-react"
import { chatbotQuickQuestions, getChatbotAnswer } from "@/lib/portfolio-data"

type Message = { id: number; role: "user" | "assistant"; text: string }

export function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      text: "Hi, I’m Mohammed’s portfolio AI assistant. Ask me anything about his experience and projects.",
    },
  ])

  const ask = (question: string) => {
    const userMsg: Message = { id: Date.now(), role: "user", text: question }
    setMessages((prev) => [...prev, userMsg])
    setTyping(true)

    window.setTimeout(() => {
      const answer = getChatbotAnswer(question)
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "assistant", text: answer },
      ])
      setTyping(false)
    }, 650)
  }

  const latestQuestions = useMemo(() => chatbotQuickQuestions.slice(0, 6), [])

  return (
    <div className="fixed bottom-5 right-5 z-[95]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="mb-3 w-[min(92vw,360px)] overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-900/70 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-cyan-500/20 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
                <Bot className="h-4 w-4" /> AI Portfolio Assistant
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
                className="text-slate-300 hover:text-cyan-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-72 space-y-2 overflow-y-auto px-4 py-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={
                    msg.role === "assistant"
                      ? "mr-8 rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-100"
                      : "ml-8 rounded-xl border border-indigo-400/20 bg-indigo-500/10 px-3 py-2 text-sm text-indigo-100"
                  }
                >
                  {msg.text}
                </motion.div>
              ))}
              {typing && (
                <div className="mr-8 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                  AI is typing...
                </div>
              )}
            </div>

            <div className="border-t border-cyan-500/20 px-3 py-3">
              <div className="mb-2 flex flex-wrap gap-2">
                {latestQuestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => ask(q)}
                    className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[11px] text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                Quick Q&A based on portfolio content
                <Send className="h-3.5 w-3.5 text-cyan-300" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle AI chatbot"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/75 text-cyan-200 shadow-xl backdrop-blur transition hover:scale-105 hover:border-cyan-300"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    </div>
  )
}
