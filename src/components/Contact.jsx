import { useState } from 'react'
import {
  PHONES,
  LOCATION,
  PG_NAME,
  GOOGLE_MAPS_URL,
  CONTACT_EMAIL,
} from '../constants/site'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
          _subject: `New visit enquiry — ${PG_NAME}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) throw new Error('Send failed')

      setStatus('success')
      setForm({ name: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Book a Visit Today</h2>
          <p className="section-desc">
            Fill the form below — your details will be sent to us by email so we can
            contact you back. You can also call or WhatsApp anytime.
          </p>
        </header>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__card card">
              <PhoneIcon />
              <div>
                <h3>Call / WhatsApp</h3>
                <div className="contact__phones">
                  {PHONES.map((p) => (
                    <a key={p.number} href={`tel:+91${p.number}`}>
                      +91 {p.number}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="contact__card card">
              <PinIcon />
              <div>
                <h3>Location</h3>
                <p>{LOCATION}, Haryana</p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__map-link"
                >
                  Get directions on Google Maps
                </a>
              </div>
            </div>
            <div className="contact__card card">
              <HomeIcon />
              <div>
                <h3>PG Name</h3>
                <p>{PG_NAME} — Girls PG (AC · Fully Furnished)</p>
              </div>
            </div>
            <div className="contact__whatsapp-row">
              {PHONES.map((p) => (
                <a
                  key={p.number}
                  href={`https://wa.me/${p.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp contact__whatsapp-btn"
                >
                  WhatsApp {p.number}
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form card" onSubmit={handleSubmit}>
            <h3 className="contact__form-title">Send us a message</h3>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                pattern="[0-9+\s-]{10,}"
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="I'd like to book a visit for an AC furnished room..."
                rows={4}
                required
                disabled={status === 'sending'}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Book a Visit'}
            </button>
            {status === 'success' && (
              <p className="contact__success" role="status">
                Thank you! Your details have been sent. We will contact you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__error" role="alert">
                Could not send message. Please call or WhatsApp us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1v-10.5z" />
    </svg>
  )
}

export default Contact
