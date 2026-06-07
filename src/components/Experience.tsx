import { useTranslation } from '../i18n/LanguageContext'

export function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="bg-[var(--bg-color)] px-5 py-[60px]">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mb-10 text-center text-[2rem] text-[var(--heading-color)] md:text-[2.5rem]">{t.experienceTitle}</h2>
        <div className="mx-auto max-w-[800px] space-y-5">
          <div className="flex items-start gap-5 rounded-lg border border-[var(--border-color)] bg-[var(--surface-color)] p-5">
            <div className="flex min-h-[50px] min-w-[50px] items-center justify-center">
              <img
                src="/img/236915567_545650046882379_1311903876540498915_n.jpg"
                alt="Company Logo"
                className="max-h-[50px] max-w-[50px] rounded object-contain"
              />
            </div>
            <div>
              <h5 className="mb-[5px] font-semibold text-[var(--heading-color)]">{t.expCompany1}</h5>
              <p className="mb-[5px] italic text-[var(--text-color)]">{t.expRole1}</p>
              <p className="mb-[5px] text-[var(--secondary-color)]">{t.expDate1}</p>
              <ul className="list-disc pl-5 text-[var(--text-color)]">
                {t.expDesc1.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-5 rounded-lg border border-[var(--border-color)] bg-[var(--surface-color)] p-5">
            <div className="flex min-h-[50px] min-w-[50px] items-center justify-center">
              <img
                src="/img/1631377053886.jpg"
                alt="Company Logo"
                className="max-h-[50px] max-w-[50px] rounded object-contain"
              />
            </div>
            <div>
              <h5 className="mb-[5px] font-semibold text-[var(--heading-color)]">{t.expCompany2}</h5>
              <p className="mb-[5px] italic text-[var(--text-color)]">{t.expRole2}</p>
              <p className="mb-[5px] text-[var(--secondary-color)]">{t.expDate2}</p>
              <ul className="list-disc pl-5 text-[var(--text-color)]">
                {t.expDesc2.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
