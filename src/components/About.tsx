import { useTranslation } from '../i18n/LanguageContext'
import { RichText } from './RichText'

const skillCategories: { titleKey: 'programmingLanguages' | 'backendDatabase' | 'toolsDevelopment' | 'aiOthers'; items: string[] }[] = [
  { titleKey: 'programmingLanguages', items: ['Python', 'TypeScript'] },
  { titleKey: 'backendDatabase', items: ['Node.js', 'FastAPI', 'Prisma', 'SQL (MySQL)', 'MongoDB'] },
  { titleKey: 'toolsDevelopment', items: ['Git', 'Postman', 'VS Code'] },
  { titleKey: 'aiOthers', items: ['Prompt Engineering', 'Machine Learning', 'NLP'] },
]

const softSkillKeys: ('skillTeamwork' | 'skillPunctuality' | 'skillSelfLearning' | 'skillAdaptability')[] = [
  'skillTeamwork',
  'skillPunctuality',
  'skillSelfLearning',
  'skillAdaptability',
]

const skillItemClass =
  'rounded-[5px] border border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-3 text-center transition-[transform,background-color] duration-300 hover:-translate-y-[5px] hover:bg-[var(--primary-color)] hover:text-white'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="px-5 py-[60px]">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mb-10 text-center text-[2rem] text-[var(--heading-color)] md:text-[2.5rem]">{t.aboutTitle}</h2>
        <RichText html={t.aboutText} className="mx-auto mb-10 max-w-[800px] text-center" />

        <div className="mx-auto mb-10 max-w-[800px]">
          <h3 className="mb-5 text-center text-[1.5rem] text-[var(--heading-color)]">{t.eduTitle}</h3>
          <div className="space-y-5">
            <div className="flex items-start gap-5 rounded-lg border border-[var(--border-color)] bg-[var(--surface-color)] p-5 transition-colors duration-300 hover:border-[var(--primary-color)]">
              <div className="pt-[5px] text-[1.8rem] text-[var(--primary-color)]">
                <i className="fa-solid fa-graduation-cap" />
              </div>
              <div>
                <h5 className="mb-[5px] font-semibold text-[var(--heading-color)]">{t.eduSchool2}</h5>
                <p className="mb-[5px] italic text-[var(--text-color)]">{t.eduMajor2}</p>
                <p className="mb-[5px] text-[var(--secondary-color)]">{t.eduDate2}</p>
                <p className="mb-[5px] text-[var(--secondary-color)]">{t.eduGpa2}</p>
              </div>
            </div>
            <div className="flex items-start gap-5 rounded-lg border border-[var(--border-color)] bg-[var(--surface-color)] p-5 transition-colors duration-300 hover:border-[var(--primary-color)]">
              <div className="pt-[5px] text-[1.8rem] text-[var(--primary-color)]">
                <i className="fa-solid fa-school" />
              </div>
              <div>
                <h5 className="mb-[5px] font-semibold text-[var(--heading-color)]">{t.eduSchool1}</h5>
                <p className="mb-[5px] italic text-[var(--text-color)]">{t.eduMajor1}</p>
                <p className="mb-[5px] text-[var(--secondary-color)]">2016 - 2022</p>
                <p className="mb-[5px] text-[var(--secondary-color)]">{t.eduGpa1}</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mb-5 text-center text-[1.5rem] text-[var(--heading-color)]">{t.skillsTitle}</h3>
        <div className="mx-auto mb-10 max-w-[900px] space-y-[30px]">
          {skillCategories.map(({ titleKey, items }) => (
            <div
              key={titleKey}
              className="rounded-[10px] border border-[var(--border-color)] bg-[var(--surface-color)] p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_20px_var(--shadow)]"
            >
              <h4 className="mb-[15px] border-b-2 border-[var(--border-color)] pb-2 text-center text-[1.2rem] font-semibold text-[var(--primary-color)]">
                {t[titleKey]}
              </h4>
              <div className="mx-auto flex max-w-[700px] flex-wrap justify-center gap-[15px]">
                {items.map((item) => (
                  <div key={item} className={skillItemClass}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-5 text-center text-[1.5rem] text-[var(--heading-color)]">{t.softSkillsTitle}</h3>
          <div className="mx-auto flex max-w-[700px] flex-wrap justify-center gap-[15px]">
            {softSkillKeys.map((key) => (
              <div key={key} className={skillItemClass}>
                {t[key]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
