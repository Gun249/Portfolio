import { useEffect, useRef, useState } from 'react'

interface CarouselImage {
  src: string
  alt: string
}

const AUTOPLAY_INTERVAL_MS = 5000

export function Carousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (next: number) => setIndex(((next % images.length) + images.length) % images.length)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => goTo(index + 1), AUTOPLAY_INTERVAL_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [index, paused])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex h-[350px] w-full items-center justify-center overflow-hidden bg-[var(--border-color)]">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-0 top-0 flex h-full w-[15%] items-center justify-center bg-transparent text-white opacity-50 transition-opacity hover:opacity-90"
      >
        <i className="fas fa-chevron-left text-2xl" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-0 top-0 flex h-full w-[15%] items-center justify-center bg-transparent text-white opacity-50 transition-opacity hover:opacity-90"
      >
        <i className="fas fa-chevron-right text-2xl" />
      </button>

      <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-[3px] w-[30px] cursor-pointer border-0 transition-opacity ${i === index ? 'bg-white opacity-100' : 'bg-white opacity-50'}`}
          />
        ))}
      </div>
    </div>
  )
}
