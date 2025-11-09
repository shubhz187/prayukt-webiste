import './WhoWeAre.css';

function WhoWeAre() {
  return (
    <div className="who-we-are">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-title fade-in">
            Who <span className="gradient-text">We Are</span>
          </h1>
          <p className="page-subtitle">
            A global leader in innovation, driven by purpose and values
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="content-section">
        <div className="content-container">
          <div className="content-grid">
            <div className="content-text">
              <span className="section-tag">Our Purpose</span>
              <h2 className="content-title">Building a Better Tomorrow</h2>
              <p>
                At Prayukt, our purpose is clear: to make the world safer, cleaner, and healthier 
                for everyone. We achieve this through our diverse portfolio of companies, each a 
                leader in their field, working together to solve the world's most pressing challenges.
              </p>
              <p>
                Our commitment to innovation drives us forward, while our values keep us grounded. 
                We believe that business success and positive societal impact go hand in hand.
              </p>
            </div>
            <div className="content-visual">
              <div className="visual-box box-1"></div>
              <div className="visual-box box-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <span className="section-tag">Our Values</span>
          <h2 className="section-title">What Drives Us</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3>Innovation</h3>
              <p>
                We constantly push boundaries, embracing new technologies and methodologies 
                to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h3>Integrity</h3>
              <p>
                Trust and transparency form the foundation of everything we do, guiding our 
                decisions and relationships.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3>Excellence</h3>
              <p>
                We set the highest standards and strive to exceed them in every project, 
                product, and partnership.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h3>Sustainability</h3>
              <p>
                Environmental responsibility is at our core, ensuring we create lasting 
                value for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="history-container">
          <span className="section-tag">Our Journey</span>
          <h2 className="section-title">A Legacy of <span className="gradient-text">Innovation</span></h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1974</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>Founded with a vision to transform industries through innovation and excellence.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1990</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>Expanded operations to 20+ countries, establishing ourselves as a global leader.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Digital Transformation</h3>
                <p>Led the industry in digital innovation, pioneering new technologies and solutions.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Sustainable Future</h3>
                <p>Committed to carbon neutrality and leading the way in sustainable business practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="leadership-container">
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">Meet Our <span className="gradient-text">Team</span></h2>
          <p className="section-description">
            Our leadership team brings together decades of experience, diverse perspectives, 
            and a shared commitment to excellence.
          </p>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-avatar">JD</div>
              <h3>John Doe</h3>
              <p className="leader-role">Chief Executive Officer</p>
              <p className="leader-bio">Leading Prayukt's global strategy and vision</p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">JS</div>
              <h3>Jane Smith</h3>
              <p className="leader-role">Chief Financial Officer</p>
              <p className="leader-bio">Driving financial excellence and growth</p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">MJ</div>
              <h3>Michael Johnson</h3>
              <p className="leader-role">Chief Technology Officer</p>
              <p className="leader-bio">Pioneering innovation and technology advancement</p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">SW</div>
              <h3>Sarah Williams</h3>
              <p className="leader-role">Chief Operations Officer</p>
              <p className="leader-bio">Optimizing operations across global markets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoWeAre;

