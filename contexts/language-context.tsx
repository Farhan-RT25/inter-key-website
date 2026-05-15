"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Lang = "en" | "ar"

const LanguageContext = createContext<{ lang: Lang; toggleLang: () => void }>({
  lang: "en",
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggleLang: () => setLang(l => l === "en" ? "ar" : "en") }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
