import React from 'react';
import './HowWeGrow.css';

const HowWeGrow = () => {
  return (
    <div className="how-we-grow">
      <section className="page-hero">
        <div className="container">
          <h1>How We Grow</h1>
          <p>Our proven business model driving sustainable, long-term growth</p>
        </div>
      </section>

      {/* Business Model */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Business Model</h2>
          <p className="section-subtitle">
            We operate a unique decentralized model that combines the benefits of scale with entrepreneurial agility
          </p>

          <div className="model-grid">
            <div className="model-card">
              <div className="model-number">01</div>
              <h3>Entrepreneurial Leadership</h3>
              <p>
                Each company is led by its own management team with deep expertise in their markets. 
                They maintain autonomy in day-to-day operations and strategic decisions.
              </p>
            </div>
            <div className="model-card">
              <div className="model-number">02</div>
              <h3>Group Support</h3>
              <p>
                The group provides strategic guidance, financial resources, and shared services, 
                enabling companies to focus on what they do best.
              </p>
            </div>
            <div className="model-card">
              <div className="model-number">03</div>
              <h3>Long-Term Focus</h3>
              <p>
                We invest for the long term, supporting sustainable growth rather than short-term gains. 
                This approach builds lasting value for all stakeholders.
              </p>
            </div>
            <div className="model-card">
              <div className="model-number">04</div>
              <h3>Continuous Innovation</h3>
              <p>
                Companies invest heavily in R&D to stay ahead of market needs and maintain 
                technological leadership in their sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section sectors-section">
        <div className="container">
          <h2 className="section-title">Our Sectors</h2>
          <p className="section-subtitle">
            We operate across three complementary sectors, each addressing critical global needs
          </p>

          <div className="sectors-showcase">
            <div className="sector-showcase">
              <div className="sector-visual safety-visual">
                <span className="sector-emoji">🛡️</span>
              </div>
              <div className="sector-details">
                <h3>Safety</h3>
                <p className="sector-desc">
                  Our safety companies protect lives and assets through advanced detection, 
                  alarm, and emergency response systems. From fire safety to gas detection, 
                  our technologies are deployed in critical infrastructure worldwide.
                </p>
                <ul className="sector-list">
                  <li>Fire detection and alarm systems</li>
                  <li>Gas and flame detection</li>
                  <li>Emergency evacuation systems</li>
                  <li>Access control and security</li>
                </ul>
              </div>
            </div>

            <div className="sector-showcase reverse">
              <div className="sector-visual healthcare-visual">
                <span className="sector-emoji">❤️</span>
              </div>
              <div className="sector-details">
                <h3>Healthcare</h3>
                <p className="sector-desc">
                  We develop medical technologies that enable early disease detection, 
                  improve diagnostic accuracy, and enhance patient outcomes. Our solutions 
                  serve hospitals, clinics, and laboratories globally.
                </p>
                <ul className="sector-list">
                  <li>Medical imaging equipment</li>
                  <li>Laboratory diagnostics</li>
                  <li>Patient monitoring systems</li>
                  <li>Ophthalmic instruments</li>
                </ul>
              </div>
            </div>

            <div className="sector-showcase">
              <div className="sector-visual environmental-visual">
                <span className="sector-emoji">🌍</span>
              </div>
              <div className="sector-details">
                <h3>Environmental & Analysis</h3>
                <p className="sector-desc">
                  Our environmental companies provide analytical instruments and monitoring 
                  systems that ensure water safety, air quality, and environmental compliance, 
                  protecting public health and the planet.
                </p>
                <ul className="sector-list">
                  <li>Water quality analysis</li>
                  <li>Air quality monitoring</li>
                  <li>Environmental testing</li>
                  <li>Process control systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="section strategy-section">
        <div className="container">
          <h2 className="section-title">Our Growth Strategy</h2>
          <div className="strategy-content">
            <div className="strategy-pillar">
              <div className="pillar-icon">📈</div>
              <h3>Organic Growth</h3>
              <p>
                Our primary growth driver is organic expansion through innovation, 
                new product development, and geographic expansion. We invest consistently 
                in R&D and sales capabilities.
              </p>
            </div>
            <div className="strategy-pillar">
              <div className="pillar-icon">🤝</div>
              <h3>Strategic Acquisitions</h3>
              <p>
                We complement organic growth with selective acquisitions of high-quality 
                companies that fit our strategic criteria and share our values.
              </p>
            </div>
            <div className="strategy-pillar">
              <div className="pillar-icon">🌐</div>
              <h3>Market Expansion</h3>
              <p>
                We support our companies in entering new geographic markets and adjacent 
                sectors, leveraging group resources and local expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="section metrics-section">
        <div className="container">
          <h2 className="section-title">Track Record</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">15%+</div>
              <div className="metric-label">Average Annual Revenue Growth</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">50+</div>
              <div className="metric-label">Years of Consistent Growth</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">20%+</div>
              <div className="metric-label">ROCE (Return on Capital)</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">100+</div>
              <div className="metric-label">Successful Acquisitions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeGrow;

