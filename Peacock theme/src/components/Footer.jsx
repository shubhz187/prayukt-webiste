import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PRAYUKT</h3>
            <p>A global leader in providing innovative solutions across multiple industries.</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Facebook">Facebook</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/who-we-are">Who We Are</Link></li>
              <li><Link to="/our-companies">Our Companies</Link></li>
              <li><Link to="/how-we-grow">How We Grow</Link></li>
              <li><Link to="/investors">Investors</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/news">News & Press</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Governance</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Corporate Headquarters</p>
            <p>123 Business Avenue</p>
            <p>New York, NY 10001</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Email: info@prayukt.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Prayukt. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

