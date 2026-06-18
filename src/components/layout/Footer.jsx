import { Link } from 'react-router-dom'
import { SITE, FOOTER_LINKS } from '../../constants/siteData'
import logo from '../../assets/slider/logo-removebg.png'

export default function Footer() {
  return (
    <footer className="bg-master-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt={SITE.name} className="w-24 h-24 sm:w-28 sm:h-28 object-contain" />
            </Link>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              Trusted spiritual guidance and astrology services in London. Helping you find clarity, peace, and positive change.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-white/70 hover:text-master-gold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href={SITE.phoneLink} className="block text-white/70 hover:text-master-gold transition-colors">
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="block text-white/70 hover:text-master-gold transition-colors">
                {SITE.email}
              </a>
              <p className="text-white/50">{SITE.address}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Get in Touch</h3>
            <p className="text-white/50 text-sm mb-4">Available for in-person and remote consultations across the UK.</p>
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-master-whatsapp text-white text-sm font-medium rounded-xl hover:brightness-110 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/40 text-xs">
          <p>© 2025. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white/70 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
