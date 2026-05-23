import { LightboxProvider } from './context/LightboxContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import RoomsPricing from './components/RoomsPricing'
import Facilities from './components/Facilities'
import Gallery from './components/Gallery'
import MapPlaceholder from './components/MapPlaceholder'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Lightbox from './components/Lightbox'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <LightboxProvider>
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <RoomsPricing />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Facilities />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Gallery />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <MapPlaceholder />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Contact />
        </ScrollReveal>
      </main>
      <ScrollReveal delay={60}>
        <Footer />
      </ScrollReveal>
      <WhatsAppFloat />
      <Lightbox />
    </LightboxProvider>
  )
}

export default App
