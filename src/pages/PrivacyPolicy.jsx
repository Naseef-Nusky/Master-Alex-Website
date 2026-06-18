import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import { SITE } from '../constants/siteData'

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageBanner title="Privacy Policy" subtitle={`How ${SITE.name} collects, uses, and protects your information.`} />

      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <p className="text-master-muted leading-relaxed">
              This Privacy Policy explains how {SITE.name} collects, uses, maintains, and discloses information
              gathered from users of this website. It applies to all products and services offered by {SITE.name}.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-master-purple">How We Use Collected Information</h2>
            <p className="text-master-muted leading-relaxed">
              This website may collect and use users&apos; personal information for the following purposes:
            </p>

            <h3 className="text-lg font-semibold text-master-purple">To Process Transactions</h3>
            <p className="text-master-muted leading-relaxed">
              The information you provide will only be used to deliver the services you request. We do not share your
              personal data with outside parties except when necessary to provide those services.
            </p>

            <h3 className="text-lg font-semibold text-master-purple">To Send Periodic Emails</h3>
            <p className="text-master-muted leading-relaxed">
              Your email address will only be used to send updates, confirmations, and details related to the astrology
              and psychic services you have requested.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-master-purple">How We Protect Your Information</h2>
            <p className="text-master-muted leading-relaxed">
              We adopt appropriate practices for collecting, storing, and securing data against unauthorized access,
              alteration, disclosure, or destruction of personal details such as usernames, passwords, transaction
              information, and data stored on our site.
            </p>
            <p className="text-master-muted leading-relaxed">
              All sensitive and private data exchanged between our site and its users happens over an SSL-secured
              channel and is encrypted. Our website complies with standard industry security measures to ensure safe
              browsing and transactions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-master-purple">Third-Party Websites</h2>
            <p className="text-master-muted leading-relaxed">
              Our website may contain links to partners, suppliers, advertisers, or other third-party websites. These
              websites have their own privacy policies and practices. {SITE.name} is not responsible for the content or
              privacy practices of any third-party site. Accessing linked websites is at your own risk.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-master-purple">Changes to This Policy</h2>
            <p className="text-master-muted leading-relaxed">
              {SITE.name} may update this Privacy Policy at any time without prior notice. We encourage users to
              frequently check this page to stay informed about any updates or modifications.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-master-purple">Your Acceptance of These Terms</h2>
            <p className="text-master-muted leading-relaxed">
              By using this site, you signify your acceptance of this Privacy Policy. If you do not agree, please do
              not use this website. Continued use of this website after any updates will be considered your acceptance
              of those changes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-master-purple">Contact Us</h2>
            <p className="text-master-muted leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy, please contact us at:{' '}
              <a href={`mailto:${SITE.email}`} className="text-master-gold hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
