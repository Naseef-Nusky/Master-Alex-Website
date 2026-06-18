import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BookAppointment from './pages/BookAppointment'
import Services from './pages/Services'
import PsychicReading from './pages/PsychicReading'
import GetExLoveBack from './pages/GetExLoveBack'
import BlackMagicRemoval from './pages/BlackMagicRemoval'
import NegativeEnergyRemoval from './pages/NegativeEnergyRemoval'
import SpiritualHealing from './pages/SpiritualHealing'
import HusbandWifeProblems from './pages/HusbandWifeProblems'
import LoveSpellCaster from './pages/LoveSpellCaster'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/services" element={<Services />} />
      <Route path="/psychic-reading" element={<PsychicReading />} />
      <Route path="/get-ex-love-back" element={<GetExLoveBack />} />
      <Route path="/black-magic-removal" element={<BlackMagicRemoval />} />
      <Route path="/negative-energy-removal" element={<NegativeEnergyRemoval />} />
      <Route path="/spiritual-healing" element={<SpiritualHealing />} />
      <Route path="/husband-wife-problems" element={<HusbandWifeProblems />} />
      <Route path="/love-spell-caster" element={<LoveSpellCaster />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
    </Routes>
    </>
  )
}

export default App
