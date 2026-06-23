import Layout from '../layout/Layout'
import PageBanner from './PageBanner'
import ContactForm from './ContactForm'
import ContactFormWithSlider from './ContactFormWithSlider'
import SectionHeading from './SectionHeading'
import ServiceSectionBlock from './ServiceSectionBlock'
import { CallButton } from './Buttons'
import { SITE } from '../../constants/siteData'
import { SERVICE_IMAGES } from '../../constants/serviceImages'
import { BANNER_IMAGES, DEFAULT_BANNER } from '../../constants/bannerImages'
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
  const bannerImage = (servicePath && BANNER_IMAGES[servicePath]) || DEFAULT_BANNER
  const orderedSections = [
    ...sections.filter((section) => !section.form),
    ...sections.filter((section) => section.form),
  ]

  return (
    <Layout>
      <PageBanner title={title} subtitle={subtitle} image={bannerImage} />

      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 lg:items-center">
          <div className="lg:col-span-3 space-y-8">
            {intro.map((block, i) => (
              <div key={i} className="space-y-3">
                {block.heading && (
                  <h2 className="text-xl lg:text-2xl font-bold text-master-purple leading-snug">
                    {block.heading}
                  </h2>
                )}
                {block.text && (
                  <p className="text-master-muted leading-relaxed text-base lg:text-[1.0625rem]">
                    {block.text}
                  </p>
                )}
                {block.list && (
                  <ul className="mt-4 space-y-3">
                    {block.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-3.5 text-sm text-master-muted shadow-sm lg:p-4 lg:text-[0.9375rem]"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-master-gold/15 text-sm font-bold text-master-gold">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {block.afterText && (
                  <p className="text-master-muted leading-relaxed text-base lg:text-[1.0625rem]">
                    {block.afterText}
                  </p>
                )}
                {block.cta && (
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                    {(block.cta === 'call' || block.cta === 'whatsapp') && (
                      <CallButton variant="dark" className="w-full sm:w-auto lg:min-w-[220px]" />
                    )}
                  </div>
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {orderedSections.map((section, i) => {
        const isFirstContentSection = i === 0
        const isBeforeContact = orderedSections[i + 1]?.form
        const isPromoSection =
          section.bg === 'surface' &&
          section.heading &&
          section.cta &&
          !section.list &&
          !section.image &&
          !section.form

        let effectiveBg = section.bg
        if (section.bg === 'dark' && (isFirstContentSection || isBeforeContact)) {
          effectiveBg = 'surface'
        } else if (isPromoSection) {
          effectiveBg = 'surface-soft'
        }

        const isDark = effectiveBg === 'dark'
        const bgClass =
          effectiveBg === 'dark'
            ? 'mesh-hero'
            : effectiveBg === 'surface-soft'
              ? 'bg-master-surface-soft'
              : effectiveBg === 'surface'
                ? 'bg-master-surface'
                : 'bg-white'

        if (section.form) {
          return (
            <section key={i} className={`py-16 px-4 ${bgClass}`}>
              <div className="max-w-6xl mx-auto">
                <ContactFormWithSlider
                  heading={section.heading}
                  headingClassName={`text-2xl font-bold mb-6 ${
                    isDark ? 'text-white' : 'text-master-purple'
                  }`}
                  formProps={{ page: title }}
                />
              </div>
            </section>
          )
        }

        return (
          <section key={i} className={`py-16 px-4 lg:py-20 ${bgClass}`}>
            <div
              className={`max-w-6xl mx-auto ${
                section.image
                  ? 'grid items-center gap-10 md:grid-cols-2 lg:gap-14'
                  : 'lg:grid lg:grid-cols-5 lg:items-center lg:gap-10'
              }`}
            >
              <div
                className={
                  section.image
                    ? section.reverse
                      ? 'md:order-2 lg:flex lg:items-center'
                      : 'lg:flex lg:items-center'
                    : 'lg:col-span-3 lg:col-start-2'
                }
              >
                <ServiceSectionBlock section={section} isDark={isDark} />
              </div>

              {section.image && (
                <div className={`${section.reverse ? 'md:order-1' : ''} lg:flex lg:items-center`}>
                  <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl lg:shadow-2xl">
                    <img
                      src={bannerImage}
                      alt={title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        )
      })}

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
                <CallButton variant="dark" />
              </div>
            </div>
            <div>
              <ContactForm page={title} />
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
