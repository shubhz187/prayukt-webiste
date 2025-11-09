<template>
  <div class="who-we-are">
    <!-- Hero Section -->
    <section class="page-hero gradient-bg">
      <div class="container">
        <h1 class="page-title fade-in">Who We Are</h1>
        <p class="page-subtitle fade-in">Driving excellence through innovation and purpose</p>
      </div>
    </section>

    <!-- Purpose Section -->
    <section class="section purpose">
      <div class="container">
        <div class="content-grid">
          <div class="content-text fade-in">
            <h2>Our Purpose</h2>
            <p>
              At Amplify, we exist to humanize customer service and create meaningful connections between businesses and their customers. Through Amazon Connect expertise and personalized solutions, we transform customer experiences into lasting relationships.
            </p>
            <p>
              We believe that great customer experience is not just about technology—it's about understanding people, their needs, and creating solutions that truly make a difference.
            </p>
          </div>
          <div class="content-visual fade-in" style="animation-delay: 0.2s">
            <div class="visual-box gradient-bg">
              <div class="icon">🎯</div>
              <h3>Our Mission</h3>
              <p>Empowering businesses to deliver exceptional customer experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section values gradient-bg">
      <div class="container">
        <h2 class="section-title white">Our Core Values</h2>
        <p class="section-subtitle white">The principles that guide everything we do</p>
        <div class="values-grid">
          <div class="card value-card fade-in">
            <div class="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
          </div>
          <div class="card value-card fade-in" style="animation-delay: 0.1s">
            <div class="value-icon">🤝</div>
            <h3>Partnership</h3>
            <p>We build long-term relationships based on trust, transparency, and mutual success.</p>
          </div>
          <div class="card value-card fade-in" style="animation-delay: 0.2s">
            <div class="value-icon">⭐</div>
            <h3>Excellence</h3>
            <p>We are committed to delivering the highest quality in every project and interaction.</p>
          </div>
          <div class="card value-card fade-in" style="animation-delay: 0.3s">
            <div class="value-icon">🌱</div>
            <h3>Growth</h3>
            <p>We foster continuous learning and development for our team and clients.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- History Section -->
    <section class="section history">
      <div class="container">
        <h2 class="section-title">Our Story</h2>
        <div class="timeline">
          <div class="timeline-item fade-in">
            <div class="timeline-year">2018</div>
            <div class="timeline-content">
              <h3>Foundation</h3>
              <p>Amplify was founded with a vision to revolutionize customer service through technology and human-centric approach.</p>
            </div>
          </div>
          <div class="timeline-item fade-in" style="animation-delay: 0.1s">
            <div class="timeline-year">2020</div>
            <div class="timeline-content">
              <h3>Amazon Connect Partnership</h3>
              <p>Became an official Amazon Connect partner, expanding our capabilities and service offerings.</p>
            </div>
          </div>
          <div class="timeline-item fade-in" style="animation-delay: 0.2s">
            <div class="timeline-year">2022</div>
            <div class="timeline-content">
              <h3>Global Expansion</h3>
              <p>Expanded operations internationally, serving clients across multiple continents.</p>
            </div>
          </div>
          <div class="timeline-item fade-in" style="animation-delay: 0.3s">
            <div class="timeline-year">2024</div>
            <div class="timeline-content">
              <h3>Innovation Leader</h3>
              <p>Launched proprietary CX solutions and achieved recognition as industry leaders in customer experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section team">
      <div class="container">
        <h2 class="section-title">Leadership Team</h2>
        <p class="section-subtitle">Meet the people driving our vision forward</p>
        <div class="team-grid">
          <div class="card team-card fade-in">
            <div class="team-photo">👤</div>
            <h3>Sarah Johnson</h3>
            <p class="role">Chief Executive Officer</p>
            <p class="bio">20+ years of experience in customer experience and technology leadership.</p>
          </div>
          <div class="card team-card fade-in" style="animation-delay: 0.1s">
            <div class="team-photo">👤</div>
            <h3>Michael Chen</h3>
            <p class="role">Chief Technology Officer</p>
            <p class="bio">Expert in cloud technologies and Amazon Connect implementations.</p>
          </div>
          <div class="card team-card fade-in" style="animation-delay: 0.2s">
            <div class="team-photo">👤</div>
            <h3>Emily Rodriguez</h3>
            <p class="role">Chief Operations Officer</p>
            <p class="bio">Specializes in scaling customer service operations and process optimization.</p>
          </div>
          <div class="card team-card fade-in" style="animation-delay: 0.3s">
            <div class="team-photo">👤</div>
            <h3>David Kumar</h3>
            <p class="role">Chief Strategy Officer</p>
            <p class="bio">Drives strategic initiatives and partnerships for sustainable growth.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WhoWeAre'
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

.purpose {
  background: var(--primary-black);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.content-text h2 {
  font-size: 42px;
  margin-bottom: 24px;
  color: var(--deep-brown);
}

.content-text p {
  font-size: 18px;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 20px;
}

.visual-box {
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  color: white;
}

.visual-box .icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.visual-box h3 {
  font-size: 28px;
  margin-bottom: 16px;
}

.visual-box p {
  font-size: 18px;
  opacity: 0.9;
}

.values {
  background: linear-gradient(135deg, #C4B299, #A07A58);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.value-card {
  text-align: center;
  padding: 40px;
}

.value-icon {
  font-size: 56px;
  margin-bottom: 20px;
}

.value-card h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--deep-brown);
}

.value-card p {
  color: var(--text-light);
  line-height: 1.6;
}

.history {
  background: var(--primary-black);
}

.timeline {
  max-width: 800px;
  margin: 60px auto 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 40px;
  margin-bottom: 50px;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 75px;
  top: 30px;
  width: 2px;
  height: calc(100% + 50px);
  background: var(--accent-gold);
  opacity: 0.3;
}

.timeline-item:last-child::before {
  display: none;
}

.timeline-year {
  font-size: 32px;
  font-weight: 800;
  color: var(--deep-brown);
  text-align: center;
  position: relative;
}

.timeline-year::after {
  content: '';
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: var(--accent-gold);
  border-radius: 50%;
}

.timeline-content h3 {
  font-size: 24px;
  margin-bottom: 12px;
  color: var(--deep-brown);
}

.timeline-content p {
  font-size: 16px;
  color: var(--text-light);
  line-height: 1.6;
}

.team {
  background: var(--primary-black);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.team-card {
  text-align: center;
  padding: 40px;
}

.team-photo {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  background: var(--light-black);
  border: 2px solid var(--mid-beige);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
}

.team-card h3 {
  font-size: 22px;
  margin-bottom: 8px;
  color: var(--deep-brown);
}

.role {
  color: var(--accent-gold);
  font-weight: 600;
  margin-bottom: 12px;
}

.bio {
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 968px) {
  .page-title {
    font-size: 38px;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .timeline-item::before,
  .timeline-year::after {
    display: none;
  }

  .timeline-year {
    text-align: left;
  }
}
</style>

