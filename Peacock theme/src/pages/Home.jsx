import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Innovating for a Safer, Healthier, Cleaner Future</h1>
            <p className="hero-subtitle">
              A global group of life-saving technology companies making critical situations safer with innovative solutions across Safety, Healthcare, and Environmental sectors.
            </p>
            <div className="hero-buttons">
              <Link to="/our-companies" className="btn btn-primary">Explore Our Companies</Link>
              <Link to="/how-we-grow" className="btn btn-secondary">Our Approach</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section overview">
        <div className="container">
          <h2 className="section-title">What We Stand For</h2>
          <p className="section-subtitle">
            We are a global group of companies providing life-saving and life-enhancing technologies across critical sectors.
          </p>
          
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">🛡️</div>
              <h3>Safety</h3>
              <p>Protecting lives with advanced safety detection and emergency response systems.</p>
            </div>
            <div className="card">
              <div className="card-icon">❤️</div>
              <h3>Healthcare</h3>
              <p>Improving patient outcomes with medical technology and diagnostic solutions.</p>
            </div>
            <div className="card">
              <div className="card-icon">🌍</div>
              <h3>Environmental & Analysis</h3>
              <p>Ensuring environmental sustainability and analytical precision for a cleaner world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h2 className="stat-number">40+</h2>
              <p>Global Companies</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number">8,000+</h2>
              <p>Employees Worldwide</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number">150+</h2>
              <p>Countries Served</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number">50+</h2>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                We grow a unique group of businesses focused on making the world safer, healthier, and more sustainable through innovative technology.
              </p>
              <p>
                Our decentralized model empowers entrepreneurial leaders to drive growth while maintaining the agility and focus that made their businesses successful.
              </p>
              <Link to="/who-we-are" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <span>Innovation in Action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Journey</h2>
            <p>Discover opportunities to be part of our mission to create a better future.</p>
            <div className="cta-buttons">
              <Link to="/careers" className="btn btn-primary">Explore Careers</Link>
              <Link to="/investors" className="btn btn-secondary">Investor Relations</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

