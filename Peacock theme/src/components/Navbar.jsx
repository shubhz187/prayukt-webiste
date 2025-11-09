import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-text">PRAYUKT</span>
          </Link>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span className={isOpen ? 'open' : ''}></span>
            <span className={isOpen ? 'open' : ''}></span>
            <span className={isOpen ? 'open' : ''}></span>
          </button>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/who-we-are" onClick={closeMenu}>Who We Are</Link></li>
            <li><Link to="/our-companies" onClick={closeMenu}>Our Companies</Link></li>
            <li><Link to="/how-we-grow" onClick={closeMenu}>How We Grow</Link></li>
            <li><Link to="/investors" onClick={closeMenu}>Investors</Link></li>
            <li><Link to="/news" onClick={closeMenu}>News</Link></li>
            <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

