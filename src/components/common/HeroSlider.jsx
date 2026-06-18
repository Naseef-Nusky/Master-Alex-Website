import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { HERO_SLIDES } from '../../constants/heroSlides'
import { SITE } from '../../constants/siteData'
import heroBg from '../../assets/hero-bg.png'

const DURATION = 6000
const SWIPE_THRESHOLD = 50

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
      setActive((prev) => {
        const next =
          direction === 'next'
            ? (prev + 1) % slideCount
            : (prev - 1 + slideCount) % slideCount
        return next
      })
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
    const touch = e.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return

    const touch = e.changedTouches[0]
    const dx = touch.clientX - touchStart.current.x
    const dy = touch.clientY - touchStart.current.y
    touchStart.current = null

    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return

    if (dx < 0) handleSwipe('next')
    else handleSwipe('prev')
  }

  return (
    <section
      className="hero-section relative w-full min-h-[100svh] h-[100svh] overflow-hidden touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      <div className="absolute inset-0 bg-white/35 pointer-events-none" />

      <div className="relative z-10 h-full flex items-start lg:items-center pt-36 sm:pt-32 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text — crossfade panels */}
          <div className="text-left order-2 lg:order-1 relative min-h-[280px] sm:min-h-[300px] lg:min-h-[340px]">
            {HERO_SLIDES.map((s, i) => (
              <div
                key={s.id}
                className={`hero-slide-panel absolute inset-0 flex flex-col justify-center ${
                  i === active ? 'is-active' : 'is-hidden'
                }`}
                aria-hidden={i !== active}
              >
                <h1 className="hero-slide-title mb-3">
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-master-purple tracking-wide leading-[1.05]">
                    {s.mainWord}
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium gold-text tracking-wide mt-2">
                    {s.accentWord}
                  </span>
                </h1>

                <div className="hero-slide-lines mt-4 space-y-1.5">
                  {s.lines.map((line) => (
                    <p
                      key={line}
                      className="text-lg sm:text-xl md:text-2xl font-light text-master-muted tracking-wide leading-snug"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="hero-slide-actions flex flex-row flex-nowrap gap-2 sm:gap-3 mt-6 lg:mt-8">
                  <a
                    href={SITE.phoneLink}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 px-3 py-3 text-xs sm:text-base sm:px-7 sm:py-3.5 sm:text-lg bg-master-gold text-master-dark font-medium rounded-xl hover:bg-master-gold-light transition-colors duration-300 active:scale-[0.98] whitespace-nowrap"
                  >
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className="inline-flex flex-1 items-center justify-center gap-1.5 px-3 py-3 text-xs sm:text-base sm:px-7 sm:py-3.5 sm:text-lg rounded-xl bg-master-purple text-white font-medium hover:bg-master-purple-light transition-colors duration-300 whitespace-nowrap"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Image — crossfade stack */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-[min(60vh,480px)] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-master-surface">
              {HERO_SLIDES.map((s, i) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt=""
                  className={`hero-slide-image absolute inset-0 w-full h-full object-cover object-center ${
                    i === active ? 'is-active' : 'is-hidden'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
