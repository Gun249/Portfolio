import { useTranslation } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="bg-[var(--surface-color)] px-5 py-20 text-center">
      <div className="mx-auto max-w-[1100px]">
        <img
          src="/img/Gunthorn_glasses_background-white.png"
          alt="Gunthorn's Avatar"
          className="mx-auto mb-5 h-[250px] w-[250px] rounded-full border-[5px] border-[var(--primary-color)] object-cover"
        />
        <h1 className="mb-2.5 text-[2.2rem] text-[var(--heading-color)] md:text-[3rem]">{t.heroTitle}</h1>
        <a
          href="#projects"
          className="inline-block rounded-[5px] border border-[var(--primary-color)] bg-[var(--primary-color)] px-5 py-2.5 text-white no-underline transition-colors duration-300 hover:bg-[#0b5ed7]"
        >
          {t.heroViewProjects}
        </a>
      </div>
    </section>
  )
}
