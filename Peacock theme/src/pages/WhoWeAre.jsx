import React from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Who We Are</h1>
          <p>Discover our purpose, values, and the journey that defines us</p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-text">
              <h2>Our Purpose</h2>
              <p>
                We exist to make the world safer, healthier, and more sustainable. Every day, our companies develop and deliver innovative technologies that protect lives, improve health outcomes, and safeguard the environment.
              </p>
              <p>
                From fire safety systems that protect buildings and their occupants, to medical devices that enable early disease detection, to water analysis systems that ensure safe drinking water – our technologies make a real difference in people's lives.
              </p>
            </div>
            <div className="content-visual">
              <div className="visual-box purpose-visual">
                <h3>Our Impact</h3>
                <p>Making critical situations safer every day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            These core values guide everything we do and shape our culture across all companies
          </p>
          
          <div className="grid grid-2">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Entrepreneurial Spirit</h3>
              <p>We empower autonomous leaders to drive innovation and growth while maintaining agility and focus.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Customer Focus</h3>
              <p>We listen closely to our customers and work collaboratively to solve their most critical challenges.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>We are committed to delivering exceptional quality and continuous improvement in everything we do.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h3>Innovation</h3>
              <p>We invest in research and development to create breakthrough technologies that address emerging needs.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Integrity</h3>
              <p>We conduct our business ethically, with transparency and accountability in all our relationships.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We are committed to responsible business practices that benefit our communities and the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Are</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>A Decentralized Group</h3>
              <p>
                We operate a unique decentralized model that preserves the entrepreneurial culture of our companies while providing them with the resources and support of a larger organization.
              </p>
            </div>
            <div className="info-card">
              <h3>Long-Term Focused</h3>
              <p>
                We take a patient, long-term approach to building sustainable businesses. Our strategy is focused on organic growth complemented by strategic acquisitions.
              </p>
            </div>
            <div className="info-card">
              <h3>Globally Connected</h3>
              <p>
                With operations in over 150 countries, we serve customers worldwide while maintaining strong local presence and expertise in key markets.
              </p>
            </div>
            <div className="info-card">
              <h3>Technology Leaders</h3>
              <p>
                Our companies are recognized leaders in their respective markets, known for innovation, quality, and customer service excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section history-section">
        <div className="container">
          <h2 className="section-title">Our History</h2>
          <p className="section-subtitle">
            Over 50 years of growth, innovation, and commitment to making the world safer
          </p>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>1970s - Foundation</h3>
                <p>Founded with a vision to build a group of specialist technology companies focused on safety and health protection.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>1980s-1990s - Growth</h3>
                <p>Expanded through strategic acquisitions and organic growth, building leading positions in fire safety and gas detection.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2000s - Diversification</h3>
                <p>Entered healthcare and environmental sectors, broadening our impact and technological capabilities.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2010s-Present - Innovation</h3>
                <p>Accelerated investment in digital technologies, IoT, and AI to deliver next-generation solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;

