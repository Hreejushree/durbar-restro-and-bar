import { Link } from 'react-router-dom'
import './Footer.css'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo-col">
            <div className="footer-brand">Durbar Restro</div>
            <span className="footer-tagline">Serving Taste with Tradition.</span>
            <p>Where great food, warm hospitality, and unforgettable experiences come together. Join us and feel the Durbar difference.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/p/Durbar-Restro-Birtamode-61568338723204/" className="social-link" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWsLNrLvxMxnLdDVllGMrCRRhfsSbRjjfMDJgmjlxZBPmxkdDFJjlVNfdcVNFGWMVjGWSvQwG" className="social-link" aria-label="Email"><MdEmail /></a>

              <a href="https://www.instagram.com/restrodurbar/?hl=en" className="social-link" aria-label="Instagram"><FaInstagram /></a>


            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact#reservation">Reservation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Opening Hours</h4>
            <ul>
              <li><span className="day">Everyday</span><br /><span className="hours-time">10:00 AM – 12:00 AM</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item"><span>📍</span><span>Birtamode-4, Laxman Market, Jhapa, Nepal</span></div>
            <div className="footer-contact-item"><span>📞</span><a href="tel:+9779709051665">+977-9709051665</a></div>
            <div className="footer-contact-item"><span>✉️</span><a href="mailto:durbarrestro17@gmail.com">durbarrestro17@gmail.com</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Durbar Restro. All rights reserved.</span>
          <span>Made with ❤️ in Birtamode, Nepal</span>
        </div>
      </div>
    </footer>
  )
}
