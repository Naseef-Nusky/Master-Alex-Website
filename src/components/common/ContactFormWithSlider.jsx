import ContactForm from './ContactForm'
import ServiceImageSlider from './ServiceImageSlider'

export default function ContactFormWithSlider({
  heading,
  headingClassName = 'text-lg font-bold text-master-purple mb-6',
  formProps = {},
  className = '',
  sliderClassName = 'w-full max-w-none mx-auto lg:mx-auto',
}) {
  return (
    <div className={className}>
      {heading && <h2 className={headingClassName}>{heading}</h2>}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-start">
        <ContactForm {...formProps} />
        <ServiceImageSlider className={sliderClassName} />
      </div>
    </div>
  )
}
