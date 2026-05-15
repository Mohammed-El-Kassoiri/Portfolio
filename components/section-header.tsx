"use client"

import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  isCyber: boolean
  className?: string
}

export function SectionHeader({ eyebrow, title, isCyber, className }: SectionHeaderProps) {
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
      <h2 className={cn("section-title", isCyber ? "text-red-100" : "text-slate-100")}>{title}</h2>
    </div>
  )
}
