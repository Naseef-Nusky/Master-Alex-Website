import { CallButton } from './Buttons'

export default function ServiceSectionBlock({ section, isDark = false }) {
  const headingClass = isDark ? 'text-white' : 'text-master-purple'
  const textClass = isDark ? 'text-white/75' : 'text-master-muted'
  const listItemClass = isDark
    ? 'bg-white/5 border-white/10 text-white/85'
    : 'bg-white border-gray-100 text-master-muted shadow-sm'

  return (
    <div className="service-section-content mx-auto w-full max-w-2xl text-center">
      {section.heading && (
        <h2 className={`text-2xl lg:text-[1.75rem] font-bold mb-5 leading-snug ${headingClass}`}>
          {section.heading}
        </h2>
      )}

      {section.text && (
        <p className={`text-base lg:text-[1.0625rem] leading-relaxed mb-5 ${textClass}`}>
          {section.text}
        </p>
      )}

      {section.list && (
        <ul className="space-y-3 mb-5">
          {section.list.map((item) => (
            <li
              key={item}
              className={`flex items-start gap-3 rounded-xl border p-3.5 text-left lg:p-4 ${listItemClass}`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-master-gold/15 text-sm font-bold text-master-gold">
                ✓
              </span>
              <span className="text-sm leading-relaxed lg:text-[0.9375rem]">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.afterText && (
        <p className={`text-base lg:text-[1.0625rem] leading-relaxed mb-6 ${textClass}`}>
          {section.afterText}
        </p>
      )}

      {section.cta && (
        <div className="flex flex-col items-center gap-3 pt-1 sm:flex-row sm:flex-wrap sm:justify-center lg:pt-2">
          {(section.cta === 'call' || section.cta === 'whatsapp') && (
            <CallButton
              variant={isDark ? 'primary' : 'dark'}
              className="w-full sm:w-auto lg:min-w-[220px]"
            />
          )}
        </div>
      )}
    </div>
  )
}
