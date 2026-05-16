"use client"

import { useEffect } from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { FileText, Mail, Rocket, UserRound } from "lucide-react"
import { useCommandPalette } from "@/components/command-palette-provider"

const commands = [
  { label: "Go to Hero", id: "hero", icon: Rocket, shortcut: "H" },
  { label: "Go to About", id: "about", icon: UserRound, shortcut: "A" },
  { label: "Go to Projects", id: "projects", icon: Rocket, shortcut: "P" },
  { label: "Go to Contact", id: "contact", icon: Mail, shortcut: "C" },
  { label: "Open Resume", id: "resume", icon: FileText, shortcut: "R" },
]

export function PortfolioCommandPalette() {
  const { open, setOpen, closePalette, openPalette, togglePalette } =
    useCommandPalette()

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        togglePalette()
      }
      if (event.key === "Escape") closePalette()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [closePalette, togglePalette])

  const runCommand = (id: string) => {
    if (id === "resume") {
      window.open("/Mohammed_el_kassoiri.pdf", "_blank", "noopener,noreferrer")
      closePalette()
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    closePalette()
  }

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        className="fixed bottom-5 left-5 z-50 hidden rounded-xl border border-cyan-500/30 bg-slate-900/70 px-3 py-2 text-xs font-semibold text-cyan-200 shadow-lg backdrop-blur md:inline-flex"
      >
        Command Palette <span className="ml-2 text-cyan-300/70">⌘K</span>
      </button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="border-cyan-500/20 bg-slate-950/95"
      >
        <Command className="bg-slate-950/95 text-slate-100">
          <CommandInput placeholder="Search section or action..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              {commands.map((cmd) => {
                const Icon = cmd.icon
                return (
                  <CommandItem key={cmd.id} onSelect={() => runCommand(cmd.id)}>
                    <Icon className="h-4 w-4 text-cyan-300" />
                    {cmd.label}
                    <CommandShortcut>{cmd.shortcut}</CommandShortcut>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
