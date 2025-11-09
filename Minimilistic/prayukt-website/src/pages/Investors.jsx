import './Investors.css';

function Investors() {
  return (
    <div className="investors">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-title fade-in">
            Investor <span className="gradient-text">Relations</span>
          </h1>
          <p className="page-subtitle">
            Delivering sustainable value through strategic growth and operational excellence
          </p>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="financial-section">
        <div className="financial-container">
          <span className="section-tag">Financial Highlights</span>
          <h2 className="section-title">Strong Performance, Sustainable Growth</h2>
          
          <div className="financial-grid">
            <div className="financial-card">
              <div className="financial-icon">📈</div>
              <div className="financial-value">$5.2B</div>
              <div className="financial-label">Annual Revenue</div>
              <div className="financial-change positive">+12% YoY</div>
            </div>
            <div className="financial-card">
              <div className="financial-icon">💰</div>
              <div className="financial-value">$850M</div>
              <div className="financial-label">Operating Profit</div>
              <div className="financial-change positive">+15% YoY</div>
            </div>
            <div className="financial-card">
              <div className="financial-icon">📊</div>
              <div className="financial-value">16.3%</div>
              <div className="financial-label">Operating Margin</div>
              <div className="financial-change positive">+1.2pp</div>
            </div>
            <div className="financial-card">
              <div className="financial-icon">💎</div>
              <div className="financial-value">$8.5B</div>
              <div className="financial-label">Market Cap</div>
              <div className="financial-change positive">+18% YoY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Filings */}
      <section className="reports-section">
        <div className="reports-container">
          <div className="reports-content">
            <span className="section-tag">Resources</span>
            <h2 className="section-title">
              Reports & <span className="gradient-text">Filings</span>
            </h2>
            <p className="section-description">
              Access our latest financial reports, presentations, and regulatory filings
            </p>
          </div>

          <div className="reports-grid">
            <div className="report-card">
              <div className="report-header">
                <h3>Annual Report 2024</h3>
                <span className="report-badge">Latest</span>
              </div>
              <p className="report-description">
                Our comprehensive annual report covering financial performance, strategy, 
                and outlook for the year ahead.
              </p>
              <div className="report-footer">
                <span className="report-date">March 2024</span>
                <a href="#" className="report-link">Download PDF →</a>
              </div>
            </div>

            <div className="report-card">
              <div className="report-header">
                <h3>Q4 2024 Results</h3>
                <span className="report-badge new">New</span>
              </div>
              <p className="report-description">
                Quarterly financial results and management discussion for Q4 2024
              </p>
              <div className="report-footer">
                <span className="report-date">February 2024</span>
                <a href="#" className="report-link">Download PDF →</a>
              </div>
            </div>

            <div className="report-card">
              <div className="report-header">
                <h3>ESG Report 2024</h3>
              </div>
              <p className="report-description">
                Our environmental, social, and governance commitments and progress
              </p>
              <div className="report-footer">
                <span className="report-date">January 2024</span>
                <a href="#" className="report-link">Download PDF →</a>
              </div>
            </div>

            <div className="report-card">
              <div className="report-header">
                <h3>Investor Presentation</h3>
              </div>
              <p className="report-description">
                Latest investor presentation and strategic overview
              </p>
              <div className="report-footer">
                <span className="report-date">March 2024</span>
                <a href="#" className="report-link">Download PDF →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Information */}
      <section className="stock-section">
        <div className="stock-container">
          <span className="section-tag">Stock Information</span>
          <h2 className="section-title">Prayukt Stock Performance</h2>
          
          <div className="stock-details">
            <div className="stock-card">
              <div className="stock-label">Exchange</div>
              <div className="stock-value">NYSE</div>
            </div>
            <div className="stock-card">
              <div className="stock-label">Ticker Symbol</div>
              <div className="stock-value">PRKT</div>
            </div>
            <div className="stock-card">
              <div className="stock-label">Current Price</div>
              <div className="stock-value">$124.50</div>
            </div>
            <div className="stock-card">
              <div className="stock-label">52 Week Range</div>
              <div className="stock-value">$98 - $135</div>
            </div>
          </div>

          <div className="stock-chart">
            <div className="chart-placeholder">
              <p>Stock price chart visualization</p>
              <span>5 Year Performance: +145%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dividend Information */}
      <section className="dividend-section">
        <div className="dividend-container">
          <div className="dividend-grid">
            <div className="dividend-info">
              <span className="section-tag">Dividends</span>
              <h2 className="section-title">Consistent Dividend Growth</h2>
              <p className="section-description">
                Prayukt has a strong track record of returning value to shareholders 
                through consistent dividend growth over the past 15 years.
              </p>
              <div className="dividend-stats">
                <div className="dividend-stat">
                  <div className="dividend-stat-value">$2.45</div>
                  <div className="dividend-stat-label">Annual Dividend per Share</div>
                </div>
                <div className="dividend-stat">
                  <div className="dividend-stat-value">1.97%</div>
                  <div className="dividend-stat-label">Dividend Yield</div>
                </div>
                <div className="dividend-stat">
                  <div className="dividend-stat-value">15</div>
                  <div className="dividend-stat-label">Years of Growth</div>
                </div>
              </div>
            </div>
            <div className="dividend-calendar">
              <h3>Upcoming Dividend Dates</h3>
              <div className="calendar-item">
                <span className="calendar-label">Ex-Dividend Date</span>
                <span className="calendar-date">May 15, 2024</span>
              </div>
              <div className="calendar-item">
                <span className="calendar-label">Record Date</span>
                <span className="calendar-date">May 17, 2024</span>
              </div>
              <div className="calendar-item">
                <span className="calendar-label">Payment Date</span>
                <span className="calendar-date">June 1, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="ir-contact-section">
        <div className="ir-contact-container">
          <h2 className="section-title">Investor Relations Contact</h2>
          <p className="section-description">
            Our investor relations team is here to assist you
          </p>
          <div className="contact-cards">
            <div className="contact-card">
              <h3>General Inquiries</h3>
              <p>Email: ir@prayukt.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div className="contact-card">
              <h3>Press & Media</h3>
              <p>Email: press@prayukt.com</p>
              <p>Phone: +1 (555) 123-4568</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Investors;

