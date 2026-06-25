import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import SectionHeading from '../components/common/SectionHeading'
import ServiceCard from '../components/common/ServiceCard'
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
          <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOP_SERVICES.map((service, i) => {
              const isLastAlone = i === TOP_SERVICES.length - 1 && TOP_SERVICES.length % 3 === 1
              return (
                <div
                  key={service.path}
                  className={
                    isLastAlone
                      ? 'h-full sm:col-span-2 sm:max-w-md sm:justify-self-center sm:w-full lg:col-span-1 lg:col-start-2'
                      : 'h-full'
                  }
                >
                  <ServiceCard service={service} index={i} />
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
