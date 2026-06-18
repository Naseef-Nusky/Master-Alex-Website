import { DISCLAIMER } from '../../constants/siteData'

export default function Disclaimer() {
  return (
    <section className="bg-master-surface border-t border-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-master-muted mb-3">Disclaimer</p>
        <p className="text-sm text-master-muted leading-relaxed">{DISCLAIMER}</p>
      </div>
    </section>
  )
}
