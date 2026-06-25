import { Link } from 'react-router-dom'

export default function ServiceCard({ service, index, className = '' }) {
  return (
    <article
      className={`group card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ${className}`}
      style={index != null ? { animationDelay: `${index * 80}ms` } : undefined}
    >
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-master-surface">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 line-clamp-2 min-h-[3.5rem] text-lg font-bold text-master-purple">
          {service.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-master-muted line-clamp-4">
          {service.description}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            to={service.path}
            className="inline-flex items-center gap-1 text-sm font-semibold text-master-gold transition-all hover:gap-2"
          >
            Read More
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/book-appointment"
            className="inline-flex items-center justify-center rounded-xl bg-master-purple px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-master-purple-light"
          >
            Book An Appointment
          </Link>
        </div>
      </div>
    </article>
  )
}
