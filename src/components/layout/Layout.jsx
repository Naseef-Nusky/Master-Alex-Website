import { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
import Disclaimer from '../common/Disclaimer'

export default function Layout({ children, showDisclaimer = true, heroBehindHeader = false }) {
  const childArray = Children.toArray(children)
  const hero = heroBehindHeader ? childArray[0] : null
  const mainContent = heroBehindHeader ? childArray.slice(1) : childArray

  return (
    <div className="min-h-screen flex flex-col">
      {heroBehindHeader ? (
        <div className="relative">
          <Header overlay />
          {hero}
        </div>
      ) : (
        <Header />
      )}

      <main className="flex-1">{mainContent}</main>
      {showDisclaimer && <Disclaimer />}
      <Footer />
    </div>
  )
}
