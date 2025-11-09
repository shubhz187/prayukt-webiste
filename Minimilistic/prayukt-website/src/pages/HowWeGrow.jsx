import './HowWeGrow.css';

function HowWeGrow() {
  return (
    <div className="how-we-grow">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-title fade-in">
            How We <span className="gradient-text">Grow</span>
          </h1>
          <p className="page-subtitle">
            Strategic growth through innovation, acquisition, and organic expansion
          </p>
        </div>
      </section>

      {/* Growth Model */}
      <section className="growth-model-section">
        <div className="growth-container">
          <span className="section-tag">Growth Strategy</span>
          <h2 className="section-title">
            Our Proven <span className="gradient-text">Growth Model</span>
          </h2>
          <p className="section-description">
            Prayukt's growth strategy is built on three fundamental pillars that have 
            consistently delivered sustainable, long-term value for our stakeholders.
          </p>

          <div className="growth-pillars">
            <div className="pillar-card">
              <div className="pillar-number">01</div>
              <h3>Organic Growth</h3>
              <p>
                We invest heavily in R&D, product innovation, and market expansion 
                to drive organic growth across our portfolio companies.
              </p>
              <ul className="pillar-list">
                <li>Innovation-led product development</li>
                <li>Market share expansion</li>
                <li>Geographic expansion</li>
                <li>Customer base diversification</li>
              </ul>
            </div>

            <div className="pillar-card">
              <div className="pillar-number">02</div>
              <h3>Strategic Acquisitions</h3>
              <p>
                We acquire companies that complement our portfolio, expand our 
                capabilities, and accelerate our growth in key markets.
              </p>
              <ul className="pillar-list">
                <li>Targeted market expansion</li>
                <li>Technology acquisition</li>
                <li>Talent and expertise</li>
                <li>Synergy realization</li>
              </ul>
            </div>

            <div className="pillar-card">
              <div className="pillar-number">03</div>
              <h3>Operational Excellence</h3>
              <p>
                Continuous improvement in operations, efficiency, and productivity 
                drives sustainable growth and competitive advantage.
              </p>
              <ul className="pillar-list">
                <li>Process optimization</li>
                <li>Digital transformation</li>
                <li>Supply chain excellence</li>
                <li>Cost leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="sectors-section">
        <div className="sectors-container">
          <span className="section-tag">Market Sectors</span>
          <h2 className="section-title">Operating Across Three Key Sectors</h2>
          
          <div className="sectors-grid">
            <div className="sector-card">
              <div className="sector-header">
                <span className="sector-icon">🛡️</span>
                <h3>Safety</h3>
              </div>
              <div className="sector-content">
                <p className="sector-description">
                  Leading provider of safety and detection systems protecting people 
                  and assets in hazardous environments.
                </p>
                <div className="sector-stats">
                  <div className="sector-stat">
                    <span className="stat-label">Market Share</span>
                    <span className="stat-value">35%</span>
                  </div>
                  <div className="sector-stat">
                    <span className="stat-label">Growth Rate</span>
                    <span className="stat-value">12% YoY</span>
                  </div>
                </div>
                <div className="sector-markets">
                  <span className="market-tag">Fire Detection</span>
                  <span className="market-tag">Gas Detection</span>
                  <span className="market-tag">Emergency Response</span>
                  <span className="market-tag">Industrial Safety</span>
                </div>
              </div>
            </div>

            <div className="sector-card">
              <div className="sector-header">
                <span className="sector-icon">❤️</span>
                <h3>Healthcare</h3>
              </div>
              <div className="sector-content">
                <p className="sector-description">
                  Innovative medical technology solutions improving patient outcomes 
                  and healthcare delivery worldwide.
                </p>
                <div className="sector-stats">
                  <div className="sector-stat">
                    <span className="stat-label">Market Share</span>
                    <span className="stat-value">28%</span>
                  </div>
                  <div className="sector-stat">
                    <span className="stat-label">Growth Rate</span>
                    <span className="stat-value">15% YoY</span>
                  </div>
                </div>
                <div className="sector-markets">
                  <span className="market-tag">Medical Imaging</span>
                  <span className="market-tag">Patient Monitoring</span>
                  <span className="market-tag">Diagnostics</span>
                  <span className="market-tag">Telehealth</span>
                </div>
              </div>
            </div>

            <div className="sector-card">
              <div className="sector-header">
                <span className="sector-icon">🌿</span>
                <h3>Environmental & Analysis</h3>
              </div>
              <div className="sector-content">
                <p className="sector-description">
                  Advanced environmental monitoring and analysis solutions for 
                  a sustainable future.
                </p>
                <div className="sector-stats">
                  <div className="sector-stat">
                    <span className="stat-label">Market Share</span>
                    <span className="stat-value">32%</span>
                  </div>
                  <div className="sector-stat">
                    <span className="stat-label">Growth Rate</span>
                    <span className="stat-value">18% YoY</span>
                  </div>
                </div>
                <div className="sector-markets">
                  <span className="market-tag">Water Treatment</span>
                  <span className="market-tag">Air Quality</span>
                  <span className="market-tag">Climate Monitoring</span>
                  <span className="market-tag">Emissions Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="criteria-section">
        <div className="criteria-container">
          <span className="section-tag">Investment Criteria</span>
          <h2 className="section-title">
            What We Look For in <span className="gradient-text">Acquisitions</span>
          </h2>
          
          <div className="criteria-grid">
            <div className="criteria-card">
              <h3>Market Leadership</h3>
              <p>Companies with strong market positions and growth potential</p>
            </div>
            <div className="criteria-card">
              <h3>Innovation Focus</h3>
              <p>Technology-driven businesses with differentiated products</p>
            </div>
            <div className="criteria-card">
              <h3>Sustainable Growth</h3>
              <p>Proven track record of profitable, sustainable growth</p>
            </div>
            <div className="criteria-card">
              <h3>Strategic Fit</h3>
              <p>Alignment with our portfolio and growth strategy</p>
            </div>
            <div className="criteria-card">
              <h3>Strong Management</h3>
              <p>Experienced leadership teams with clear vision</p>
            </div>
            <div className="criteria-card">
              <h3>Cultural Alignment</h3>
              <p>Shared values and commitment to excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="performance-section">
        <div className="performance-container">
          <span className="section-tag">Track Record</span>
          <h2 className="section-title">Consistent Performance Delivery</h2>
          
          <div className="performance-stats">
            <div className="performance-card">
              <div className="performance-value">25+</div>
              <div className="performance-label">Years of Growth</div>
            </div>
            <div className="performance-card">
              <div className="performance-value">40+</div>
              <div className="performance-label">Acquisitions Completed</div>
            </div>
            <div className="performance-card">
              <div className="performance-value">15%</div>
              <div className="performance-label">Average Annual Growth</div>
            </div>
            <div className="performance-card">
              <div className="performance-value">95%</div>
              <div className="performance-label">Customer Retention</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowWeGrow;

