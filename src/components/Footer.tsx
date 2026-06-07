import { useTranslation } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="mt-auto border-t border-[var(--border-color)] bg-[var(--surface-color)] px-5 py-10 text-center">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mb-10 text-center text-[2rem] text-[var(--heading-color)] md:text-[2.5rem]">{t.contactTitle}</h2>
        <p className="my-5 inline-block border-b-2 border-[var(--primary-color)] pb-[5px] text-[1.2rem] text-[var(--text-color)]">
          Email: gunthorn.siri@gmail.com
        </p>
        <p className="text-[var(--text-color)]">Phone: +66 92-571-2888</p>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Gunthorn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--border-color)] px-4 py-2 text-[var(--text-color)] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
          >
            <i className="fab fa-github text-[1.2rem]" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gunthorn-siricharoenwat-53051022a/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--border-color)] px-4 py-2 text-[var(--text-color)] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
          >
            <i className="fab fa-linkedin text-[1.2rem]" /> {t.linkedinText}
          </a>
        </div>
        <p className="mt-[30px] text-[0.9rem] text-[var(--secondary-color)]">
          © {year} {t.copyrightSuffix}
        </p>
      </div>
    </footer>
  )
}
