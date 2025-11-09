import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content fade-in parallax-layer">
            <h1 className="hero-title">
              Empowering Innovation,
              <span className="gradient-text shimmer-text neon-glow"> Driving Excellence</span>
            </h1>
            <p className="hero-subtitle">
              Prayukt is a global leader in innovation and technology, delivering exceptional 
              solutions across multiple industries through our portfolio of world-class companies.
            </p>
            <div className="hero-cta">
              <Link to="/who-we-are" className="btn btn-primary holographic">
                Discover Our Story
              </Link>
              <Link to="/our-companies" className="btn btn-secondary">
                Explore Companies
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1 card-3d"></div>
            <div className="floating-card card-2 card-3d"></div>
            <div className="floating-card card-3 card-3d"></div>
            <div className="peacock-feather peacock-1"></div>
            <div className="peacock-feather peacock-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item slide-in card-3d glass-effect">
            <h3 className="stat-number shimmer-text">20+</h3>
            <p className="stat-label">Global Companies</p>
          </div>
          <div className="stat-item slide-in card-3d glass-effect" style={{ animationDelay: '0.1s' }}>
            <h3 className="stat-number shimmer-text">50+</h3>
            <p className="stat-label">Countries Worldwide</p>
          </div>
          <div className="stat-item slide-in card-3d glass-effect" style={{ animationDelay: '0.2s' }}>
            <h3 className="stat-number shimmer-text">15K+</h3>
            <p className="stat-label">Team Members</p>
          </div>
          <div className="stat-item slide-in card-3d glass-effect" style={{ animationDelay: '0.3s' }}>
            <h3 className="stat-number shimmer-text">$5B+</h3>
            <p className="stat-label">Annual Revenue</p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="purpose">
        <div className="purpose-container">
          <div className="purpose-content">
            <span className="section-tag">Our Purpose</span>
            <h2 className="section-title">
              Building a Safer, Cleaner, <span className="gradient-text">Healthier Future</span>
            </h2>
            <p className="section-description">
              At Prayukt, we believe in the power of innovation to transform lives. Our diverse 
              portfolio of companies works tirelessly to solve critical challenges in safety, 
              healthcare, and environmental sustainability.
            </p>
            <Link to="/who-we-are" className="btn btn-text">
              Learn More About Us →
            </Link>
          </div>
          <div className="purpose-grid">
            <div className="purpose-card card-3d holographic">
              <div className="card-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>Protecting lives through innovative safety solutions and technologies</p>
            </div>
            <div className="purpose-card card-3d holographic">
              <div className="card-icon">🌿</div>
              <h3>Environmental Care</h3>
              <p>Leading the way in sustainable environmental analysis and protection</p>
            </div>
            <div className="purpose-card card-3d holographic">
              <div className="card-icon">❤️</div>
              <h3>Healthcare Innovation</h3>
              <p>Advancing medical technology for better patient outcomes worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Preview */}
      <section className="companies-preview">
        <div className="companies-container">
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">
            World-Class <span className="gradient-text">Companies</span>
          </h2>
          <p className="section-description">
            Our subsidiary companies are leaders in their respective fields, driving innovation 
            and excellence across multiple sectors.
          </p>
          <div className="companies-grid">
            <div className="company-card card-3d glass-effect">
              <h3>Safety Division</h3>
              <p>8 companies protecting millions of lives daily</p>
            </div>
            <div className="company-card card-3d glass-effect">
              <h3>Healthcare Division</h3>
              <p>6 companies advancing medical technology</p>
            </div>
            <div className="company-card card-3d glass-effect">
              <h3>Environmental Division</h3>
              <p>6 companies leading sustainability efforts</p>
            </div>
          </div>
          <Link to="/our-companies" className="btn btn-primary">
            View All Companies
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Join Our Journey?</h2>
          <p className="cta-description">
            Explore career opportunities and become part of our global team
          </p>
          <Link to="/careers" className="btn btn-large">
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

