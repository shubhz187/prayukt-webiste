import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-prayukt">PRAYUKT</span>
          <span className="logo-dot">.</span>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/who-we-are" 
              className={`nav-link ${isActive('/who-we-are') ? 'active' : ''}`}
            >
              Who We Are
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/our-companies" 
              className={`nav-link ${isActive('/our-companies') ? 'active' : ''}`}
            >
              Our Companies
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/how-we-grow" 
              className={`nav-link ${isActive('/how-we-grow') ? 'active' : ''}`}
            >
              How We Grow
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/investors" 
              className={`nav-link ${isActive('/investors') ? 'active' : ''}`}
            >
              Investors
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/news" 
              className={`nav-link ${isActive('/news') ? 'active' : ''}`}
            >
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/careers" 
              className={`nav-link ${isActive('/careers') ? 'active' : ''}`}
            >
              Careers
            </Link>
          </li>
        </ul>

        <Link to="/contact" className="nav-cta">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

