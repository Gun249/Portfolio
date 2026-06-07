import { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { ThemeToggle } from './ThemeToggle'
import { LanguageDropdown } from './LanguageDropdown'

const links: { href: string; key: 'navAbout' | 'navProjects' | 'navContact' }[] = [
  { href: '#about', key: 'navAbout' },
  { href: '#projects', key: 'navProjects' },
  { href: '#contact', key: 'navContact' },
]

export function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <nav className="sticky top-0 z-[1030] flex items-center justify-between bg-[var(--surface-color)] px-8 py-4 shadow-[0_2px_4px_var(--shadow)] transition-colors duration-300">
        <a href="#home" className="text-2xl font-semibold text-[var(--primary-color)] no-underline">
          Gunthorn
        </a>
        <div className="flex items-center">
          <ul
            className={`fixed top-[70px] flex w-full flex-col items-center gap-0 border-t border-[var(--border-color)] bg-[var(--surface-color)] text-center shadow-[0_10px_27px_var(--shadow)] transition-[left] duration-300 list-none md:static md:left-0 md:top-0 md:w-auto md:flex-row md:gap-5 md:border-0 md:bg-transparent md:shadow-none ${menuOpen ? 'left-0' : 'left-[-100%]'}`}
          >
            {links.map(({ href, key }) => (
              <li key={key} className="py-6 md:py-0">
                <a
                  href={href}
                  onClick={closeMenu}
                  className="text-[var(--text-color)] no-underline transition-colors hover:text-[var(--primary-color)]"
                >
                  {t[key]}
                </a>
              </li>
            ))}
            <li className="w-full py-6 md:w-auto md:py-0">
              <LanguageDropdown />
            </li>
            <li className="py-6 md:py-0">
              <ThemeToggle />
            </li>
          </ul>
          <div
            className="ml-4 flex cursor-pointer flex-col md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`mx-auto my-[5px] block h-[3px] w-[25px] bg-[var(--text-color)] transition-all duration-300 ${menuOpen ? 'translate-y-[8px] rotate-45' : ''}`}
            />
            <span
              className={`mx-auto my-[5px] block h-[3px] w-[25px] bg-[var(--text-color)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`mx-auto my-[5px] block h-[3px] w-[25px] bg-[var(--text-color)] transition-all duration-300 ${menuOpen ? '-translate-y-[8px] -rotate-45' : ''}`}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
