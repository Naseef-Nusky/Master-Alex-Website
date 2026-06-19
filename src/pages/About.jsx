import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import ContactForm from '../components/common/ContactForm'
import SectionHeading from '../components/common/SectionHeading'
import ServiceImageSlider from '../components/common/ServiceImageSlider'
import GetExLovePromo from '../components/common/GetExLovePromo'
import { WhatsAppButton } from '../components/common/Buttons'
import { SITE, ABOUT_EXPERTISE, ABOUT_SPECIALIZATIONS } from '../constants/siteData'
import { BANNER_IMAGES } from '../constants/bannerImages'

function ContactCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
      <h3 className="font-bold text-master-purple mb-2">{title}</h3>
      <div className="text-master-muted text-sm leading-relaxed">{children}</div>
    </div>
  )
}

export default function About() {
  return (
    <Layout>
      <PageBanner
        title="About Us"
        subtitle="Learn about Master Alex — London's trusted spiritual guide."
        image={BANNER_IMAGES['/about']}
      />

      {/* Intro */}
      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-5">
            <h2 className="text-2xl font-bold text-master-purple">
              Master Alex, Your Reliable London-Based Astrologer
            </h2>
            <p className="text-master-muted leading-relaxed">
              Among the other astrologers in London, Master Alex is one of the most dependable and experienced.
              With over 25 years of astrological experience, his personalized readings are highly accurate and guide
              you toward a better future. Coming from a family of astrologers, he has been taught ancient,
              time-tested practices to help you rediscover direction, serenity, and clarity in life.
            </p>
            <p className="text-master-muted leading-relaxed">
              Do you want someone trustable to show you the path towards success? You are in the right place.
              Call Master Alex today.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <GetExLovePromo />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 px-4 bg-master-surface">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="Experience"
            title="Expertise and Path of His Astrology"
            center={false}
          />
          <p className="text-master-muted leading-relaxed mb-4">
            Master Alex has counselled thousands of people around the globe with his precise predictions and
            remedies over 25 years of expertise. His gentle demeanour and humble approach make him easy to talk
            to, even when explaining complex subjects. He has studied several fields of astrology, including:
          </p>
          <ul className="space-y-2 mb-6">
            {ABOUT_EXPERTISE.map((item) => (
              <li key={item} className="flex items-start gap-2 text-master-muted text-sm">
                <span className="text-master-gold mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-master-muted leading-relaxed">
            Along with other astrological remedies that bring favourable life changes, his knowledge also spans
            powerful love spells to find true love or reunite with your ex-partner.
          </p>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Services"
            title="Specializations and Services Offered"
            description="For problems in both personal and professional life, Master Alex provides individualized astrological readings for better and efficient solutions. His answers aim to eliminate bad influences and restore balance — whether in love, family, or career."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-4">
            <div>
              <p className="text-master-muted leading-relaxed mb-6">
                He most often concentrates on:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {ABOUT_SPECIALIZATIONS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-master-surface rounded-xl p-4 border border-gray-100"
                  >
                    <span className="text-master-gold shrink-0">✓</span>
                    <span className="text-master-muted text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-master-muted leading-relaxed mt-6">
                Every session is confidential and aims to help people recover peace and stability through
                contemporary understanding and conventional remedies.
              </p>
            </div>

            <ServiceImageSlider />
          </div>
        </div>
      </section>

      {/* How he helps */}
      <section className="py-16 px-4 bg-master-surface">
        <div className="max-w-3xl mx-auto space-y-5">
          <SectionHeading
            label="Our Approach"
            title="How Master Alex Assists Individuals"
            center={false}
          />
          <p className="text-master-muted leading-relaxed">
            Many clients turn to Master Alex for direction when they feel lost, overwhelmed, or trapped by
            negative energy. When you share your problems, he listens carefully, notes every important detail,
            analyses the position of stars based on your horoscope, and then offers powerful spiritual answers
            to resolve your issues.
          </p>
          <p className="text-master-muted leading-relaxed">
            He also removes negative energy from your life that caused these problems in the first place, so you
            remain pure and filled with positive energy. A better understanding of your life path comes from
            exploring his psychic reading services. He also provides remote sessions for people unable to visit
            in person.
          </p>
          <Link
            to="/psychic-reading"
            className="inline-flex items-center gap-2 text-master-gold font-semibold hover:gap-3 transition-all"
          >
            Explore Psychic Reading Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 mesh-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Speak with Master Alex | Bring Warmth into Your Life
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Book your appointment with Master Alex today if you are looking for an astrologer who truly cares about
            your well-being and happiness. With his extensive knowledge and years of experience in London, he is the
            perfect mentor to lead you toward success, positivity, and calm. Contact right now to begin a more
            fulfilling life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/book-appointment"
              className="inline-flex px-6 py-3 bg-master-gold text-master-dark font-semibold rounded-xl hover:bg-master-gold-light transition-colors"
            >
              Book An Appointment
            </Link>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5">
          <ContactCard title="Phone / WhatsApp">
            <a href={SITE.phoneLink} className="text-master-gold hover:underline">
              {SITE.phone}
            </a>
          </ContactCard>
          <ContactCard title="Reach Us by Email">
            <a href={`mailto:${SITE.email}`} className="text-master-gold hover:underline break-all">
              {SITE.email}
            </a>
          </ContactCard>
          <ContactCard title="Business Address">
            <p>{SITE.address}</p>
          </ContactCard>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 px-4 bg-master-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-master-purple mb-6">Contact Us Now</h2>
          <ContactForm />
        </div>
      </section>
    </Layout>
  )
}
