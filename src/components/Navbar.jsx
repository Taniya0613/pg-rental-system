import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#facilities', label: 'Facilities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-icon">AH</span>
          <span className="navbar__logo-text">
            ARDHAYA <span>HOMES</span>
          </span>
        </a>

        <nav className="navbar__nav navbar__nav--desktop" aria-label="Main navigation">
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary navbar__cta">
            Book a Visit
          </a>
        </nav>
      </div>

      <nav className="navbar__mobile-strip" aria-label="Quick links">
        <ul className="navbar__mobile-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
