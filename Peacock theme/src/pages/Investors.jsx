import React from 'react';
import './Investors.css';

const Investors = () => {
  return (
    <div className="investors">
      <section className="page-hero">
        <div className="container">
          <h1>Investor Relations</h1>
          <p>Delivering sustainable growth and long-term value for our shareholders</p>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Financial Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">💰</div>
              <div className="highlight-value">$2.8B</div>
              <div className="highlight-label">Annual Revenue</div>
              <div className="highlight-change positive">+14% YoY</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">📊</div>
              <div className="highlight-value">$485M</div>
              <div className="highlight-label">Adjusted Profit</div>
              <div className="highlight-change positive">+12% YoY</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💵</div>
              <div className="highlight-value">24.5¢</div>
              <div className="highlight-label">Dividend per Share</div>
              <div className="highlight-change positive">+8% YoY</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">📈</div>
              <div className="highlight-value">21.2%</div>
              <div className="highlight-label">Return on Capital</div>
              <div className="highlight-change neutral">Maintained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Case */}
      <section className="section investment-section">
        <div className="container">
          <h2 className="section-title">Why Invest in Us</h2>
          <p className="section-subtitle">
            A proven track record of sustainable growth and shareholder value creation
          </p>

          <div className="investment-grid">
            <div className="investment-card">
              <h3>Resilient Business Model</h3>
              <p>
                Diversified portfolio across defensive, non-cyclical markets with strong 
                recurring revenue streams and long product lifecycles.
              </p>
            </div>
            <div className="investment-card">
              <h3>Market Leadership</h3>
              <p>
                Our companies hold leading positions in niche markets with high barriers 
                to entry and strong competitive advantages.
              </p>
            </div>
            <div className="investment-card">
              <h3>Consistent Growth</h3>
              <p>
                50+ years of uninterrupted growth through economic cycles, demonstrating 
                the resilience of our business model.
              </p>
            </div>
            <div className="investment-card">
              <h3>Strong Cash Generation</h3>
              <p>
                High cash conversion enables consistent dividend growth and strategic 
                investment in organic and acquisition opportunities.
              </p>
            </div>
            <div className="investment-card">
              <h3>Disciplined Capital Allocation</h3>
              <p>
                Rigorous investment criteria and proven integration capabilities deliver 
                attractive returns on deployed capital.
              </p>
            </div>
            <div className="investment-card">
              <h3>Sustainable Growth</h3>
              <p>
                Aligned with global megatrends in safety, health, and environmental 
                protection driving long-term demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Presentations */}
      <section className="section reports-section">
        <div className="container">
          <h2 className="section-title">Reports & Presentations</h2>
          
          <div className="reports-grid">
            <div className="report-category">
              <h3>Latest Reports</h3>
              <div className="report-list">
                <a href="#" className="report-item">
                  <div className="report-info">
                    <span className="report-title">Annual Report 2024</span>
                    <span className="report-date">March 2025</span>
                  </div>
                  <span className="report-icon">📄</span>
                </a>
                <a href="#" className="report-item">
                  <div className="report-info">
                    <span className="report-title">Q2 2025 Results</span>
                    <span className="report-date">November 2024</span>
                  </div>
                  <span className="report-icon">📄</span>
                </a>
                <a href="#" className="report-item">
                  <div className="report-info">
                    <span className="report-title">Q1 2025 Trading Update</span>
                    <span className="report-date">August 2024</span>
                  </div>
                  <span className="report-icon">📄</span>
                </a>
              </div>
            </div>

            <div className="report-category">
              <h3>Investor Presentations</h3>
              <div className="report-list">
                <a href="#" className="report-item">
                  <div className="report-info">
                    <span className="report-title">Full Year Results Presentation</span>
                    <span className="report-date">March 2025</span>
                  </div>
                  <span className="report-icon">📊</span>
                </a>
                <a href="#" className="report-item">
                  <div className="report-info">
                    <span className="report-title">Capital Markets Day 2024</span>
                    <span className="report-date">December 2024</span>
                  </div>
                  <span className="report-icon">📊</span>
                </a>
                <a href="#" className="report-item">
                  <div className="report-info">
                    <span className="report-title">Strategy Overview</span>
                    <span className="report-date">November 2024</span>
                  </div>
                  <span className="report-icon">📊</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Information */}
      <section className="section share-section">
        <div className="container">
          <h2 className="section-title">Share Information</h2>
          <div className="share-info-grid">
            <div className="share-info-card">
              <h4>Stock Exchange</h4>
              <p>NYSE: CORP</p>
            </div>
            <div className="share-info-card">
              <h4>Market Cap</h4>
              <p>$12.5 Billion</p>
            </div>
            <div className="share-info-card">
              <h4>52-Week High</h4>
              <p>$98.50</p>
            </div>
            <div className="share-info-card">
              <h4>52-Week Low</h4>
              <p>$76.20</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="section contact-ir-section">
        <div className="container">
          <div className="contact-ir-content">
            <h2>Investor Relations Contact</h2>
            <p>
              For investor inquiries, please contact our Investor Relations team
            </p>
            <div className="contact-details">
              <p><strong>Email:</strong> investors@prayukt.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
            <button className="btn btn-primary">Subscribe to Investor Alerts</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;

