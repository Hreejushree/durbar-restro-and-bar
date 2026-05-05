import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import barImg from '../assets/bar.webp'
import bandImg from '../assets/band.jpg'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const els = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>

      <section className="page-hero" style={{ backgroundImage: `url(${barImg})` }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-tag">Who We Are</span>
          <h1 className="section-title">About Us</h1>
          <p className="breadcrumb"><a href="/">Home</a> / About</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <div className="fade-in">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Born from Passion, Built on Hospitality</h2>
              <div className="divider" style={{ justifyContent: 'flex-start', marginLeft: 0 }}><span>✦</span></div>
              <p>Durbar Restro is a vibrant restaurant and bar dedicated to delivering great food, warm hospitality, and memorable experiences. Inspired by the richness of local flavors and modern dining culture, we bring together taste, comfort, and ambiance under one roof.</p>
              <p>Our menu features a carefully curated selection of delicious dishes and refreshing beverages, prepared using quality ingredients and served with care. Whether you're joining us for a family meal, a casual get-together with friends, or an evening of live music and entertainment, Durbar Restro offers the perfect setting.</p>
              <p>At Durbar Restro, we believe dining is more than just food, it's about connection, celebration, and enjoyment. With a welcoming atmosphere, attentive service, and a passion for excellence, we strive to make every visit special.</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '28px' }}>Visit Us Today</Link>
            </div>
            <div className="about-story-imgs fade-in">
              <img src={barImg} alt="Inside Durbar Restro" className="story-img-main" />
              <img src={bandImg} alt="Durbar Restro Exterior" className="story-img-secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider"><span>✦</span></div>
          </div>
          <div className="values-grid">
            {[
              { icon: '🍽', title: 'Quality First', desc: 'We source the finest ingredients and prepare each dish with precision, love, and unwavering commitment to quality.' },
              { icon: '🤝', title: 'Genuine Hospitality', desc: 'Every guest who walks through our doors is family. We go above and beyond to ensure your comfort and happiness.' },
              { icon: '🌿', title: 'Local Roots', desc: 'We celebrate Nepal\'s rich culinary heritage, supporting local farmers and embracing traditional flavors with a modern twist.' },
              { icon: '🎵', title: 'Vibrant Experiences', desc: 'From live music nights to festive celebrations, we curate experiences that go beyond the dining table.' },
              { icon: '♻', title: 'Sustainability', desc: 'We are committed to responsible practices — minimizing waste, energy efficiency, and caring for our community.' },
              { icon: '⭐', title: 'Continuous Excellence', desc: 'We never stop improving. Every plate, every interaction is an opportunity to be better than yesterday.' },
            ].map(v => (
              <div className="value-card fade-in" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="cta-strip-about">
        <div className="container text-center">
          <span className="section-tag">Come Visit Us</span>
          <h2 className="section-title">Experience the Durbar Difference</h2>
          <p style={{ color: 'var(--light-muted)', marginBottom: '34px' }}>Book a table, explore our menu, or just walk in — we're always happy to see you.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact#reservation" className="btn btn-primary">📅 Reserve a Table</Link>
            <Link to="/menu" className="btn btn-outline">🍽 View Full Menu</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
