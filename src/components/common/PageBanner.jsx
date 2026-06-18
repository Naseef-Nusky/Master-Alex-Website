export default function PageBanner({ title, subtitle, image }) {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden min-h-[220px] md:min-h-[280px] flex items-center">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-master-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-master-dark/55 via-master-dark/35 to-master-dark/20" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 mesh-hero" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-master-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
        </>
      )}

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto drop-shadow-md">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
