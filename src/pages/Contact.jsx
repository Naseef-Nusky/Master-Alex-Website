import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import ContactForm from '../components/common/ContactForm'
import { SITE } from '../constants/siteData'
import { BANNER_IMAGES } from '../constants/bannerImages'

function ContactCard({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
      <div className="w-11 h-11 rounded-xl bg-master-gold/10 flex items-center justify-center text-master-gold shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-master-purple text-sm mb-1">{title}</h3>
        <div className="text-master-muted text-sm">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <Layout>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for a confidential consultation."
        image={BANNER_IMAGES['/contact']}
      />

      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-master-purple mb-6">Send a Message</h2>
            <ContactForm buttonLabel="Send Message" />
          </div>

          <div className="space-y-4">
            <ContactCard
              title="Phone / WhatsApp"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            >
              <a href={SITE.phoneLink} className="hover:text-master-gold transition-colors">{SITE.phone}</a>
            </ContactCard>

            <ContactCard
              title="Email"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            >
              <a href={`mailto:${SITE.email}`} className="hover:text-master-gold transition-colors">{SITE.email}</a>
            </ContactCard>

            <ContactCard
              title="Address"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            >
              {SITE.address}
            </ContactCard>

            <Link
              to="/book-appointment"
              className="flex items-center justify-between w-full px-6 py-4 bg-master-purple text-white rounded-2xl font-semibold hover:bg-master-purple-light transition-colors"
            >
              Book An Appointment
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">→</span>
            </Link>

            <div className="rounded-2xl overflow-hidden border border-gray-100 h-56 shadow-sm">
              <iframe
                title="Location Map"
                src={SITE.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
