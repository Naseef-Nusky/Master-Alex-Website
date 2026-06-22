import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import HeroSlider from '../components/common/HeroSlider'
import ContactForm from '../components/common/ContactForm'
import SectionHeading from '../components/common/SectionHeading'
import TestimonialsSlider from '../components/common/TestimonialsSlider'
import {
  SITE,
  TOP_SERVICES,
  RELIGIONS,
  ABOUT_HOME,
  WHY_CHOOSE,
  WHY_CHOOSE_INTRO,
  WHY_CHOOSE_TITLE,
  FAQS,
} from '../constants/siteData'
import homeAbout from '../assets/home-about.png'

const HOME_SERVICES = TOP_SERVICES.filter((s) => s.path !== '/spiritual-healing')

const WHY_CHOOSE_ICONS = {
  experience: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  availability: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  remedies: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  quality: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
}

function ServiceCard({ service, index }) {
  return (
    <div
      className="group card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
      style={{ animationDelay: `${index * 80}ms` }}
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
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <Layout heroBehindHeader>
      <HeroSlider />

      {/* Religions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Inclusive"
            title="All Religions Welcome"
            description="Spiritual guidance rooted in respect for every belief system."
          />
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-5">
            {RELIGIONS.map((r) => (
              <div
                key={r.name}
                className="flex h-28 w-[calc(50%-0.5rem)] flex-col items-center justify-between rounded-xl border border-gray-100 bg-master-surface p-2 transition-colors hover:border-master-gold/30 sm:h-32 sm:w-full"
              >
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="max-h-14 max-w-full object-contain sm:max-h-16"
                  />
                </div>
                <p className="text-center text-[11px] font-bold text-master-gold sm:text-xs">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
          {/* Mobile: title first */}
          <div className="order-1 lg:hidden">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-master-gold mb-2 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-master-purple">
              {ABOUT_HOME.title}
            </h2>
          </div>

          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 bg-gradient-to-br from-master-gold/20 to-purple-500/10 rounded-3xl" />
            <img
              src={homeAbout}
              alt={`About ${SITE.name}`}
              className="relative w-full rounded-2xl shadow-2xl object-contain"
            />
          </div>

          {/* Desktop: title + text grouped; mobile: text only (title above image) */}
          <div className="order-3 lg:order-2 flex flex-col gap-4">
            <div className="hidden lg:block">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-master-gold mb-2 block">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-master-purple">
                {ABOUT_HOME.title}
              </h2>
            </div>
            <div className="space-y-4 text-master-muted leading-relaxed">
              {ABOUT_HOME.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-master-gold font-semibold hover:gap-3 transition-all"
              >
                Learn more about us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-master-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Top Services"
            title="Expert Spiritual Services"
            description="Personalized spiritual services for your unique situation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOME_SERVICES.map((s, i) => {
              const isLastAlone = i === HOME_SERVICES.length - 1 && HOME_SERVICES.length % 3 === 1
              return (
                <div
                  key={s.path}
                  className={
                    isLastAlone
                      ? 'sm:col-span-2 sm:max-w-md sm:justify-self-center sm:w-full lg:col-span-1 lg:col-start-2'
                      : ''
                  }
                >
                  <ServiceCard service={s} index={i} />
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-master-purple text-white font-semibold rounded-xl hover:bg-master-purple-light transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-master-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-master-gold mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-master-purple leading-tight mb-5">
                {WHY_CHOOSE_TITLE}
              </h2>
              <p className="text-master-muted leading-relaxed text-lg mb-8">
                {WHY_CHOOSE_INTRO}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 max-w-[80px] bg-master-gold" />
                <span className="text-sm font-semibold text-master-gold">Trusted by thousands</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {WHY_CHOOSE.map((item, index) => (
                <div
                  key={item.title}
                  className="group card-hover bg-master-surface rounded-2xl p-6 border border-gray-100 hover:border-master-gold/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-master-gold/20 to-master-gold/5 text-master-gold-dark flex items-center justify-center shrink-0 group-hover:from-master-gold group-hover:to-master-gold-light group-hover:text-master-dark transition-colors duration-300">
                      {WHY_CHOOSE_ICONS[item.icon]}
                    </div>
                    <span className="text-xs font-bold text-master-gold/60 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-master-purple mb-2 group-hover:text-master-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-master-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-master-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title="Clients Reviews"
            description="Discover what our clients say about Master Alex. Read heartfelt testimonials from people whose lives have been transformed through his accurate predictions, effective remedies, and compassionate guidance."
          />
          <TestimonialsSlider />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to the most common questions about our services, guidance, and consultations."
          />
          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i
              return (
              <div
                key={faq.q}
                className="bg-master-surface rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(i)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 font-semibold text-master-purple cursor-pointer flex justify-between items-center hover:bg-white transition-colors text-left"
                >
                  Q{i + 1} {faq.q}
                  <svg
                    className={`w-5 h-5 text-master-muted transition-transform shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="px-6 pb-4 text-master-muted text-sm leading-relaxed">{faq.a}</p>
                )}
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-master-surface">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              label="Contact"
              title="Tell Us Your Concerns, We're Here to Help!"
              description="He will contact you within 24 hours."
              center={false}
            />
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <ContactForm buttonLabel="Send Message" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
