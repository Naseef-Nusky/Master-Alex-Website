import { useState } from 'react'

export default function ContactForm({
  className = '',
  buttonLabel = 'Send Message',
  buttonClass = 'bg-master-gold hover:bg-master-gold-light text-master-dark',
  fields = ['name', 'email', 'phone', 'message'],
  showDate = false,
  dark = false,
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly.')
    setForm({ name: '', email: '', phone: '', date: '', message: '' })
  }

  const inputClass = dark
    ? 'w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-master-gold/50 focus:border-transparent transition-all'
    : 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-master-purple placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-master-gold/40 focus:border-transparent transition-all'

  const labelClass = dark ? 'text-white/70 text-sm font-medium' : 'text-master-muted text-sm font-medium'

  const Field = ({ label, children }) => (
    <div className="space-y-1.5">
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {fields.includes('name') && (
        <Field label="Full Name">
          <input
            type="text"
            placeholder="John Doe"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </Field>
      )}
      {fields.includes('email') && (
        <Field label="Email">
          <input
            type="email"
            placeholder="you@email.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </Field>
      )}
      {fields.includes('phone') && (
        <Field label="Phone">
          <input
            type="tel"
            placeholder="+44 ..."
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
          />
        </Field>
      )}
      {showDate && (
        <Field label="Preferred Date">
          <input
            type="date"
            required
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className={inputClass}
          />
        </Field>
      )}
      {fields.includes('message') && (
        <Field label="Message">
          <textarea
            placeholder="How can we help you?"
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} resize-none`}
          />
        </Field>
      )}
      <button
        type="submit"
        className={`w-full py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg active:scale-[0.98] ${buttonClass}`}
      >
        {buttonLabel}
      </button>
    </form>
  )
}
