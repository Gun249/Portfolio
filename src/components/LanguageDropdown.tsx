import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/types'

export function LanguageDropdown({ onSelect }: { onSelect?: () => void }) {
  const { language, setLanguage } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const choose = (locale: Locale) => {
    setLanguage(locale)
    setOpen(false)
    onSelect?.()
  }

  return (
    <div ref={ref} className="relative w-full md:w-auto">
      <button
        type="button"
        title="Select Language"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-center px-4 py-2 text-[var(--text-color)] transition-colors hover:text-[var(--primary-color)] md:w-auto md:px-0 md:py-0"
      >
        <i className="fa-solid fa-globe" />
      </button>
      {open && (
        <ul
          className="static mt-[10px] w-full border-0 bg-[var(--bg-color)] py-2 shadow-[inset_0_1px_0_var(--border-color)] md:absolute md:right-0 md:top-full md:mt-2 md:w-40 md:rounded md:border md:border-[var(--border-color)] md:bg-[var(--surface-color)] md:shadow-[0_8px_25px_var(--shadow)]"
        >
          <li>
            <button
              type="button"
              onClick={() => choose('en')}
              className={`w-full px-5 py-2.5 text-center transition-colors hover:bg-[var(--primary-color)] hover:text-white ${language === 'en' ? 'text-[var(--primary-color)]' : 'text-[var(--text-color)]'}`}
            >
              🇺🇸 English
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => choose('th')}
              className={`w-full px-5 py-2.5 text-center transition-colors hover:bg-[var(--primary-color)] hover:text-white ${language === 'th' ? 'text-[var(--primary-color)]' : 'text-[var(--text-color)]'}`}
            >
              🇹🇭 ภาษาไทย
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}
