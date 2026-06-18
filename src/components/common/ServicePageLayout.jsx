import Layout from '../layout/Layout'
import PageBanner from './PageBanner'
import ContactForm from './ContactForm'
import ContactFormWithSlider from './ContactFormWithSlider'
import SectionHeading from './SectionHeading'
import { CallButton, WhatsAppButton } from './Buttons'
import { SITE } from '../../constants/siteData'
import { SERVICE_IMAGES } from '../../constants/serviceImages'
import { BANNER_IMAGES } from '../../constants/bannerImages'
import logo from '../../assets/slider/logo-removebg.png'

export default function ServicePageLayout({
  title,
  subtitle,
  intro,
  sections = [],
  showForm = true,
  servicePath,
  sidebar,
}) {
  const serviceImage = (servicePath && SERVICE_IMAGES[servicePath]) || logo
  const bannerImage = (servicePath && BANNER_IMAGES[servicePath]) || undefined
  return (
    <Layout>
      <PageBanner title={title} subtitle={subtitle} image={bannerImage} />

      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-8">
            {intro.map((block, i) => (
              <div key={i} className="space-y-3">
                {block.heading && (
                  <h2 className="text-xl font-bold text-master-purple">{block.heading}</h2>
                )}
                {block.text && <p className="text-master-muted leading-relaxed">{block.text}</p>}
                {block.list && (
                  <ul className="mt-4 space-y-2">
                    {block.list.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-master-muted text-sm">
                        <span className="text-master-gold mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="sticky top-28">
              {sidebar ?? (
                <div className="space-y-4">
                  <img src={serviceImage} alt={title} className="w-full rounded-xl object-cover" />
                  <p className="text-center text-sm text-master-muted">{SITE.name}</p>
                  <div className="space-y-2">
                    <CallButton variant="dark" className="w-full" compact />
                    <WhatsAppButton className="w-full" compact />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section
          key={i}
          className={`py-16 px-4 ${section.bg === 'dark' ? 'mesh-hero' : section.bg === 'surface' ? 'bg-master-surface' : 'bg-white'}`}
        >
          {section.form ? (
            <div className="max-w-6xl mx-auto">
              <ContactFormWithSlider
                heading={section.heading}
                headingClassName={`text-2xl font-bold mb-6 ${
                  section.bg === 'dark' ? 'text-white' : 'text-master-purple'
                }`}
              />
            </div>
          ) : (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className={section.reverse ? 'md:order-2' : ''}>
              {section.heading && (
                <h2
                  className={`text-2xl font-bold mb-4 ${section.bg === 'dark' ? 'text-white' : 'text-master-purple'}`}
                >
                  {section.heading}
                </h2>
              )}
              {section.text && (
                <p className={`leading-relaxed mb-4 ${section.bg === 'dark' ? 'text-white/70' : 'text-master-muted'}`}>
                  {section.text}
                </p>
              )}
              {section.list && (
                <ul className="space-y-2 mb-6">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${section.bg === 'dark' ? 'text-white/70' : 'text-master-muted'}`}
                    >
                      <span className="text-master-gold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.cta === 'whatsapp' && <WhatsAppButton />}
              {section.cta === 'call' && <CallButton variant={section.bg === 'dark' ? 'primary' : 'dark'} />}
            </div>
            {section.image && (
              <div className={section.reverse ? 'md:order-1' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={serviceImage} alt={title} className="w-full object-cover" />
                </div>
              </div>
            )}
          </div>
          )}
        </section>
      ))}

      {showForm && (
        <section className="py-16 px-4 bg-master-surface">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading
                label="Contact"
                title="Get a Free Consultation"
                description={`Reach out to ${SITE.name} for confidential, personalized guidance.`}
                center={false}
              />
              <div className="flex flex-wrap gap-3">
                <WhatsAppButton />
                <CallButton variant="dark" />
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
