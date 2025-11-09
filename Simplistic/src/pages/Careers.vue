<template>
  <div class="careers">
    <!-- Hero Section -->
    <section class="page-hero gradient-bg">
      <div class="container">
        <h1 class="page-title fade-in">Join Our Team</h1>
        <p class="page-subtitle fade-in">Build your career with a company that values innovation, growth, and people</p>
        <button class="btn btn-light">View Open Positions</button>
      </div>
    </section>

    <!-- Why Work With Us -->
    <section class="section why-join">
      <div class="container">
        <h2 class="section-title">Why Work With Amplify?</h2>
        <div class="benefits-grid">
          <div class="card benefit-card fade-in">
            <div class="benefit-icon">🚀</div>
            <h3>Growth & Development</h3>
            <p>Continuous learning opportunities, mentorship programs, and career advancement paths tailored to your goals.</p>
          </div>
          <div class="card benefit-card fade-in" style="animation-delay: 0.1s">
            <div class="benefit-icon">💡</div>
            <h3>Innovation Culture</h3>
            <p>Work on cutting-edge projects with the latest technologies in customer experience and cloud computing.</p>
          </div>
          <div class="card benefit-card fade-in" style="animation-delay: 0.2s">
            <div class="benefit-icon">🤝</div>
            <h3>Collaborative Environment</h3>
            <p>Join a diverse, inclusive team where your ideas are valued and collaboration drives success.</p>
          </div>
          <div class="card benefit-card fade-in" style="animation-delay: 0.3s">
            <div class="benefit-icon">🌍</div>
            <h3>Work-Life Balance</h3>
            <p>Flexible work arrangements, remote options, and generous time-off policies to support your well-being.</p>
          </div>
          <div class="card benefit-card fade-in" style="animation-delay: 0.4s">
            <div class="benefit-icon">💰</div>
            <h3>Competitive Compensation</h3>
            <p>Industry-leading salaries, performance bonuses, stock options, and comprehensive benefits packages.</p>
          </div>
          <div class="card benefit-card fade-in" style="animation-delay: 0.5s">
            <div class="benefit-icon">🎯</div>
            <h3>Meaningful Impact</h3>
            <p>Make a real difference in how businesses connect with customers and transform experiences globally.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="section positions">
      <div class="container">
        <h2 class="section-title">Open Positions</h2>
        <div class="filter-controls">
          <select class="filter-select" v-model="departmentFilter">
            <option value="All">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Product">Product</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Customer Success">Customer Success</option>
          </select>
          <select class="filter-select" v-model="locationFilter">
            <option value="All">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="San Francisco">San Francisco, CA</option>
            <option value="New York">New York, NY</option>
            <option value="Austin">Austin, TX</option>
            <option value="London">London, UK</option>
          </select>
        </div>

        <div class="positions-list">
          <div v-for="(position, index) in filteredPositions" :key="position.id" 
               class="card position-card fade-in"
               :style="{ 'animation-delay': `${index * 0.05}s` }">
            <div class="position-header">
              <div>
                <h3>{{ position.title }}</h3>
                <div class="position-meta">
                  <span class="department">{{ position.department }}</span>
                  <span class="separator">•</span>
                  <span class="location">{{ position.location }}</span>
                  <span class="separator">•</span>
                  <span class="type">{{ position.type }}</span>
                </div>
              </div>
              <button class="btn-apply">Apply Now</button>
            </div>
            <p class="position-description">{{ position.description }}</p>
            <div class="position-tags">
              <span v-for="tag in position.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Culture -->
    <section class="section culture gradient-bg">
      <div class="container">
        <h2 class="section-title white">Our Culture & Values</h2>
        <div class="culture-grid">
          <div class="culture-card fade-in">
            <div class="culture-icon">⭐</div>
            <h3>Excellence</h3>
            <p>We set high standards and deliver exceptional results in everything we do.</p>
          </div>
          <div class="culture-card fade-in" style="animation-delay: 0.1s">
            <div class="culture-icon">🎨</div>
            <h3>Innovation</h3>
            <p>We encourage creative thinking and embrace new ideas to solve complex challenges.</p>
          </div>
          <div class="culture-card fade-in" style="animation-delay: 0.2s">
            <div class="culture-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>We work together, share knowledge, and celebrate collective achievements.</p>
          </div>
          <div class="culture-card fade-in" style="animation-delay: 0.3s">
            <div class="culture-icon">💪</div>
            <h3>Integrity</h3>
            <p>We operate with transparency, honesty, and ethical practices in all our interactions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section benefits">
      <div class="container">
        <h2 class="section-title">Benefits & Perks</h2>
        <div class="benefits-detailed">
          <div class="benefit-category fade-in">
            <h3>💼 Health & Wellness</h3>
            <ul>
              <li>Comprehensive health, dental, and vision insurance</li>
              <li>Mental health support and counseling services</li>
              <li>Fitness membership reimbursement</li>
              <li>Wellness programs and health screenings</li>
            </ul>
          </div>
          <div class="benefit-category fade-in" style="animation-delay: 0.1s">
            <h3>💰 Financial Benefits</h3>
            <ul>
              <li>Competitive salary and annual bonuses</li>
              <li>Stock options and equity programs</li>
              <li>401(k) with company matching</li>
              <li>Professional development budget</li>
            </ul>
          </div>
          <div class="benefit-category fade-in" style="animation-delay: 0.2s">
            <h3>🏖️ Time Off & Flexibility</h3>
            <ul>
              <li>Unlimited PTO policy</li>
              <li>Flexible work hours and remote options</li>
              <li>Paid parental leave</li>
              <li>Sabbatical program for long-term employees</li>
            </ul>
          </div>
          <div class="benefit-category fade-in" style="animation-delay: 0.3s">
            <h3>📚 Growth & Learning</h3>
            <ul>
              <li>Annual learning and development budget</li>
              <li>Conference and training attendance</li>
              <li>Certification sponsorship</li>
              <li>Internal mentorship programs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="section process">
      <div class="container">
        <h2 class="section-title">Application Process</h2>
        <div class="process-steps">
          <div class="step fade-in">
            <div class="step-number">1</div>
            <h3>Apply Online</h3>
            <p>Submit your application through our careers portal with your resume and cover letter.</p>
          </div>
          <div class="arrow">→</div>
          <div class="step fade-in" style="animation-delay: 0.1s">
            <div class="step-number">2</div>
            <h3>Initial Screening</h3>
            <p>Our recruiting team will review your application and reach out for a phone screening.</p>
          </div>
          <div class="arrow">→</div>
          <div class="step fade-in" style="animation-delay: 0.2s">
            <div class="step-number">3</div>
            <h3>Interviews</h3>
            <p>Meet with team members through technical and behavioral interview rounds.</p>
          </div>
          <div class="arrow">→</div>
          <div class="step fade-in" style="animation-delay: 0.3s">
            <div class="step-number">4</div>
            <h3>Offer</h3>
            <p>Receive and accept your offer to join the Amplify team!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta gradient-bg">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join a team that's transforming customer experiences worldwide</p>
          <button class="btn btn-light">View All Open Positions</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Careers',
  data() {
    return {
      departmentFilter: 'All',
      locationFilter: 'All',
      positions: [
        {
          id: 1,
          title: 'Senior Software Engineer - Cloud Services',
          department: 'Engineering',
          location: 'Remote',
          type: 'Full-time',
          description: 'Build scalable cloud-native solutions using AWS and modern development practices. Lead technical initiatives and mentor junior engineers.',
          tags: ['AWS', 'Python', 'Kubernetes', 'Microservices']
        },
        {
          id: 2,
          title: 'Product Manager - CX Platform',
          department: 'Product',
          location: 'San Francisco',
          type: 'Full-time',
          description: 'Drive product strategy and roadmap for our flagship CX platform. Work closely with engineering, design, and customers to deliver exceptional solutions.',
          tags: ['Product Strategy', 'Agile', 'Customer Research', 'Analytics']
        },
        {
          id: 3,
          title: 'Customer Success Manager',
          department: 'Customer Success',
          location: 'New York',
          type: 'Full-time',
          description: 'Build strong relationships with enterprise customers, ensuring successful implementation and ongoing value delivery of our CX solutions.',
          tags: ['Account Management', 'SaaS', 'Communication', 'Problem Solving']
        },
        {
          id: 4,
          title: 'Senior UX/UI Designer',
          department: 'Product',
          location: 'Remote',
          type: 'Full-time',
          description: 'Create intuitive, beautiful user experiences for our CX platform. Lead design initiatives from research through implementation.',
          tags: ['Figma', 'User Research', 'Design Systems', 'Prototyping']
        },
        {
          id: 5,
          title: 'Sales Development Representative',
          department: 'Sales',
          location: 'Austin',
          type: 'Full-time',
          description: 'Generate qualified leads and build pipeline for our sales team. Perfect opportunity for someone starting their career in tech sales.',
          tags: ['Prospecting', 'Salesforce', 'Communication', 'B2B Sales']
        },
        {
          id: 6,
          title: 'DevOps Engineer',
          department: 'Engineering',
          location: 'Remote',
          type: 'Full-time',
          description: 'Build and maintain CI/CD pipelines, infrastructure automation, and monitoring systems. Ensure reliability and scalability of our platform.',
          tags: ['AWS', 'Terraform', 'Docker', 'Monitoring']
        },
        {
          id: 7,
          title: 'Content Marketing Manager',
          department: 'Marketing',
          location: 'San Francisco',
          type: 'Full-time',
          description: 'Develop and execute content strategy across blogs, whitepapers, case studies, and more. Tell compelling stories about CX transformation.',
          tags: ['Content Strategy', 'SEO', 'Writing', 'Marketing Analytics']
        },
        {
          id: 8,
          title: 'Solutions Architect',
          department: 'Engineering',
          location: 'London',
          type: 'Full-time',
          description: 'Design and implement complex CX solutions for enterprise customers. Act as technical advisor and bridge between sales and engineering.',
          tags: ['Amazon Connect', 'Architecture', 'Customer-Facing', 'Cloud']
        }
      ]
    }
  },
  computed: {
    filteredPositions() {
      return this.positions.filter(position => {
        const matchesDept = this.departmentFilter === 'All' || position.department === this.departmentFilter
        const matchesLoc = this.locationFilter === 'All' || position.location === this.locationFilter
        return matchesDept && matchesLoc
      })
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
  margin-bottom: 32px;
}

.why-join {
  background: var(--primary-black);
  padding: 80px 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.benefit-card {
  text-align: center;
  padding: 40px;
}

.benefit-icon {
  font-size: 56px;
  margin-bottom: 20px;
}

.benefit-card h3 {
  font-size: 22px;
  margin-bottom: 16px;
  color: var(--deep-brown);
}

.benefit-card p {
  color: var(--text-light);
  line-height: 1.6;
}

.positions {
  background: var(--primary-black);
  padding: 80px 0;
}

.filter-controls {
  display: flex;
  gap: 16px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.filter-select {
  padding: 12px 20px;
  border-radius: 8px;
  border: 2px solid var(--mid-beige);
  background: var(--light-black);
  font-size: 15px;
  font-weight: 500;
  color: var(--deep-brown);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-select:hover,
.filter-select:focus {
  border-color: var(--accent-gold);
  outline: none;
}

.positions-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.position-card {
  padding: 32px;
}

.position-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 20px;
}

.position-header h3 {
  font-size: 22px;
  margin-bottom: 8px;
  color: var(--deep-brown);
}

.position-meta {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;
  color: var(--text-light);
}

.department {
  color: var(--deep-brown);
  font-weight: 600;
}

.separator {
  color: #CCC;
}

.btn-apply {
  background: var(--accent-gold);
  color: var(--off-white);
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.btn-apply:hover {
  background: var(--dark-yellow);
  transform: translateY(-2px);
}

.position-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 16px;
}

.position-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(160, 122, 88, 0.1);
  color: var(--deep-brown);
  border: 1px solid var(--mid-beige);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
}

.culture {
  padding: 80px 0;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.culture-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
}

.culture-icon {
  font-size: 56px;
  margin-bottom: 20px;
}

.culture-card h3 {
  font-size: 24px;
  color: white;
  margin-bottom: 12px;
}

.culture-card p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.benefits {
  background: var(--primary-black);
  padding: 80px 0;
}

.benefits-detailed {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.benefit-category h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--deep-brown);
}

.benefit-category ul {
  list-style: none;
}

.benefit-category li {
  padding: 12px 0;
  padding-left: 28px;
  position: relative;
  color: var(--text-light);
  line-height: 1.6;
}

.benefit-category li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--deep-brown);
  font-weight: 700;
  font-size: 18px;
}

.process {
  background: var(--primary-black);
  padding: 80px 0;
}

.process-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  flex-wrap: wrap;
}

.step {
  text-align: center;
  max-width: 200px;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--accent-gold);
  color: var(--off-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 800;
  margin: 0 auto 20px;
}

.step h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: var(--deep-brown);
}

.step p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

.arrow {
  font-size: 32px;
  color: var(--deep-brown);
  font-weight: 700;
}

.cta {
  padding: 100px 0;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 42px;
  color: white;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
}

@media (max-width: 968px) {
  .page-title {
    font-size: 38px;
  }

  .position-header {
    flex-direction: column;
  }

  .btn-apply {
    width: 100%;
  }

  .arrow {
    display: none;
  }

  .process-steps {
    flex-direction: column;
  }

  .step {
    max-width: 100%;
  }
}
</style>

