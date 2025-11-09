import React from 'react';
import './Careers.css';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      company: "SafeSense Systems",
      location: "Boston, MA",
      type: "Full-time",
      category: "Engineering"
    },
    {
      title: "Product Manager - Healthcare",
      company: "MediVision Diagnostics",
      location: "San Diego, CA",
      type: "Full-time",
      category: "Product"
    },
    {
      title: "Research Scientist",
      company: "BioAnalytics Lab",
      location: "Cambridge, UK",
      type: "Full-time",
      category: "R&D"
    },
    {
      title: "Sales Director - EMEA",
      company: "FireGuard Technologies",
      location: "London, UK",
      type: "Full-time",
      category: "Sales"
    },
    {
      title: "Manufacturing Engineer",
      company: "AquaPure Technologies",
      location: "Austin, TX",
      type: "Full-time",
      category: "Engineering"
    },
    {
      title: "Marketing Manager",
      company: "PatientCare Systems",
      location: "New York, NY",
      type: "Full-time",
      category: "Marketing"
    }
  ];

  return (
    <div className="careers">
      <section className="page-hero">
        <div className="container">
          <h1>Careers</h1>
          <p>Join us in our mission to make the world safer, healthier, and more sustainable</p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Join Us</h2>
          <p className="section-subtitle">
            Build your career with a global leader committed to innovation, growth, and making a difference
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Career Growth</h3>
              <p>
                Opportunities to advance your career across our diverse portfolio of companies 
                and global locations.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Meaningful Work</h3>
              <p>
                Contribute to technologies that protect lives, improve health, and safeguard 
                the environment.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Innovation Culture</h3>
              <p>
                Work in an environment that encourages creativity, entrepreneurship, and 
                continuous learning.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Global Opportunities</h3>
              <p>
                Experience working across international markets with diverse teams and 
                perspectives.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Collaborative Teams</h3>
              <p>
                Join passionate teams dedicated to excellence and supporting each other's 
                success.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
              <h3>Work-Life Balance</h3>
              <p>
                Flexible working arrangements and comprehensive benefits supporting your 
                wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="section culture-section">
        <div className="container">
          <div className="culture-content">
            <div className="culture-text">
              <h2>Our Culture</h2>
              <p>
                We foster an entrepreneurial culture where talented people thrive. Our decentralized 
                model gives employees the autonomy to make decisions and the support to succeed.
              </p>
              <p>
                We value diversity, inclusion, and continuous learning. Whether you're starting 
                your career or looking for your next challenge, you'll find opportunities to 
                grow and make an impact.
              </p>
              <ul className="culture-values">
                <li>Entrepreneurial spirit and autonomy</li>
                <li>Customer-focused mindset</li>
                <li>Commitment to excellence</li>
                <li>Collaborative and supportive teams</li>
                <li>Continuous learning and development</li>
              </ul>
            </div>
            <div className="culture-visual">
              <div className="culture-box">
                <div className="culture-stat">
                  <div className="stat-value">8,000+</div>
                  <div className="stat-label">Employees Worldwide</div>
                </div>
                <div className="culture-stat">
                  <div className="stat-value">40+</div>
                  <div className="stat-label">Companies & Teams</div>
                </div>
                <div className="culture-stat">
                  <div className="stat-value">60+</div>
                  <div className="stat-label">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section jobs-section">
        <div className="container">
          <h2 className="section-title">Current Opportunities</h2>
          <p className="section-subtitle">
            Explore open positions across our companies
          </p>

          {/* Job Filters */}
          <div className="job-filters">
            <div className="filter-group">
              <label>Category</label>
              <select className="filter-select">
                <option>All Categories</option>
                <option>Engineering</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>R&D</option>
                <option>Product</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Location</label>
              <select className="filter-select">
                <option>All Locations</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Europe</option>
                <option>Asia</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Company</label>
              <select className="filter-select">
                <option>All Companies</option>
                <option>Safety</option>
                <option>Healthcare</option>
                <option>Environmental</option>
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="jobs-list">
            {jobOpenings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <span className="job-category">{job.category}</span>
                </div>
                <div className="job-details">
                  <span className="job-detail">
                    <span className="detail-icon">📍</span>
                    {job.location}
                  </span>
                  <span className="job-detail">
                    <span className="detail-icon">💼</span>
                    {job.type}
                  </span>
                </div>
                <button className="btn btn-primary job-apply-btn">View & Apply</button>
              </div>
            ))}
          </div>

          <div className="view-all-jobs">
            <button className="btn btn-secondary">View All Open Positions</button>
          </div>
        </div>
      </section>

      {/* Early Careers */}
      <section className="section early-careers-section">
        <div className="container">
          <div className="early-careers-content">
            <div className="early-careers-text">
              <h2>Graduate & Early Career Programs</h2>
              <p>
                Start your career with us through our structured graduate programs and 
                internships. Gain hands-on experience, work on meaningful projects, and 
                receive mentorship from industry experts.
              </p>
              <ul>
                <li>Graduate Leadership Program</li>
                <li>Engineering Internships</li>
                <li>Summer Research Fellowships</li>
                <li>Rotational Programs</li>
              </ul>
              <button className="btn btn-primary">Explore Graduate Programs</button>
            </div>
            <div className="early-careers-visual">
              <div className="visual-placeholder">
                <span>🎓</span>
                <p>Launch Your Career</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="section application-section">
        <div className="container">
          <div className="application-content">
            <h2>Don't See the Right Role?</h2>
            <p>
              We're always interested in hearing from talented individuals. 
              Submit your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="btn btn-primary">Submit Your Resume</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

