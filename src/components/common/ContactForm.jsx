import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { submitContact } from '../../utils/submitContact'
import { validateContactForm } from '../../utils/validateContactForm'

function FormField({ label, labelClass, error, children }) {
  return (
    <div className="space-y-1.5">
      <label className={labelClass}>{label}</label>
      {children}
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  date: '',
  message: '',
  website: '',
}

export default function ContactForm({
  className = '',
  buttonLabel = 'Send Message',
  buttonClass = 'bg-master-gold hover:bg-master-gold-light text-master-dark',
  fields = ['name', 'email', 'phone', 'message'],
  showDate = false,
  dark = false,
  source = 'website',
  page = '',
}) {
  const navigate = useNavigate()
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isLoading = status === 'loading'

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.website) return

    const validationErrors = validateContactForm(form, { showDate })
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus('idle')
      return
    }

    setStatus('loading')
    setErrorMessage('')
    setErrors({})

    try {
      await submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        date: showDate ? form.date : '',
        source,
        page: page || window.location.pathname,
      })
      setForm(EMPTY_FORM)
      navigate('/thank-you', { replace: true })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message)
    }
  }

  const inputBase = dark
    ? 'w-full px-4 py-3 rounded-xl border bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-master-gold/50 focus:border-transparent transition-all'
    : 'w-full px-4 py-3 rounded-xl border bg-white text-master-purple placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-master-gold/40 focus:border-transparent transition-all'

  const inputClass = (field) =>
    `${inputBase} ${errors[field] ? 'border-red-400' : dark ? 'border-white/10' : 'border-gray-200'}`

  const labelClass = dark ? 'text-white/70 text-sm font-medium' : 'text-master-muted text-sm font-medium'

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-4 ${className}`}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(e) => updateField('website', e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      {fields.includes('name') && (
        <FormField label="Full Name" labelClass={labelClass} error={errors.name}>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            autoComplete="name"
            disabled={isLoading}
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            className={inputClass('name')}
            aria-invalid={Boolean(errors.name)}
          />
        </FormField>
      )}
      {fields.includes('email') && (
        <FormField label="Email" labelClass={labelClass} error={errors.email}>
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            autoComplete="email"
            disabled={isLoading}
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            className={inputClass('email')}
            aria-invalid={Boolean(errors.email)}
          />
        </FormField>
      )}
      {fields.includes('phone') && (
        <FormField label="Phone" labelClass={labelClass} error={errors.phone}>
          <input
            type="tel"
            name="phone"
            placeholder="+44 7XXX XXXXXX"
            autoComplete="tel"
            disabled={isLoading}
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className={inputClass('phone')}
            aria-invalid={Boolean(errors.phone)}
          />
        </FormField>
      )}
      {showDate && (
        <FormField label="Preferred Date" labelClass={labelClass} error={errors.date}>
          <input
            type="date"
            name="date"
            disabled={isLoading}
            value={form.date}
            onChange={(e) => updateField('date', e.target.value)}
            className={inputClass('date')}
            aria-invalid={Boolean(errors.date)}
          />
        </FormField>
      )}
      {fields.includes('message') && (
        <FormField label="Message" labelClass={labelClass} error={errors.message}>
          <textarea
            name="message"
            placeholder="How can we help you?"
            rows={4}
            disabled={isLoading}
            value={form.message}
            onChange={(e) => updateField('message', e.target.value)}
            className={`${inputClass('message')} resize-none`}
            aria-invalid={Boolean(errors.message)}
          />
        </FormField>
      )}

      {status === 'error' && errorMessage && (
        <p className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 ${buttonClass}`}
      >
        {isLoading ? 'Sending...' : buttonLabel}
      </button>
    </form>
  )
}
