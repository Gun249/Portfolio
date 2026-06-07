import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Locale, Translations } from './types'
import { en } from './en'
import { th } from './th'

const locales: Record<Locale, Translations> = { en, th }

interface LanguageContextValue {
  language: Locale
  t: Translations
  setLanguage: (language: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(
    () => (localStorage.getItem('language') as Locale | null) ?? 'en',
  )

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const setLanguage = (next: Locale) => setLanguageState(next)

  return (
    <LanguageContext.Provider value={{ language, t: locales[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within a LanguageProvider')
  return ctx
}
