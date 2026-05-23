import { PHONES, WHATSAPP_PRIMARY, LOCATION, PG_NAME } from '../constants/site'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{PG_NAME}</span>
          <p>Girls PG · {LOCATION}</p>
          <p className="footer__tagline">AC Rooms · Fully Furnished</p>
        </div>
        <div className="footer__links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer__contact">
          {PHONES.map((p) => (
            <a key={p.number} href={`tel:+91${p.number}`}>
              +91 {p.number}
            </a>
          ))}
          <a href={WHATSAPP_PRIMARY} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {year} {PG_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
