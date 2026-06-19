import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import SectionHeading from '../components/common/SectionHeading'
import { TOP_SERVICES } from '../constants/siteData'
import { BANNER_IMAGES } from '../constants/bannerImages'

export default function Services() {
  return (
    <Layout>
      <PageBanner
        title="Our Services"
        subtitle="Personalized spiritual solutions for love, healing, protection, and life guidance."
        image={BANNER_IMAGES['/services']}
      />

      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOP_SERVICES.map((service, i) => {
              const isLastAlone = i === TOP_SERVICES.length - 1 && TOP_SERVICES.length % 3 === 1
              return (
              <div
                key={service.path}
                className={`group card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col ${
                  isLastAlone
                    ? 'sm:col-span-2 sm:max-w-md sm:justify-self-center sm:w-full lg:col-span-1 lg:col-start-2'
                    : ''
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto block"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-master-purple mb-2">{service.title}</h3>
                  <p className="text-master-muted text-sm leading-relaxed flex-1 mb-4">{service.description}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-master-gold hover:gap-2 transition-all"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      to="/book-appointment"
                      className="inline-flex items-center justify-center px-4 py-2 bg-master-purple text-white text-sm font-semibold rounded-xl hover:bg-master-purple-light transition-colors"
                    >
                      Book An Appointment
                    </Link>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-master-surface">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            label="Not Sure?"
            title="We'll Guide You to the Right Service"
            description="Contact us for a free initial consultation and we'll recommend the best approach for your situation."
          />
          <Link
            to="/contact"
            className="inline-flex px-6 py-3 bg-master-purple text-white font-semibold rounded-xl hover:bg-master-purple-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  )
}
