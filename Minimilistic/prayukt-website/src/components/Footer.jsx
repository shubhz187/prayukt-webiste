import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-prayukt">PRAYUKT</span>
              <span className="logo-dot">.</span>
            </h3>
            <p className="footer-description">
              Driving innovation and excellence across multiple sectors. 
              Building the future through strategic growth and purposeful leadership.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/who-we-are">Who We Are</Link></li>
              <li><Link to="/our-companies">Our Companies</Link></li>
              <li><Link to="/how-we-grow">How We Grow</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/investors">Investors</Link></li>
              <li><Link to="/news">News & Media</Link></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-title">Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:info@prayukt.com">info@prayukt.com</a>
              </li>
              <li>
                <span className="contact-label">Phone:</span>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <span className="contact-label">Address:</span>
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Prayukt. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

