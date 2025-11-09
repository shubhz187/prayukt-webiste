import React from 'react';
import './OurCompanies.css';

const OurCompanies = () => {
  const companies = {
    safety: [
      {
        name: "FireGuard Technologies",
        description: "Leading provider of fire detection and alarm systems for commercial and industrial applications.",
        focus: "Fire Safety"
      },
      {
        name: "SafeSense Systems",
        description: "Advanced gas and flame detection solutions protecting people and assets in hazardous environments.",
        focus: "Gas Detection"
      },
      {
        name: "EvacAlert Pro",
        description: "Emergency evacuation and communication systems for large facilities and public spaces.",
        focus: "Emergency Systems"
      },
      {
        name: "SecureAccess Global",
        description: "Intelligent access control and security management solutions for critical infrastructure.",
        focus: "Security Systems"
      }
    ],
    healthcare: [
      {
        name: "MediVision Diagnostics",
        description: "Innovative medical imaging and diagnostic equipment for hospitals and healthcare facilities.",
        focus: "Medical Imaging"
      },
      {
        name: "BioAnalytics Lab",
        description: "Clinical diagnostic instruments and laboratory automation solutions for accurate testing.",
        focus: "Laboratory Equipment"
      },
      {
        name: "PatientCare Systems",
        description: "Patient monitoring and critical care solutions improving healthcare outcomes.",
        focus: "Patient Monitoring"
      },
      {
        name: "OptiScan Medical",
        description: "Advanced ophthalmic equipment for vision care and eye disease diagnosis.",
        focus: "Ophthalmology"
      }
    ],
    environmental: [
      {
        name: "AquaPure Technologies",
        description: "Water quality analysis and monitoring systems ensuring safe drinking water globally.",
        focus: "Water Analysis"
      },
      {
        name: "AirSense Pro",
        description: "Air quality monitoring and emissions analysis solutions for environmental protection.",
        focus: "Air Quality"
      },
      {
        name: "EnviroTest Labs",
        description: "Comprehensive environmental testing and analytical instruments for regulatory compliance.",
        focus: "Environmental Testing"
      },
      {
        name: "CleanFlow Systems",
        description: "Process control and filtration technologies for industrial water treatment.",
        focus: "Water Treatment"
      }
    ]
  };

  return (
    <div className="our-companies">
      <section className="page-hero">
        <div className="container">
          <h1>Our Companies</h1>
          <p>A diverse portfolio of leading technology companies across critical sectors</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-text">
            <p>
              Our group comprises over 40 autonomous companies, each a leader in its specialized market. 
              They share a common purpose of making critical situations safer, while maintaining the 
              entrepreneurial spirit and customer focus that made them successful.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Companies */}
      <section className="section companies-section">
        <div className="container">
          <div className="sector-header">
            <div className="sector-icon">🛡️</div>
            <div>
              <h2>Safety Solutions</h2>
              <p>Protecting lives with advanced detection and emergency response technologies</p>
            </div>
          </div>
          <div className="companies-grid">
            {companies.safety.map((company, index) => (
              <div key={index} className="company-card">
                <div className="company-header">
                  <h3>{company.name}</h3>
                  <span className="company-badge">{company.focus}</span>
                </div>
                <p>{company.description}</p>
                <a href="#" className="company-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Companies */}
      <section className="section companies-section alt-bg">
        <div className="container">
          <div className="sector-header">
            <div className="sector-icon">❤️</div>
            <div>
              <h2>Healthcare Technologies</h2>
              <p>Advancing medical diagnostics and patient care through innovation</p>
            </div>
          </div>
          <div className="companies-grid">
            {companies.healthcare.map((company, index) => (
              <div key={index} className="company-card">
                <div className="company-header">
                  <h3>{company.name}</h3>
                  <span className="company-badge">{company.focus}</span>
                </div>
                <p>{company.description}</p>
                <a href="#" className="company-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Companies */}
      <section className="section companies-section">
        <div className="container">
          <div className="sector-header">
            <div className="sector-icon">🌍</div>
            <div>
              <h2>Environmental & Analysis</h2>
              <p>Ensuring environmental sustainability through precision measurement and analysis</p>
            </div>
          </div>
          <div className="companies-grid">
            {companies.environmental.map((company, index) => (
              <div key={index} className="company-card">
                <div className="company-header">
                  <h3>{company.name}</h3>
                  <span className="company-badge">{company.focus}</span>
                </div>
                <p>{company.description}</p>
                <a href="#" className="company-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section partnership-section">
        <div className="container">
          <div className="partnership-content">
            <h2>Join Our Group</h2>
            <p>
              We're always looking for entrepreneurial companies that share our values and mission. 
              If you're a technology business in the safety, healthcare, or environmental sectors, 
              we'd love to hear from you.
            </p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCompanies;

