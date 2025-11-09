<template>
  <div class="our-companies">
    <!-- Hero Section -->
    <section class="page-hero gradient-bg">
      <div class="container">
        <h1 class="page-title fade-in">Our Companies</h1>
        <p class="page-subtitle fade-in">A portfolio of specialized business units delivering excellence</p>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="section overview">
      <div class="container">
        <div class="overview-content fade-in">
          <h2>Our Group Structure</h2>
          <p>
            Amplify operates through multiple specialized business units, each focused on delivering exceptional value in their respective domains. Our companies work together seamlessly to provide comprehensive customer experience solutions across industries.
          </p>
        </div>
      </div>
    </section>

    <!-- Companies Grid -->
    <section class="section companies">
      <div class="container">
        <div class="companies-grid">
          <div class="card company-card fade-in">
            <div class="company-header">
              <div class="company-logo blue">A</div>
              <div class="company-status">Core Division</div>
            </div>
            <h3>Amplify Connect</h3>
            <p class="company-description">
              Our flagship Amazon Connect implementation and support division. Specializes in cloud contact center solutions, migration services, and ongoing managed services.
            </p>
            <div class="company-stats">
              <div class="stat">
                <strong>100+</strong>
                <span>Projects</span>
              </div>
              <div class="stat">
                <strong>50+</strong>
                <span>Clients</span>
              </div>
            </div>
            <a href="#" class="company-link">Learn more →</a>
          </div>

          <div class="card company-card fade-in" style="animation-delay: 0.1s">
            <div class="company-header">
              <div class="company-logo teal">A</div>
              <div class="company-status">Innovation Lab</div>
            </div>
            <h3>Amplify CX Labs</h3>
            <p class="company-description">
              Research and development division focused on creating next-generation customer experience tools, AI-powered analytics, and innovative CX frameworks.
            </p>
            <div class="company-stats">
              <div class="stat">
                <strong>20+</strong>
                <span>Products</span>
              </div>
              <div class="stat">
                <strong>5+</strong>
                <span>Patents</span>
              </div>
            </div>
            <a href="#" class="company-link">Learn more →</a>
          </div>

          <div class="card company-card fade-in" style="animation-delay: 0.2s">
            <div class="company-header">
              <div class="company-logo purple">A</div>
              <div class="company-status">Consulting</div>
            </div>
            <h3>Amplify Strategy</h3>
            <p class="company-description">
              Strategic consulting division helping businesses design and implement comprehensive customer experience transformation programs and digital strategies.
            </p>
            <div class="company-stats">
              <div class="stat">
                <strong>200+</strong>
                <span>Engagements</span>
              </div>
              <div class="stat">
                <strong>30+</strong>
                <span>Countries</span>
              </div>
            </div>
            <a href="#" class="company-link">Learn more →</a>
          </div>

          <div class="card company-card fade-in" style="animation-delay: 0.3s">
            <div class="company-header">
              <div class="company-logo green">A</div>
              <div class="company-status">Training</div>
            </div>
            <h3>Amplify Academy</h3>
            <p class="company-description">
              Training and certification programs for customer experience professionals, Amazon Connect specialists, and contact center managers.
            </p>
            <div class="company-stats">
              <div class="stat">
                <strong>1000+</strong>
                <span>Students</span>
              </div>
              <div class="stat">
                <strong>15+</strong>
                <span>Courses</span>
              </div>
            </div>
            <a href="#" class="company-link">Learn more →</a>
          </div>

          <div class="card company-card fade-in" style="animation-delay: 0.4s">
            <div class="company-header">
              <div class="company-logo orange">A</div>
              <div class="company-status">Operations</div>
            </div>
            <h3>Amplify Operations</h3>
            <p class="company-description">
              Managed services and outsourced contact center operations, providing 24/7 support and customer service excellence for global clients.
            </p>
            <div class="company-stats">
              <div class="stat">
                <strong>500+</strong>
                <span>Agents</span>
              </div>
              <div class="stat">
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </div>
            <a href="#" class="company-link">Learn more →</a>
          </div>

          <div class="card company-card fade-in" style="animation-delay: 0.5s">
            <div class="company-header">
              <div class="company-logo red">A</div>
              <div class="company-status">Analytics</div>
            </div>
            <h3>Amplify Insights</h3>
            <p class="company-description">
              Data analytics and business intelligence division specializing in customer journey analytics, predictive modeling, and performance optimization.
            </p>
            <div class="company-stats">
              <div class="stat">
                <strong>1M+</strong>
                <span>Data Points</span>
              </div>
              <div class="stat">
                <strong>100+</strong>
                <span>Dashboards</span>
              </div>
            </div>
            <a href="#" class="company-link">Learn more →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Segments Section -->
    <section class="section segments gradient-bg">
      <div class="container">
        <h2 class="section-title white">Our Business Segments</h2>
        <div class="segments-grid">
          <div class="card segment-card fade-in">
            <div class="segment-icon">🛡️</div>
            <h3>Safety & Security</h3>
            <p>Protecting people and assets with intelligent customer communication systems and emergency response solutions.</p>
          </div>
          <div class="card segment-card fade-in" style="animation-delay: 0.1s">
            <div class="segment-icon">💊</div>
            <h3>Healthcare</h3>
            <p>Improving patient experiences through advanced communication platforms and telemedicine support systems.</p>
          </div>
          <div class="card segment-card fade-in" style="animation-delay: 0.2s">
            <div class="segment-icon">🌍</div>
            <h3>Environmental & Analysis</h3>
            <p>Supporting environmental initiatives with data-driven customer engagement and sustainability programs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Interested in partnering with us?</h2>
          <p>Discover how our companies can help transform your customer experience</p>
          <router-link to="/careers" class="btn btn-primary">Join Our Team</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OurCompanies'
}
</script>

<style scoped>
.page-hero {
  padding: 150px 0 100px;
  text-align: center;
}

.page-title {
  font-size: 56px;
  color: white;
  margin-bottom: 20px;
}

.page-subtitle {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.9);
}

.overview {
  background: var(--primary-black);
  padding: 80px 0;
}

.overview-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.overview-content h2 {
  font-size: 42px;
  margin-bottom: 24px;
  color: var(--deep-brown);
}

.overview-content p {
  font-size: 18px;
  color: var(--text-light);
  line-height: 1.8;
}

.companies {
  background: var(--primary-black);
  padding: 80px 0;
}

.companies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.company-card {
  padding: 40px;
}

.company-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.company-logo {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 800;
  color: white;
}

.company-logo.blue {
  background: var(--primary-yellow);
  color: var(--primary-black);
}

.company-logo.teal {
  background: var(--dark-yellow);
  color: var(--primary-black);
}

.company-logo.purple {
  background: var(--primary-yellow);
  color: var(--primary-black);
}

.company-logo.green {
  background: var(--dark-yellow);
  color: var(--primary-black);
}

.company-logo.orange {
  background: var(--primary-yellow);
  color: var(--primary-black);
}

.company-logo.red {
  background: var(--dark-yellow);
  color: var(--primary-black);
}

.company-status {
  font-size: 12px;
  font-weight: 600;
  color: var(--primary-black);
  background: var(--primary-yellow);
  padding: 6px 12px;
  border-radius: 20px;
}

.company-card h3 {
  font-size: 28px;
  margin-bottom: 16px;
  color: var(--deep-brown);
}

.company-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 24px;
}

.company-stats {
  display: flex;
  gap: 30px;
  margin-bottom: 24px;
  padding: 20px 0;
  border-top: 1px solid var(--mid-beige);
  border-bottom: 1px solid var(--mid-beige);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat strong {
  font-size: 24px;
  color: var(--deep-brown);
  margin-bottom: 4px;
}

.stat span {
  font-size: 14px;
  color: var(--text-light);
}

.company-link {
  color: var(--deep-brown);
  font-weight: 600;
  transition: all 0.3s ease;
}

.company-link:hover {
  color: var(--accent-gold);
}

.segments {
  background: linear-gradient(135deg, #C4B299, #A07A58);
  padding: 80px 0;
}

.segments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.segment-card {
  text-align: center;
  padding: 40px;
}

.segment-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.segment-card h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--deep-brown);
}

.segment-card p {
  color: var(--text-light);
  line-height: 1.6;
}

.cta {
  background: var(--primary-black);
  padding: 100px 0;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: var(--deep-brown);
}

.cta-content p {
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 38px;
  }

  .companies-grid {
    grid-template-columns: 1fr;
  }
}
</style>

