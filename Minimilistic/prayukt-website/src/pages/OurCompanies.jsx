import './OurCompanies.css';

function OurCompanies() {
  const companies = {
    safety: [
      { name: 'SecureVision', description: 'Advanced fire and gas detection systems' },
      { name: 'SafetyFirst Technologies', description: 'Industrial safety equipment and monitoring' },
      { name: 'Guardian Systems', description: 'Emergency response and evacuation solutions' },
      { name: 'ProTech Safety', description: 'Personal protective equipment and wearables' },
      { name: 'AlertTech', description: 'Hazard detection and warning systems' },
      { name: 'RescueTech', description: 'Life-saving equipment and emergency tools' },
      { name: 'SafeZone', description: 'Perimeter security and access control' },
      { name: 'VitalWatch', description: 'Worker health and safety monitoring' }
    ],
    healthcare: [
      { name: 'MedTech Innovations', description: 'Advanced medical imaging solutions' },
      { name: 'LifeCare Systems', description: 'Patient monitoring and diagnostic tools' },
      { name: 'BioSense', description: 'Biosensor technology and analytics' },
      { name: 'HealthTech Plus', description: 'Telehealth and digital health platforms' },
      { name: 'CureTech', description: 'Pharmaceutical research and development' },
      { name: 'WellnessHub', description: 'Preventive care and wellness solutions' }
    ],
    environmental: [
      { name: 'EcoSense', description: 'Environmental monitoring and analysis' },
      { name: 'CleanTech Solutions', description: 'Water purification and treatment systems' },
      { name: 'GreenGuard', description: 'Air quality monitoring and control' },
      { name: 'EarthWatch', description: 'Climate and weather monitoring systems' },
      { name: 'PureFlow', description: 'Industrial emissions control and reduction' },
      { name: 'EnviroTech', description: 'Sustainable energy solutions' }
    ]
  };

  return (
    <div className="our-companies">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-title fade-in">
            Our <span className="gradient-text">Companies</span>
          </h1>
          <p className="page-subtitle">
            A portfolio of world-class businesses driving innovation across three key sectors
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="overview-section">
        <div className="overview-container">
          <div className="overview-content">
            <span className="section-tag">Portfolio Overview</span>
            <h2 className="section-title">
              Leading Innovation in <span className="gradient-text">Safety, Healthcare & Environment</span>
            </h2>
            <p className="section-description">
              Our diverse portfolio of subsidiary companies represents the best in their respective 
              fields. Each company operates with autonomy while benefiting from our global resources, 
              expertise, and commitment to excellence.
            </p>
          </div>
          
          <div className="stats-row">
            <div className="stat-box">
              <h3 className="stat-value">20+</h3>
              <p className="stat-label">Portfolio Companies</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-value">50+</h3>
              <p className="stat-label">Countries</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-value">15K+</h3>
              <p className="stat-label">Employees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Division */}
      <section className="division-section">
        <div className="division-container">
          <div className="division-header">
            <span className="division-icon">🛡️</span>
            <div>
              <span className="section-tag">Safety Division</span>
              <h2 className="division-title">Protecting Lives, Every Day</h2>
              <p className="division-description">
                Our safety companies develop cutting-edge solutions that protect millions of people 
                worldwide in industrial, commercial, and residential settings.
              </p>
            </div>
          </div>
          
          <div className="companies-grid">
            {companies.safety.map((company, index) => (
              <div key={index} className="company-card card-3d glass-effect holographic">
                <h3 className="company-name">{company.name}</h3>
                <p className="company-description">{company.description}</p>
                <a href="#" className="company-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Division */}
      <section className="division-section alt">
        <div className="division-container">
          <div className="division-header">
            <span className="division-icon">❤️</span>
            <div>
              <span className="section-tag">Healthcare Division</span>
              <h2 className="division-title">Advancing Medical Excellence</h2>
              <p className="division-description">
                Our healthcare companies pioneer innovative medical technologies that improve 
                patient outcomes and transform healthcare delivery globally.
              </p>
            </div>
          </div>
          
          <div className="companies-grid">
            {companies.healthcare.map((company, index) => (
              <div key={index} className="company-card card-3d glass-effect holographic">
                <h3 className="company-name">{company.name}</h3>
                <p className="company-description">{company.description}</p>
                <a href="#" className="company-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Division */}
      <section className="division-section">
        <div className="division-container">
          <div className="division-header">
            <span className="division-icon">🌿</span>
            <div>
              <span className="section-tag">Environmental Division</span>
              <h2 className="division-title">Building a Sustainable Future</h2>
              <p className="division-description">
                Our environmental companies lead the way in creating solutions for a cleaner, 
                more sustainable planet through innovative monitoring and treatment technologies.
              </p>
            </div>
          </div>
          
          <div className="companies-grid">
            {companies.environmental.map((company, index) => (
              <div key={index} className="company-card card-3d glass-effect holographic">
                <h3 className="company-name">{company.name}</h3>
                <p className="company-description">{company.description}</p>
                <a href="#" className="company-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="companies-cta">
        <div className="cta-container">
          <h2 className="cta-title">Interested in Partnering?</h2>
          <p className="cta-description">
            Explore partnership opportunities across our portfolio of companies
          </p>
          <a href="#" className="btn btn-large">Contact Our Team</a>
        </div>
      </section>
    </div>
  );
}

export default OurCompanies;

