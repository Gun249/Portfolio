import type { ReactNode } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { RichText } from './RichText'

interface ProjectCardProps {
  media: ReactNode
  titleKey: 'project1Title' | 'project2Title' | 'project3Title' | 'project4Title'
  descKey: 'project1Desc' | 'project2Desc' | 'project3Desc' | 'project4Desc'
  techStack: string[]
  githubUrl: string
}

export function ProjectCard({ media, titleKey, descKey, techStack, githubUrl }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <div className="flex h-full flex-col overflow-hidden rounded border border-[var(--border-color)] bg-[var(--surface-color)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_25px_var(--shadow)]">
      {media}
      <div className="flex-1 p-4">
        <h5 className="mb-2 text-[1.25rem] font-medium text-[var(--heading-color)]">{t[titleKey]}</h5>
        <RichText html={t[descKey]} className="mb-2 text-[var(--text-color)]" />
        <p className="text-[var(--text-color)]">
          <strong>Tech Stack:</strong>{' '}
          {techStack.map((tech) => (
            <span
              key={tech}
              className="mr-1 inline-block rounded bg-[var(--secondary-color)] px-2 py-1 text-xs font-semibold text-white"
            >
              {tech}
            </span>
          ))}
        </p>
      </div>
      <div className="border-t border-[var(--border-color)] p-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="block w-full rounded border border-[var(--primary-color)] py-2 text-center text-[var(--primary-color)] no-underline transition-colors duration-300 hover:bg-[var(--primary-color)] hover:text-white"
        >
          {t.viewOnGithub}
        </a>
      </div>
    </div>
  )
}
