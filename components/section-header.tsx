"use client"

import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  isCyber: boolean
  className?: string
  as?: "h1" | "h2" | "h3"
}

export function SectionHeader({ eyebrow, title, isCyber, className, as = "h2" }: SectionHeaderProps) {
  const HeadingTag = as

  return (
    <div className={cn("mb-14", className)}>
      <p
        className={cn(
          "text-sm font-semibold tracking-widest uppercase mb-3",
          isCyber ? "text-red-400" : "text-blue-400",
        )}
      >
        {eyebrow}
      </p>
      <HeadingTag className={cn("section-title", isCyber ? "text-red-100" : "text-slate-100")}>
        {title}
      </HeadingTag>
    </div>
  )
}
