"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"

type CommandPaletteContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  openPalette: () => void
  closePalette: () => void
  togglePalette: () => void
}

const CommandPaletteContext = createContext<CommandPaletteContextValue>({
  open: false,
  setOpen: () => {},
  openPalette: () => {},
  closePalette: () => {},
  togglePalette: () => {},
})

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openPalette = useCallback(() => setOpen(true), [])
  const closePalette = useCallback(() => setOpen(false), [])
  const togglePalette = useCallback(() => setOpen((prev) => !prev), [])

  const value = useMemo(
    () => ({
      open,
      setOpen,
      openPalette,
      closePalette,
      togglePalette,
    }),
    [closePalette, open, openPalette, togglePalette],
  )

  return (
    <CommandPaletteContext.Provider value={value}>
      {children}
    </CommandPaletteContext.Provider>
  )
}

export function useCommandPalette() {
  return useContext(CommandPaletteContext)
}
