import { useTranslation } from '../i18n/LanguageContext'
import { ProjectCard } from './ProjectCard'
import { Carousel } from './Carousel'

const cookMateImages = [
  { src: '/img/Screenshot 2025-07-13 180254.png', alt: 'CookMate Home Screen' },
  { src: '/img/Screenshot 2025-07-13 180314.png', alt: 'Recipe List Screen' },
  { src: '/img/Screenshot 2025-07-13 180322.png', alt: 'Recipe Detail Screen' },
  { src: '/img/Screenshot 2025-07-13 180330.png', alt: 'Recipe Detail Screen' },
  { src: '/img/Screenshot 2025-07-13 180402.png', alt: 'Recipe Detail Screen' },
]

function YouTubeEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative aspect-video w-full">
      <iframe
        src={src}
        title={title}
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

export function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="bg-[var(--bg-color)] px-5 py-[60px]">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mb-10 text-center text-[2rem] text-[var(--heading-color)] md:text-[2.5rem]">{t.projectsTitle}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProjectCard
            media={
              <YouTubeEmbed
                src="https://www.youtube.com/embed/SXt_jrMMvgo?si=OEUQExuY9wxZ5eaj"
                title="DamAlert demo video"
              />
            }
            titleKey="project1Title"
            descKey="project1Desc"
            techStack={['EJS', 'CSS', 'JavaScript', 'Node.js']}
            githubUrl="https://github.com/Gun249/DamAlert"
          />
          <ProjectCard
            media={<Carousel images={cookMateImages} />}
            titleKey="project2Title"
            descKey="project2Desc"
            techStack={['.Net', 'C#']}
            githubUrl="https://github.com/Gun249/CookMate"
          />
          <ProjectCard
            media={
              <YouTubeEmbed
                src="https://www.youtube.com/embed/D9o7_bCn_dI?si=qioml708M_DaX3W-"
                title="Righthere demo video"
              />
            }
            titleKey="project3Title"
            descKey="project3Desc"
            techStack={['Python', 'FastAPI', 'NLP', 'Fine-Tune']}
            githubUrl="https://github.com/Gun249/righthere"
          />
          <ProjectCard
            media={
              <YouTubeEmbed
                src="https://www.youtube.com/embed/-Fntjd7qtlo?si=NWcH0EgDocP2btHo"
                title="Task Manager demo video"
              />
            }
            titleKey="project4Title"
            descKey="project4Desc"
            techStack={['Python', 'FastAPI', 'Siamese Neural Network']}
            githubUrl="https://github.com/Gun249/task-manager"
          />
        </div>
      </div>
    </section>
  )
}
