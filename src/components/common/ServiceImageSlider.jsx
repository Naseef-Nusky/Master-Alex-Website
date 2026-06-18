import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TOP_SERVICES } from '../../constants/siteData'

const DURATION = 4000

export default function ServiceImageSlider({ className = '' }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TOP_SERVICES.length)
    }, DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`w-full max-w-[300px] sm:max-w-[340px] mx-auto lg:mx-0 lg:ml-auto ${className}`}>
      <div className="relative rounded-xl overflow-hidden shadow-md bg-master-dark border border-gray-100 h-72 sm:h-80">
        {TOP_SERVICES.map((service, i) => (
          <Link
            key={service.path}
            to={service.path}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === active ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </Link>
        ))}
      </div>

      <p className="text-center text-sm font-semibold text-master-purple mt-3 min-h-[1.25rem]">
        {TOP_SERVICES[active].title}
      </p>

      <div className="flex justify-center gap-1.5 mt-2">
        {TOP_SERVICES.map((service, i) => (
          <button
            key={service.path}
            type="button"
            aria-label={`Show ${service.title}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-master-gold' : 'w-2 bg-gray-300 hover:bg-master-gold/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
