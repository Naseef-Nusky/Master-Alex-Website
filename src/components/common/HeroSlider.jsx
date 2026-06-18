import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HERO_SLIDES } from '../../constants/heroSlides'
import { SITE } from '../../constants/siteData'

const DURATION = 6000

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length)
    }, DURATION)
    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section
      className="hero-section relative w-full min-h-[100svh] h-[100svh] flex items-center justify-center overflow-hidden bg-master-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`hero-slide-bg absolute inset-0 w-full h-full ${
            i === active ? 'is-active opacity-100 z-[1]' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={s.image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      ))}

      <div className="absolute inset-0 z-[2] bg-master-dark/35 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-master-dark/50 via-master-dark/20 to-master-dark/50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
        <div className="relative min-h-[220px] sm:min-h-[280px]">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={s.id}
              className={`hero-slide-content absolute left-0 right-0 top-1/2 px-0 ${
                i === active ? 'is-active' : 'is-hidden'
              }`}
            >
              <h1 className="hero-slide-title mb-3">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-wide leading-[1.05] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                  {s.mainWord}
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium gold-text tracking-wide mt-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                  {s.accentWord}
                </span>
              </h1>

              <div className="hero-slide-lines mt-5 space-y-1.5">
                {s.lines.map((line) => (
                  <p
                    key={line}
                    className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 tracking-wide leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hero-slide-actions flex flex-col sm:flex-row flex-wrap gap-3 justify-center mt-8">
          <a
            href={SITE.phoneLink}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base sm:text-lg bg-master-gold text-master-dark font-medium rounded-xl hover:bg-master-gold-light transition-all duration-500 ease-in-out active:scale-[0.98]"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base sm:text-lg rounded-xl bg-white/15 border border-white/25 text-white font-medium hover:bg-white/25 transition-all duration-500 ease-in-out"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  )
}
