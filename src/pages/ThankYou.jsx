import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { CallButton } from '../components/common/Buttons'
import { SITE } from '../constants/siteData'

export default function ThankYou() {
  return (
    <Layout>
      <section className="relative min-h-[70vh] overflow-hidden px-4 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 mesh-hero" />
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-master-gold/20 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-xl text-center animate-fade-up">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-master-gold/30 bg-master-gold/10">
            <svg className="h-10 w-10 text-master-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <span className="mb-4 inline-block rounded-full border border-master-gold/30 bg-master-gold/10 px-4 py-1.5 text-xs font-bold tracking-widest text-master-gold uppercase">
            Message Sent
          </span>

          <h1 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">Thank You!</h1>
          <p className="mb-2 text-lg text-white/85">
            Your message has been received successfully.
          </p>
          <p className="mb-10 text-base text-white/60">
            {SITE.name} will contact you shortly. For urgent enquiries, call us directly.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton variant="primary" />
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-master-gold/40 hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/45">
            Need to send another message?{' '}
            <Link to="/contact" className="font-medium text-master-gold hover:underline">
              Contact us again
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}
