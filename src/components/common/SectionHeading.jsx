export default function SectionHeading({ label, title, description, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {label && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
            light ? 'text-master-gold' : 'text-master-gold'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-[2rem] md:text-[2.75rem] font-bold leading-tight ${
          light ? 'text-white' : 'text-master-purple'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg font-normal leading-relaxed ${light ? 'text-white/70' : 'text-master-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
