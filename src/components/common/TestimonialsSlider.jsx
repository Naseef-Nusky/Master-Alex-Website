import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '../../constants/siteData'

const DURATION = 6000

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, DURATION)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    setActive((index + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative min-h-[280px] sm:min-h-[260px]">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className={`transition-opacity duration-700 ease-in-out ${
              i === active
                ? 'opacity-100 z-10 relative'
                : 'opacity-0 z-0 absolute inset-0 pointer-events-none'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm text-center">
              <div className="text-master-gold text-4xl mb-4 leading-none">&ldquo;</div>
              <p className="text-master-muted text-base sm:text-lg leading-relaxed mb-8">{t.text}</p>
              <div>
                <p className="font-semibold text-master-purple text-lg">{t.name}</p>
                <p className="text-sm text-master-muted mt-1">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous review"
          className="w-10 h-10 rounded-full border border-gray-200 bg-white text-master-purple hover:border-master-gold hover:text-master-gold transition-colors flex items-center justify-center shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show review from ${t.name}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-master-gold' : 'w-2 bg-gray-300 hover:bg-master-gold/50'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next review"
          className="w-10 h-10 rounded-full border border-gray-200 bg-white text-master-purple hover:border-master-gold hover:text-master-gold transition-colors flex items-center justify-center shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
