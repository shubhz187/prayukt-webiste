import './Careers.css';

function Careers() {
  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Boston, MA / Remote',
      type: 'Full-time'
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'London, UK',
      type: 'Full-time'
    },
    {
      title: 'Sales Director',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Austin, TX',
      type: 'Full-time'
    }
  ];

  return (
    <div className="careers">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-title fade-in">
            Build Your <span className="gradient-text">Career</span> With Us
          </h1>
          <p className="page-subtitle">
            Join a global team of innovators making a difference in the world
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="why-join-section">
        <div className="why-join-container">
          <span className="section-tag">Why Prayukt</span>
          <h2 className="section-title">
            Where Innovation Meets <span className="gradient-text">Purpose</span>
          </h2>
          <p className="section-description">
            At Prayukt, we're not just building products—we're creating solutions that 
            save lives, protect the environment, and improve healthcare worldwide.
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Career Growth</h3>
              <p>Accelerate your career with global opportunities and leadership development programs</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Innovation Culture</h3>
              <p>Work on cutting-edge technologies and make a real impact in your field</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Global Impact</h3>
              <p>Be part of a team making the world safer, cleaner, and healthier</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Diverse Team</h3>
              <p>Join a diverse, inclusive culture where every voice matters</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
              <h3>Work-Life Balance</h3>
              <p>Flexible work arrangements and generous time-off policies</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Benefits</h3>
              <p>Comprehensive compensation, health benefits, and retirement plans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <div className="culture-container">
          <div className="culture-content">
            <span className="section-tag">Our Culture</span>
            <h2 className="section-title">Built on Trust & Excellence</h2>
            <p className="section-description">
              Our culture is built on five core values that guide everything we do. 
              We believe in fostering an environment where innovation thrives, 
              diversity is celebrated, and every team member can reach their full potential.
            </p>
            <div className="culture-values">
              <div className="value-item">
                <span className="value-check">✓</span>
                <span>Innovation & Excellence</span>
              </div>
              <div className="value-item">
                <span className="value-check">✓</span>
                <span>Integrity & Transparency</span>
              </div>
              <div className="value-item">
                <span className="value-check">✓</span>
                <span>Collaboration & Teamwork</span>
              </div>
              <div className="value-item">
                <span className="value-check">✓</span>
                <span>Diversity & Inclusion</span>
              </div>
              <div className="value-item">
                <span className="value-check">✓</span>
                <span>Sustainability & Impact</span>
              </div>
            </div>
          </div>
          <div className="culture-stats">
            <div className="culture-stat">
              <div className="culture-stat-value">15,000+</div>
              <div className="culture-stat-label">Employees Worldwide</div>
            </div>
            <div className="culture-stat">
              <div className="culture-stat-value">50+</div>
              <div className="culture-stat-label">Countries</div>
            </div>
            <div className="culture-stat">
              <div className="culture-stat-value">4.6/5</div>
              <div className="culture-stat-label">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="positions-section">
        <div className="positions-container">
          <span className="section-tag">Open Positions</span>
          <h2 className="section-title">
            Find Your Next <span className="gradient-text">Opportunity</span>
          </h2>

          <div className="positions-filters">
            <button className="filter-btn active">All Positions</button>
            <button className="filter-btn">Engineering</button>
            <button className="filter-btn">Product</button>
            <button className="filter-btn">Design</button>
            <button className="filter-btn">Sales</button>
            <button className="filter-btn">Marketing</button>
          </div>

          <div className="positions-list">
            {openPositions.map((position, index) => (
              <div key={index} className="position-card">
                <div className="position-header">
                  <div>
                    <h3 className="position-title">{position.title}</h3>
                    <div className="position-meta">
                      <span className="position-department">{position.department}</span>
                      <span className="position-location">📍 {position.location}</span>
                      <span className="position-type">{position.type}</span>
                    </div>
                  </div>
                  <a href="#" className="position-apply-btn">Apply Now</a>
                </div>
              </div>
            ))}
          </div>

          <div className="positions-cta">
            <p>Don't see the right role? We're always looking for talented people.</p>
            <a href="#" className="btn btn-secondary">Submit General Application</a>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="process-section">
        <div className="process-container">
          <span className="section-tag">Hiring Process</span>
          <h2 className="section-title">Your Journey to Joining Prayukt</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Application</h3>
              <p>Submit your application and resume through our careers portal</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Initial Review</h3>
              <p>Our team reviews your qualifications and experience</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Interviews</h3>
              <p>Meet with hiring managers and team members</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Offer</h3>
              <p>Receive and review your offer package</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Onboarding</h3>
              <p>Welcome to the team! Begin your Prayukt journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta-section">
        <div className="careers-cta-container">
          <h2 className="cta-title">Ready to Make an Impact?</h2>
          <p className="cta-description">
            Join our team and help build the future
          </p>
          <a href="#" className="btn btn-large">View All Open Positions</a>
        </div>
      </section>
    </div>
  );
}

export default Careers;

