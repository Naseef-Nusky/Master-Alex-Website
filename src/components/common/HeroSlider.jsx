import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { HERO_SLIDES } from '../../constants/heroSlides'
import { SITE } from '../../constants/siteData'
import heroBg from '../../assets/hero-bg.png'

const DURATION = 6000
const SWIPE_THRESHOLD = 40
const TAP_THRESHOLD = 12

function isInteractiveTarget(target) {
  return Boolean(target?.closest('a, button, input, textarea, select, label'))
}

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStart = useRef(null)
  const pauseTimer = useRef(null)

  const slideCount = HERO_SLIDES.length

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true)
    if (pauseTimer.current) clearTimeout(pauseTimer.current)
    pauseTimer.current = setTimeout(() => setIsPaused(false), DURATION)
  }, [])

  const handleSwipe = useCallback(
    (direction) => {
      setActive((prev) =>
        direction === 'next'
          ? (prev + 1) % slideCount
          : (prev - 1 + slideCount) % slideCount,
      )
      pauseAutoPlay()
    },
    [slideCount, pauseAutoPlay],
  )

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slideCount)
    }, DURATION)
    return () => clearInterval(timer)
  }, [isPaused, slideCount])

  useEffect(() => {
    return () => {
      if (pauseTimer.current) clearTimeout(pauseTimer.current)
    }
  }, [])

  const handleTouchStart = (e) => {
    if (isInteractiveTarget(e.target)) return
    const touch = e.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = (e) => {
    if (!touchStart.current || isInteractiveTarget(e.target)) {
      touchStart.current = null
      return
    }

    const touch = e.changedTouches[0]
    const dx = touch.clientX - touchStart.current.x
    const dy = touch.clientY - touchStart.current.y
    touchStart.current = null

    const absX = Math.abs(dx)
    const absY = Math.abs(dy)

    if (absX >= SWIPE_THRESHOLD && absX > absY) {
      handleSwipe(dx < 0 ? 'next' : 'prev')
      return
    }

    if (absX < TAP_THRESHOLD && absY < TAP_THRESHOLD) {
      handleSwipe('next')
    }
  }

  return (
    <section
      className="hero-section relative w-full min-h-[100svh] h-[100svh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      <div className="absolute inset-0 bg-white/35 pointer-events-none" />

      <div className="relative z-10 h-full pt-36 sm:pt-32 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-start lg:items-center lg:justify-center">
          <div
            className="relative w-full min-h-[420px] touch-pan-y select-none sm:min-h-[460px] lg:min-h-[480px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {HERO_SLIDES.map((s, i) => (
              <div
                key={s.id}
                className={`hero-slide absolute inset-0 flex items-start lg:items-center ${
                  i === active ? 'is-active' : 'is-hidden'
                }`}
                aria-hidden={i !== active}
              >
                <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
                  <div className="order-2 text-left lg:order-1">
                    <h1 className="hero-slide-title">
                      <span className="hero-title-line">
                        <span className="hero-title-main">{s.mainWord}</span>{' '}
                        <span className="hero-title-accent gold-text">{s.accentWord}</span>
                      </span>
                    </h1>

                    <div className="hero-slide-lines mt-4 space-y-1.5">
                      {s.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-gray-200 bg-master-surface shadow-xl sm:h-72 md:h-80 lg:h-[min(60vh,480px)]">
                      <img
                        src={s.image}
                        alt=""
                        className="h-full w-full object-cover object-center pointer-events-none"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-slide-actions relative z-20 mt-6 flex w-full flex-row flex-nowrap gap-2 sm:gap-3 lg:mt-8 lg:max-w-[calc(50%-1.75rem)]">
            <a
              href={SITE.phoneLink}
              className="inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-master-gold px-3 py-3 text-xs font-medium text-master-dark transition-colors duration-300 hover:bg-master-gold-light active:scale-[0.98] sm:px-7 sm:py-3.5 sm:text-base sm:text-lg"
            >
              <svg className="h-4 w-4 shrink-0 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {SITE.phone}
            </a>
            <Link
              to="/book-appointment"
              className="inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-master-purple px-3 py-3 text-xs font-medium text-white transition-colors duration-300 hover:bg-master-purple-light sm:px-7 sm:py-3.5 sm:text-base sm:text-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
