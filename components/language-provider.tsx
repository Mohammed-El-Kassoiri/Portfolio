"use client"

import * as React from "react"

export type Language = "en" | "fr"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined,
)

const STORAGE_KEY = "portfolio-language"

export function LanguageProvider({
  children,
  defaultLanguage = "en",
}: {
  children: React.ReactNode
  defaultLanguage?: Language
}) {
  const [language, setLanguageState] = React.useState<Language>(defaultLanguage)

  React.useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null
    if (stored === "en" || stored === "fr") {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = React.useCallback((next: Language) => {
    setLanguageState(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }, [])

  const toggleLanguage = React.useCallback(() => {
    setLanguage(language === "en" ? "fr" : "en")
  }, [language, setLanguage])

  const value = React.useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, setLanguage, toggleLanguage],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}