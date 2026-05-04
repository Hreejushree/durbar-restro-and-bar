import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', guests: '2', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#reservation') {
      setTimeout(() => {
        const el = document.getElementById('reservation')
        if (el) {
          const yOffset = -80
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo(0, 0)
    }
    const els = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [location])

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSubmitted(true)
  }


  return (
    <main>

      <section className="page-hero" style={{ backgroundImage: "url('/src/assets/home page main.jpg')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-tag">Get In Touch</span>
          <h1 className="section-title">Contact Us</h1>
          <p className="breadcrumb"><a href="/">Home</a> / Contact</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            <div className="contact-form-wrap fade-in" id="reservation">
              {submitted ? (
                <div className="success-msg">
                  <div className="success-icon">🎉</div>
                  <h2>Reservation Received!</h2>
                  <p>Thank you, <strong>{form.name}</strong>! We've received your reservation request for <strong>{form.guests} guest{form.guests > 1 ? 's' : ''}</strong> on <strong>{form.date}</strong>. Our team will contact you shortly to confirm your table.</p>
                  <button className="btn btn-primary" style={{ marginTop: '24px' }} onClick={() => setSubmitted(false)}>Make Another Reservation</button>
                </div>
              ) : (
                <>
                  <h2>Reserve a Table</h2>
                  <p>Fill in your details and we'll confirm your reservation promptly.</p>
                  <form onSubmit={submit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input id="name" name="name" type="text" placeholder="Your Name" value={form.name} onChange={handle} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" name="phone" type="tel" placeholder="+977-XXXXXXXXXX" value={form.phone} onChange={handle} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handle} />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="date">Preferred Date & Time</label>
                        <input id="date" name="date" type="datetime-local" value={form.date} onChange={handle} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="guests">Number of Guests</label>
                        <select id="guests" name="guests" value={form.guests} onChange={handle}>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                          <option value="10+">10+ Guests</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Special Requests (Optional)</label>
                      <textarea id="message" name="message" placeholder="Any special requests, dietary requirements, or occasion info..." value={form.message} onChange={handle} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      📅 Confirm Reservation
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="contact-info-block fade-in">
              <h2>Visit Durbar Restro</h2>
              <p>We'd love to have you. Reach out by phone, email, or simply walk in — our doors are always open for you.</p>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <label>Our Location</label>
                  <span>Birtamode-4, Laxman Market, Jhapa, Nepal</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <label>Phone Number</label>
                  <a href="tel:+9779709051665">+977-9709051665</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <label>Email Address</label>
                  <a href="mailto:durbarrestro17@gmail.com">durbarrestro17@gmail.com</a>
                </div>
              </div>



            </div>

          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-header">
          <div className="container">
            <span className="section-tag">Find Us</span>
            <h2 className="section-title">We're Located at Birtamode-4</h2>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Durbar Restro Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.7484167882636!2d87.98300437481826!3d26.64830628314093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bbf1a0fc9edf%3A0x24e8e9e5fa63e6e!2sBirtamode%2C%20Jhapa!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  )
}
