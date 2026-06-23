import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import ContactForm from '../components/common/ContactForm'
import GetExLovePromo from '../components/common/GetExLovePromo'
import { BANNER_IMAGES } from '../constants/bannerImages'

export default function BookAppointment() {
  return (
    <Layout>
      <PageBanner
        title="Book An Appointment"
        subtitle="Schedule a confidential consultation with Master Alex at your preferred time."
        image={BANNER_IMAGES['/book-appointment']}
      />

      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-master-purple mb-2">Appointment Details</h2>
              <p className="text-master-muted text-sm mb-6">
                Fill in your details and we&apos;ll confirm your booking shortly.
              </p>
              <ContactForm showDate buttonLabel="Book Now" page="Book Appointment" />
            </div>

            <div>
              <h3 className="font-semibold text-master-purple mb-3">What to Expect</h3>
              <ul className="space-y-2 text-sm text-master-muted">
                <li className="flex gap-2">
                  <span className="text-master-gold">✓</span> Private, confidential session
                </li>
                <li className="flex gap-2">
                  <span className="text-master-gold">✓</span> In-person or remote options
                </li>
                <li className="flex gap-2">
                  <span className="text-master-gold">✓</span> Personalized guidance & remedies
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <GetExLovePromo />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
