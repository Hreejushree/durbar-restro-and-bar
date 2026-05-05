import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'
import logoImg from '../assets/logo.jpg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
          <img src={logoImg} className="nav-logo-img" alt="Durbar Restro Logo" />
          <div className="nav-logo-text">
            <span className="brand">Durbar Restro</span>
            <span className="tagline">Restaurant &amp; Bar</span>
          </div>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/contact#reservation" className="nav-reserve">Reserve a Table</NavLink></li>
        </ul>

        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {[['/', 'Home'], ['/menu', 'Menu'], ['/about', 'About'], ['/contact', 'Contact']].map(([path, label]) => (
          <NavLink key={path} to={path} end={path === '/'} onClick={() => setMobileOpen(false)}>{label}</NavLink>
        ))}
        <Link to="/contact#reservation" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Reserve a Table</Link>
      </div>
    </>
  )
}
