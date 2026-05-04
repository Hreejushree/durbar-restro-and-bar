import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './Home.css'

function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  useFadeIn()
  const heroRef = useRef(null)
  useEffect(() => {
    const t = setTimeout(() => heroRef.current?.classList.add('loaded'), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <main>

      <section className="hero" ref={heroRef}>
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Welcome to</span>
          <h1 className="hero-title">
            Durbar Restro
            <span>Serving Taste with Tradition.</span>
          </h1>
          <p className="hero-desc">
            Where vibrant flavors, warm hospitality, and unforgettable experiences come together under one roof in the heart of Birtamode.
          </p>
          <div className="hero-btns">
            <Link to="/menu" className="btn btn-primary">🍽 Explore Menu</Link>
            <Link to="/contact#reservation" className="btn btn-outline">📅 Reserve a Table</Link>
          </div>
        </div>
        <div className="hero-badges">
          <div className="hero-badge"><div className="num">2+</div><div className="lbl">Years Serving</div></div>
          <div className="hero-badge"><div className="num">50+</div><div className="lbl">Menu Items</div></div>
          <div className="hero-badge"><div className="num">3K+</div><div className="lbl">Happy Guests</div></div>
        </div>

      </section>

      <section className="features-strip">
        <div className="container">
          <div className="features-grid">
            {[
              { icon: '🍴', title: 'Quality Cuisine', sub: 'Fresh, locally sourced ingredients' },
              { icon: '🎵', title: 'Live Entertainment', sub: 'Music & events every weekend' },
              { icon: '🥂', title: 'Premium Bar', sub: 'Cocktails, mocktails & spirits' },
              { icon: '❤️', title: 'Warm Hospitality', sub: 'Every guest feels like family' },
            ].map(f => (
              <div className="feature-item fade-in" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <strong>{f.title}</strong>
                  <span>{f.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Our Specialties</h2>
            <div className="divider"><span>✦</span></div>
            <p className="section-subtitle">From hearty Nepali classics to modern continental delights, our kitchen crafts every dish with passion.</p>
          </div>
          <div className="specialties-grid">
            {[
              { img: '/src/assets/momo.jpeg', tag: 'Signature', title: 'Authentic Cuisines', desc: 'Explore a rich variety of traditional Nepali dishes and modern favorites crafted with love.' },
              { img: '/src/assets/bartender.jpeg', tag: 'Bar', title: 'Premium Drinks', desc: 'From craft cocktails to refreshing mocktails, our bar offers the perfect companion.' },
              { img: '/src/assets/musician.jpg', tag: 'Entertainment', title: 'Live Music & Events', desc: 'Immerse yourself in electrifying live performances that make every evening special.' },
            ].map(s => (
              <div className="specialty-card fade-in" key={s.title}>
                <img src={s.img} alt={s.title} />
                <div className="specialty-overlay">
                  <span className="specialty-tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap fade-in">
              <img src="/src/assets/home page main.jpg" alt="Durbar Restro Exterior" />
              <div className="about-img-badge">
                <span className="big-num">2024</span>
                <span className="sm-txt">Est. Year</span>
              </div>
            </div>
            <div className="about-content fade-in">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>More Than Just a Meal</h2>
              <div className="divider" style={{ justifyContent: 'flex-start', marginLeft: 0 }}><span>✦</span></div>
              <p>Durbar Restro is a vibrant restaurant and bar dedicated to delivering great food, warm hospitality, and memorable experiences.</p>
              <p style={{ marginTop: '14px' }}>Inspired by the richness of local flavors and modern dining culture, we bring together taste, comfort, and ambiance under one roof.</p>
              <div className="about-stats">
                {[['50+', 'Menu Items'], ['3K+', 'Happy Guests'], ['2+', 'Years Serving']].map(([n, l]) => (
                  <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary">Discover Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">The Ambiance</span>
            <h2 className="section-title">Feel the Durbar Vibe</h2>
            <div className="divider"><span>✦</span></div>
            <p className="section-subtitle">Every corner of Durbar Restro tells a story. Come experience the warmth, the energy, and the magic.</p>
          </div>
          <div className="gallery-grid">
            {['/src/assets/cake.jpg', '/src/assets/biryani.jpg', '/src/assets/keema.webp', '/src/assets/platter.jpg', '/src/assets/bar1.jpeg'].map((src, i) => (
              <div className="gallery-item fade-in" key={i}>
                <img src={src} alt={`Gallery ${i + 1}`} />
                <div className="gallery-overlay">🔍</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Guest Reviews</span>
            <h2 className="section-title">What Our Guests Say</h2>
            <div className="divider"><span>✦</span></div>
          </div>
          <div className="testimonials-grid">
            {[
              { init: 'R', name: 'Rajan Sharma', loc: 'Birtamode', text: '"Absolutely incredible experience! The food was perfectly spiced, the cocktails were creative, and the live music made it a night to remember!"' },
              { init: 'P', name: 'Priya Thapa', loc: 'Jhapa', text: '"The ambiance is stunning — warm, cozy, and lively. We celebrated our anniversary here and the staff went above and beyond to make it special!"' },
              { init: 'A', name: 'Aarav Rai', loc: 'Damak', text: '"Best dal bhat in town and the cocktails are phenomenal! The live music on weekends is such a vibe. Durbar Restro delivers on every front!"' },
            ].map(t => (
              <div className="testimonial-card fade-in" key={t.name}>
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.init}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-loc">📍 {t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <span className="section-tag">Ready to Dine?</span>
          <h2 className="section-title">Experience Durbar Restro Tonight</h2>
          <p style={{ color: 'var(--light-muted)', marginBottom: '34px' }}>Book your table now and let us create a memory for you. Walk-ins welcome too!</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact#reservation" className="btn btn-primary">📅 Reserve a Table</Link>
            <Link to="/menu" className="btn btn-outline">🍽 View Full Menu</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
