<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero gradient-bg">
      <div class="container">
        <div class="hero-content fade-in">
          <h1 class="hero-title">
            Prayukt Total Experience<br>
            <span class="highlight">humanizes customer service</span><br>
            with Amazon Connect
          </h1>
          <p class="hero-description">
            Prayukt offers 20 strong high-personalized solutions, and Amazon Connect expertise to optimize customer experience and extend it in your organization.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-light">Get Started</button>
            <button class="btn btn-outline">Learn More</button>
          </div>
        </div>
        <div class="hero-visual float-animation">
          <div class="visual-card">
            <div class="stat">1374 × 1030</div>
            <p class="label">Services</p>
          </div>
        </div>
      </div>
      <div class="hero-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
    </section>

    <!-- Signature Services Section -->
    <section class="section services">
      <div class="container">
        <h2 class="section-title">Signature Services</h2>
        <div class="services-grid">
          <div class="card service-card fade-in" style="animation-delay: 0.1s">
            <div class="service-icon">📊</div>
            <h3>Research And Insight</h3>
            <p>Understand better your customers through deep analytics and research methodologies.</p>
            <a href="#" class="learn-more">Learn more →</a>
          </div>
          <div class="card service-card fade-in" style="animation-delay: 0.2s">
            <div class="service-icon">⚙️</div>
            <h3>Implementation and Support</h3>
            <p>Seamless deployment and ongoing support for your customer experience solutions.</p>
            <a href="#" class="learn-more">Learn more →</a>
          </div>
          <div class="card service-card fade-in" style="animation-delay: 0.3s">
            <div class="service-icon">🎯</div>
            <h3>Managed Services</h3>
            <p>End-to-end management of your customer experience platform and operations.</p>
            <a href="#" class="learn-more">Learn more →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="section programs gradient-bg">
      <div class="container">
        <h2 class="section-title white">Ready to build something great together?</h2>
        <p class="section-subtitle white">Launch The Future Of Your CX Offerings With One Of Both Programs</p>
        <div class="programs-grid">
          <div class="card program-card fade-in">
            <div class="program-badge blue">Quick Start</div>
            <h3>Quick Start Program to Implement Amazon Connect</h3>
            <ul class="program-features">
              <li>5 features in 60 days to implement Amazon Connect (Cloud or premise)</li>
              <li>Lead Amazon Connect as a service provider/reseller</li>
              <li>Available starting February 2025 at a one-time reduced price</li>
              <li>50% discount on Professional Services</li>
              <li>Renewal at standard pricing thereafter</li>
            </ul>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div class="card program-card fade-in" style="animation-delay: 0.2s">
            <div class="program-badge purple">CX Program</div>
            <h3>Customer Experience (CX) Lens Library POC Program</h3>
            <ul class="program-features">
              <li>A monthly retainer for premium or entrepreneur</li>
              <li>Optimize and distribute Athena Well-Architect Framework</li>
              <li>Enhance customer experience throughout various paths of CX and migration journey</li>
              <li>Access to our suite of POC tools</li>
              <li>Delivery in sales cycle personally insights</li>
            </ul>
            <button class="btn btn-primary">Let's Connect</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Strategic Partner Section -->
    <section class="section partner">
      <div class="container">
        <div class="partner-content">
          <div class="partner-text fade-in">
            <h2>Your Strategic Partner<br>In Bussiness Excellence</h2>
            <p>
              At Prayukt, Total Experience services works with you on all things to optimizing both your customer and employee experience, as a human-centric partnership built on innovation, personalization, and Amazon Connect expertise.
            </p>
            <router-link to="/who-we-are" class="btn btn-primary">Learn About Us</router-link>
          </div>
          <div class="partner-logo fade-in" style="animation-delay: 0.2s">
            <div class="logo-box">
              <div class="company-logo">PRAYUKT</div>
              <p class="subtitle">Total Experience Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section why-choose">
      <div class="container">
        <h2 class="section-title">Why Choose Us</h2>
        <div class="stats-grid">
          <div class="stat-item fade-in">
            <div class="stat-number">50+</div>
            <div class="stat-label">Clients</div>
          </div>
          <div class="stat-item fade-in" style="animation-delay: 0.1s">
            <div class="stat-number">100+</div>
            <div class="stat-label">Clients</div>
          </div>
          <div class="stat-item fade-in" style="animation-delay: 0.2s">
            <div class="stat-number">5+</div>
            <div class="stat-label">Experience</div>
          </div>
          <div class="stat-item fade-in" style="animation-delay: 0.3s">
            <div class="stat-number">20+</div>
            <div class="stat-label">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 100px;
}

.hero .container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 52px;
  color: white;
  margin-bottom: 24px;
  line-height: 1.2;
}

.highlight {
  color: var(--off-white);
  font-weight: 800;
  text-shadow: 0 0 30px rgba(160, 122, 88, 0.5);
}

.hero-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-light {
  background: var(--mid-beige);
  color: var(--deep-brown);
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-light:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(160, 122, 88, 0.4);
  background: var(--accent-gold);
}

.btn-outline {
  background: transparent;
  color: var(--off-white);
  border: 2px solid var(--off-white);
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: var(--off-white);
  color: var(--deep-brown);
  transform: translateY(-2px);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  color: white;
}

.stat {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
}

.label {
  font-size: 18px;
  opacity: 0.9;
}

.hero-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: 10%;
  left: 5%;
  animation: float 6s ease-in-out infinite reverse;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 20%;
  animation: float 7s ease-in-out infinite;
}

/* Services Section */
.services {
  background: var(--off-white);
}

.section-title {
  font-size: 42px;
  text-align: center;
  margin-bottom: 16px;
  color: var(--deep-brown);
}

.section-title.white {
  color: var(--off-white);
}

.section-subtitle {
  text-align: center;
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: 60px;
}

.section-subtitle.white {
  color: rgba(245, 242, 236, 0.9);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.service-card {
  text-align: center;
  padding: 40px;
}

.service-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--deep-brown);
}

.service-card p {
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.6;
}

.learn-more {
  color: var(--accent-gold);
  font-weight: 600;
  transition: all 0.3s ease;
}

.learn-more:hover {
  color: var(--deep-brown);
}

/* Programs Section */
.programs {
  background: linear-gradient(135deg, #C4B299, #A07A58);
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.program-card {
  padding: 40px;
}

.program-badge {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
}

.program-badge.blue {
  background: var(--mid-beige);
  color: var(--deep-brown);
}

.program-badge.purple {
  background: var(--accent-gold);
  color: var(--off-white);
}

.program-card h3 {
  font-size: 24px;
  margin-bottom: 24px;
  color: var(--deep-brown);
}

.program-features {
  list-style: none;
  margin-bottom: 30px;
}

.program-features li {
  padding: 12px 0;
  padding-left: 28px;
  position: relative;
  color: var(--text-light);
  line-height: 1.6;
}

.program-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-gold);
  font-weight: 700;
}

/* Partner Section */
.partner {
  background: var(--mid-beige);
}

.partner-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}

.partner-text h2 {
  font-size: 42px;
  margin-bottom: 24px;
  color: var(--deep-brown);
  line-height: 1.2;
}

.partner-text p {
  font-size: 18px;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 32px;
}

.logo-box {
  background: var(--light-beige);
  padding: 60px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid var(--accent-gold);
}

.company-logo {
  font-size: 48px;
  font-weight: 800;
  color: var(--deep-brown);
  margin-bottom: 12px;
}

.subtitle {
  font-size: 18px;
  color: var(--text-light);
}

/* Why Choose Us Section */
.why-choose {
  background: var(--off-white);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 56px;
  font-weight: 800;
  color: var(--accent-gold);
  margin-bottom: 12px;
  text-shadow: 0 0 30px rgba(160, 122, 88, 0.3);
}

.stat-label {
  font-size: 18px;
  color: var(--text-light);
  font-weight: 500;
}

/* Responsive */
@media (max-width: 968px) {
  .hero .container {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 38px;
  }

  .programs-grid {
    grid-template-columns: 1fr;
  }

  .partner-content {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 32px;
  }
}
</style>

