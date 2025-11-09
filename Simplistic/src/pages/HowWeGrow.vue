<template>
  <div class="how-we-grow">
    <!-- Hero Section -->
    <section class="page-hero gradient-bg">
      <div class="container">
        <h1 class="page-title fade-in">How We Grow</h1>
        <p class="page-subtitle fade-in">Our business model and approach to sustainable growth</p>
      </div>
    </section>

    <!-- Business Model Section -->
    <section class="section business-model">
      <div class="container">
        <h2 class="section-title">Our Business Model</h2>
        <p class="section-description">
          We drive growth through a combination of organic innovation, strategic partnerships, and customer-centric excellence
        </p>
        <div class="model-grid">
          <div class="card model-card fade-in">
            <div class="model-number">01</div>
            <h3>Innovation-Led Growth</h3>
            <p>
              We invest heavily in R&D to create proprietary solutions that address emerging customer experience challenges. Our innovation labs continuously develop new products and services.
            </p>
            <ul class="model-features">
              <li>Proprietary CX frameworks</li>
              <li>AI-powered analytics tools</li>
              <li>Custom integration solutions</li>
            </ul>
          </div>

          <div class="card model-card fade-in" style="animation-delay: 0.1s">
            <div class="model-number">02</div>
            <h3>Strategic Partnerships</h3>
            <p>
              We collaborate with leading technology providers and industry experts to expand our capabilities and reach new markets effectively.
            </p>
            <ul class="model-features">
              <li>Amazon Connect Advanced Partner</li>
              <li>Technology ecosystem integration</li>
              <li>Industry-specific alliances</li>
            </ul>
          </div>

          <div class="card model-card fade-in" style="animation-delay: 0.2s">
            <div class="model-number">03</div>
            <h3>Customer Success</h3>
            <p>
              Our growth is driven by delivering measurable value to clients, resulting in high retention rates and organic expansion through referrals.
            </p>
            <ul class="model-features">
              <li>95% client retention rate</li>
              <li>Net Promoter Score of 8.5+</li>
              <li>70% growth from referrals</li>
            </ul>
          </div>

          <div class="card model-card fade-in" style="animation-delay: 0.3s">
            <div class="model-number">04</div>
            <h3>Market Expansion</h3>
            <p>
              We systematically expand into new geographic markets and industry verticals, leveraging our proven expertise and scalable solutions.
            </p>
            <ul class="model-features">
              <li>Global presence in 30+ countries</li>
              <li>Multi-industry expertise</li>
              <li>Localized support teams</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Growth Strategy Section -->
    <section class="section strategy gradient-bg">
      <div class="container">
        <h2 class="section-title white">Our Growth Strategy</h2>
        <div class="strategy-content">
          <div class="strategy-visual fade-in">
            <div class="growth-circle">
              <div class="circle-center">
                <h3>Sustainable<br>Growth</h3>
              </div>
              <div class="circle-item item-1">Innovation</div>
              <div class="circle-item item-2">Talent</div>
              <div class="circle-item item-3">Technology</div>
              <div class="circle-item item-4">Partnerships</div>
            </div>
          </div>
          <div class="strategy-details fade-in" style="animation-delay: 0.2s">
            <div class="strategy-point">
              <h3>🚀 Accelerated Innovation</h3>
              <p>Invest 20% of revenue in R&D to stay ahead of market trends and customer needs.</p>
            </div>
            <div class="strategy-point">
              <h3>👥 Talent Development</h3>
              <p>Build world-class teams through continuous learning, competitive benefits, and growth opportunities.</p>
            </div>
            <div class="strategy-point">
              <h3>🔧 Technology Excellence</h3>
              <p>Maintain cutting-edge technology stack and certifications to deliver superior solutions.</p>
            </div>
            <div class="strategy-point">
              <h3>🤝 Strategic Alliances</h3>
              <p>Form partnerships that enhance our service offerings and expand market reach.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Market Segments Section -->
    <section class="section segments">
      <div class="container">
        <h2 class="section-title">Market Segments</h2>
        <div class="tabs">
          <button 
            v-for="segment in segments" 
            :key="segment.id"
            :class="['tab', { active: activeSegment === segment.id }]"
            @click="activeSegment = segment.id"
          >
            {{ segment.name }}
          </button>
        </div>
        <div class="segment-content">
          <div v-for="segment in segments" :key="segment.id" v-show="activeSegment === segment.id" class="segment-panel fade-in">
            <div class="segment-grid">
              <div class="segment-info">
                <h3>{{ segment.name }}</h3>
                <p>{{ segment.description }}</p>
                <div class="segment-stats">
                  <div class="stat-box">
                    <strong>{{ segment.revenue }}</strong>
                    <span>Revenue Contribution</span>
                  </div>
                  <div class="stat-box">
                    <strong>{{ segment.growth }}</strong>
                    <span>YoY Growth</span>
                  </div>
                </div>
              </div>
              <div class="segment-features">
                <h4>Key Focus Areas:</h4>
                <ul>
                  <li v-for="feature in segment.features" :key="feature">{{ feature }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Investment Section -->
    <section class="section investment">
      <div class="container">
        <h2 class="section-title">Investment Priorities</h2>
        <div class="investment-grid">
          <div class="card investment-card fade-in">
            <div class="investment-icon">💡</div>
            <h3>Research & Development</h3>
            <div class="investment-amount">$5M+</div>
            <p>Annual investment in new technologies and product development</p>
          </div>
          <div class="card investment-card fade-in" style="animation-delay: 0.1s">
            <div class="investment-icon">🎓</div>
            <h3>Training & Certification</h3>
            <div class="investment-amount">$2M+</div>
            <p>Employee development and industry certification programs</p>
          </div>
          <div class="card investment-card fade-in" style="animation-delay: 0.2s">
            <div class="investment-icon">🌐</div>
            <h3>Global Expansion</h3>
            <div class="investment-amount">$3M+</div>
            <p>New market entry and regional infrastructure development</p>
          </div>
          <div class="card investment-card fade-in" style="animation-delay: 0.3s">
            <div class="investment-icon">🔒</div>
            <h3>Security & Compliance</h3>
            <div class="investment-amount">$1M+</div>
            <p>Infrastructure security and regulatory compliance initiatives</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HowWeGrow',
  data() {
    return {
      activeSegment: 'safety',
      segments: [
        {
          id: 'safety',
          name: 'Safety & Security',
          description: 'Delivering mission-critical communication solutions for emergency services, security operations, and safety management systems.',
          revenue: '35%',
          growth: '+18%',
          features: [
            'Emergency response systems',
            'Security monitoring solutions',
            '24/7 crisis communication',
            'Incident management platforms'
          ]
        },
        {
          id: 'healthcare',
          name: 'Healthcare',
          description: 'Transforming patient experiences through advanced communication platforms, telemedicine support, and healthcare contact center solutions.',
          revenue: '40%',
          growth: '+25%',
          features: [
            'Patient engagement platforms',
            'Telemedicine integration',
            'Appointment scheduling systems',
            'Healthcare CRM solutions'
          ]
        },
        {
          id: 'environmental',
          name: 'Environmental & Analysis',
          description: 'Supporting environmental initiatives with data-driven customer engagement, sustainability programs, and environmental monitoring communications.',
          revenue: '25%',
          growth: '+15%',
          features: [
            'Environmental monitoring alerts',
            'Sustainability program management',
            'Data analytics and reporting',
            'Community engagement platforms'
          ]
        }
      ]
    }
  }
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

.business-model {
  background: var(--primary-black);
  padding: 80px 0;
}

.section-description {
  text-align: center;
  font-size: 18px;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto 60px;
}

.model-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.model-card {
  padding: 40px;
}

.model-number {
  font-size: 48px;
  font-weight: 800;
  color: var(--deep-brown);
  opacity: 0.3;
  margin-bottom: 16px;
}

.model-card h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--deep-brown);
}

.model-card p {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 20px;
}

.model-features {
  list-style: none;
}

.model-features li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  color: var(--text-light);
}

.model-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--deep-brown);
  font-weight: 700;
}

.strategy {
  background: linear-gradient(135deg, #C4B299, #A07A58);
  padding: 80px 0;
}

.strategy-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-top: 60px;
}

.growth-circle {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.circle-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: var(--light-black);
  border: 2px solid var(--primary-yellow);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(160, 122, 88, 0.2);
}

.circle-center h3 {
  font-size: 24px;
  color: var(--deep-brown);
  text-align: center;
  line-height: 1.3;
}

.circle-item {
  position: absolute;
  background: var(--light-black);
  border: 2px solid var(--primary-yellow);
  padding: 16px 24px;
  border-radius: 30px;
  font-weight: 600;
  color: var(--deep-brown);
  box-shadow: 0 4px 20px rgba(160, 122, 88, 0.2);
}

.item-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.item-2 {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.item-3 {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.item-4 {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.strategy-details {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.strategy-point {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.strategy-point h3 {
  color: white;
  font-size: 20px;
  margin-bottom: 12px;
}

.strategy-point p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.segments {
  background: var(--primary-black);
  padding: 80px 0;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.tab {
  padding: 12px 28px;
  border-radius: 8px;
  background: var(--light-black);
  border: 1px solid var(--mid-beige);
  color: var(--deep-brown);
  font-weight: 600;
  transition: all 0.3s ease;
}

.tab:hover {
  background: var(--primary-yellow);
  color: var(--primary-black);
}

.tab.active {
  background: var(--primary-yellow);
  color: var(--primary-black);
}

.segment-panel {
  background: var(--light-black);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(94, 64, 51, 0.1);
  border: 1px solid var(--mid-beige);
}

.segment-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
}

.segment-info h3 {
  font-size: 32px;
  margin-bottom: 16px;
  color: var(--deep-brown);
}

.segment-info p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 30px;
}

.segment-stats {
  display: flex;
  gap: 30px;
}

.stat-box {
  display: flex;
  flex-direction: column;
}

.stat-box strong {
  font-size: 36px;
  color: var(--deep-brown);
  margin-bottom: 8px;
}

.stat-box span {
  color: var(--text-light);
  font-size: 14px;
}

.segment-features h4 {
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--deep-brown);
}

.segment-features ul {
  list-style: none;
}

.segment-features li {
  padding: 12px 0;
  padding-left: 28px;
  position: relative;
  color: var(--text-light);
  line-height: 1.6;
}

.segment-features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--deep-brown);
  font-weight: 700;
}

.investment {
  background: var(--primary-black);
  padding: 80px 0;
}

.investment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.investment-card {
  text-align: center;
  padding: 40px;
}

.investment-icon {
  font-size: 56px;
  margin-bottom: 20px;
}

.investment-card h3 {
  font-size: 20px;
  margin-bottom: 16px;
  color: var(--deep-brown);
}

.investment-amount {
  font-size: 32px;
  font-weight: 800;
  color: var(--deep-brown);
  margin-bottom: 12px;
  text-shadow: 0 0 20px rgba(160, 122, 88, 0.3);
}

.investment-card p {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 14px;
}

@media (max-width: 968px) {
  .page-title {
    font-size: 38px;
  }

  .model-grid {
    grid-template-columns: 1fr;
  }

  .strategy-content {
    grid-template-columns: 1fr;
  }

  .growth-circle {
    width: 300px;
    height: 300px;
  }

  .circle-center {
    width: 150px;
    height: 150px;
  }

  .segment-grid {
    grid-template-columns: 1fr;
  }
}
</style>

