import { useTheme } from '../theme/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="ml-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[var(--border-color)] bg-transparent text-[var(--text-color)] transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white md:mx-0"
    >
      <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-[1.2rem]`} />
    </button>
  )
}
