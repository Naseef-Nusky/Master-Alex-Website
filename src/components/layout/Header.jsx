import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, SERVICE_LINKS, SITE } from '../../constants/siteData'
import logo from '../../assets/slider/logo-removebg.png'

export default function Header({ overlay = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-master-gold' : 'text-white/80 hover:text-white'}`

  const positionClass = overlay ? 'fixed' : 'sticky'
  const headerClass = `${positionClass} top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
    scrolled ? 'header-gradient-scrolled backdrop-blur-xl shadow-lg' : 'header-gradient'
  }`

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center h-28 sm:h-32">
          {/* Left — navigation */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Center — logo */}
          <Link
            to="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center group z-10"
          >
            <img
              src={logo}
              alt={SITE.name}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Right — Services, CTA + mobile menu */}
          <div className="flex items-center gap-6 flex-1 justify-end ml-auto lg:ml-0">
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-medium text-white/80 hover:text-white flex items-center gap-1 transition-colors">
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full right-0 pt-3 w-64">
                  <div className="bg-master-purple-light/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2">
                    <Link
                      to="/services"
                      className="block px-4 py-2.5 text-master-gold font-semibold text-sm rounded-lg hover:bg-white/5"
                    >
                      View All Services
                    </Link>
                    <div className="h-px bg-white/10 my-1" />
                    {SERVICE_LINKS.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 text-sm rounded-lg transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/book-appointment"
              className="hidden lg:inline-flex px-5 py-2.5 bg-master-gold text-master-dark text-sm font-semibold rounded-xl hover:bg-master-gold-light transition-colors"
            >
              Book Appointment
            </Link>

            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden header-gradient border-t border-white/10 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-white/90 py-3 px-3 rounded-lg hover:bg-white/5 font-medium"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}

          <div>
            <button
              type="button"
              className="w-full flex items-center justify-between text-white/90 py-3 px-3 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileServicesOpen((open) => !open)}
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="mt-1 ml-3 pl-3 border-l border-white/10 space-y-1">
                <Link
                  to="/services"
                  className="block text-master-gold py-2.5 px-3 rounded-lg hover:bg-white/5 text-sm font-semibold"
                  onClick={closeMobileMenu}
                >
                  View All Services
                </Link>
                {SERVICE_LINKS.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block text-white/75 py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white text-sm"
                    onClick={closeMobileMenu}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/book-appointment"
            className="block text-white/90 py-3 px-3 rounded-lg hover:bg-white/5 font-medium"
            onClick={closeMobileMenu}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  )
}
