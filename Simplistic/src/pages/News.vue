<template>
  <div class="news">
    <!-- Hero Section -->
    <section class="page-hero gradient-bg">
      <div class="container">
        <h1 class="page-title fade-in">News & Press</h1>
        <p class="page-subtitle fade-in">Latest updates, announcements, and media coverage</p>
      </div>
    </section>

    <!-- Featured News -->
    <section class="section featured">
      <div class="container">
        <h2 class="section-title">Featured Story</h2>
        <div class="card featured-card fade-in">
          <div class="featured-image gradient-bg">
            <div class="featured-badge">Breaking News</div>
            <div class="image-placeholder">📰</div>
          </div>
          <div class="featured-content">
            <div class="meta">
              <span class="category">Company News</span>
              <span class="date">February 10, 2025</span>
            </div>
            <h2>Amplify Launches Revolutionary CX Lens Library Program</h2>
            <p>
              Amplify announces the launch of its groundbreaking Customer Experience Lens Library program, 
              bringing enterprise-grade CX frameworks to businesses of all sizes. This innovative offering 
              combines Amazon Connect expertise with proprietary analytics tools to transform customer service operations.
            </p>
            <p>
              The program has already gained significant traction with over 50 early adopters reporting 
              average improvements of 40% in customer satisfaction scores within the first quarter of implementation.
            </p>
            <a href="#" class="btn btn-primary">Read Full Story</a>
          </div>
        </div>
      </div>
    </section>

    <!-- News Grid -->
    <section class="section news-list">
      <div class="container">
        <div class="filter-bar">
          <h2>Latest News</h2>
          <div class="filters">
            <button 
              v-for="filter in filters" 
              :key="filter"
              :class="['filter-btn', { active: activeFilter === filter }]"
              @click="activeFilter = filter"
            >
              {{ filter }}
            </button>
          </div>
        </div>

        <div class="news-grid">
          <div v-for="(article, index) in filteredArticles" :key="article.id" 
               class="card news-card fade-in" 
               :style="{ 'animation-delay': `${index * 0.1}s` }">
            <div class="news-image" :class="article.imageClass">
              <div class="news-icon">{{ article.icon }}</div>
            </div>
            <div class="news-content">
              <div class="meta">
                <span class="category">{{ article.category }}</span>
                <span class="date">{{ article.date }}</span>
              </div>
              <h3>{{ article.title }}</h3>
              <p>{{ article.excerpt }}</p>
              <a href="#" class="read-more">Read more →</a>
            </div>
          </div>
        </div>

        <div class="load-more">
          <button class="btn btn-secondary">Load More Articles</button>
        </div>
      </div>
    </section>

    <!-- Press Releases -->
    <section class="section press-releases">
      <div class="container">
        <h2 class="section-title">Recent Press Releases</h2>
        <div class="press-list">
          <div v-for="(release, index) in pressReleases" :key="release.id" 
               class="press-item fade-in"
               :style="{ 'animation-delay': `${index * 0.1}s` }">
            <div class="press-date">
              <div class="month">{{ release.month }}</div>
              <div class="day">{{ release.day }}</div>
            </div>
            <div class="press-content">
              <h3>{{ release.title }}</h3>
              <p>{{ release.description }}</p>
            </div>
            <div class="press-actions">
              <a href="#" class="press-link">Download PDF</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Media Contact -->
    <section class="section media-contact gradient-bg">
      <div class="container">
        <div class="contact-content fade-in">
          <h2>Media & Press Inquiries</h2>
          <p>For media inquiries, interview requests, or press information, please contact our communications team</p>
          <div class="contact-details">
            <div class="contact-box">
              <div class="icon">📧</div>
              <strong>Email</strong>
              <a href="mailto:press@amplify.com">press@amplify.com</a>
            </div>
            <div class="contact-box">
              <div class="icon">📞</div>
              <strong>Phone</strong>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </div>
          </div>
          <button class="btn btn-light">Media Kit</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      activeFilter: 'All',
      filters: ['All', 'Company News', 'Product Updates', 'Partnerships', 'Awards'],
      articles: [
        {
          id: 1,
          category: 'Product Updates',
          date: 'February 8, 2025',
          title: 'New AI-Powered Analytics Dashboard Released',
          excerpt: 'Enhanced real-time insights and predictive analytics capabilities now available for all customers.',
          icon: '🚀',
          imageClass: 'blue'
        },
        {
          id: 2,
          category: 'Partnerships',
          date: 'February 5, 2025',
          title: 'Strategic Alliance with Global Healthcare Leader',
          excerpt: 'Partnership to transform patient experience across 200+ healthcare facilities worldwide.',
          icon: '🤝',
          imageClass: 'teal'
        },
        {
          id: 3,
          category: 'Awards',
          date: 'January 28, 2025',
          title: 'Amplify Named Best CX Solution Provider 2025',
          excerpt: 'Industry recognition for excellence in customer experience innovation and implementation.',
          icon: '🏆',
          imageClass: 'purple'
        },
        {
          id: 4,
          category: 'Company News',
          date: 'January 20, 2025',
          title: 'Opening New Innovation Hub in Silicon Valley',
          excerpt: 'Expansion includes state-of-the-art R&D facilities and customer experience labs.',
          icon: '🏢',
          imageClass: 'green'
        },
        {
          id: 5,
          category: 'Product Updates',
          date: 'January 15, 2025',
          title: 'Enhanced Security Features & Compliance Certifications',
          excerpt: 'New SOC 2 Type II and ISO 27001 certifications ensure enterprise-grade security.',
          icon: '🔒',
          imageClass: 'orange'
        },
        {
          id: 6,
          category: 'Company News',
          date: 'January 10, 2025',
          title: 'Amplify Surpasses 1000 Global Customers Milestone',
          excerpt: 'Rapid growth demonstrates market leadership and customer satisfaction across industries.',
          icon: '🎯',
          imageClass: 'red'
        }
      ],
      pressReleases: [
        {
          id: 1,
          month: 'FEB',
          day: '10',
          title: 'Q4 2024 Financial Results Exceed Expectations',
          description: 'Revenue growth of 28% YoY driven by strong demand for CX solutions and managed services expansion.'
        },
        {
          id: 2,
          month: 'JAN',
          day: '25',
          title: 'Amplify Acquires Leading AI Analytics Startup',
          description: 'Strategic acquisition strengthens AI capabilities and accelerates product innovation roadmap.'
        },
        {
          id: 3,
          month: 'JAN',
          day: '15',
          title: 'New Executive Leadership Appointments Announced',
          description: 'Industry veterans join leadership team to drive next phase of global expansion and innovation.'
        }
      ]
    }
  },
  computed: {
    filteredArticles() {
      if (this.activeFilter === 'All') {
        return this.articles
      }
      return this.articles.filter(article => article.category === this.activeFilter)
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

.featured {
  background: var(--primary-black);
  padding: 80px 0;
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  padding: 0;
  overflow: hidden;
}

.featured-image {
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.featured-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--accent-gold);
  color: var(--off-white);
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
}

.image-placeholder {
  font-size: 96px;
  opacity: 0.3;
}

.featured-content {
  padding: 40px;
}

.meta {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.category {
  color: var(--deep-brown);
  font-weight: 600;
  font-size: 14px;
}

.date {
  color: var(--text-light);
  font-size: 14px;
}

.featured-content h2 {
  font-size: 36px;
  margin-bottom: 24px;
  color: var(--deep-brown);
  line-height: 1.3;
}

.featured-content p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 16px;
  font-size: 16px;
}

.news-list {
  background: var(--primary-black);
  padding: 80px 0;
}

.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
}

.filter-bar h2 {
  font-size: 32px;
  color: var(--deep-brown);
}

.filters {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 20px;
  border-radius: 20px;
  background: var(--light-black);
  border: 1px solid var(--mid-beige);
  color: var(--deep-brown);
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: var(--accent-gold);
  color: var(--off-white);
}

.filter-btn.active {
  background: var(--accent-gold);
  color: var(--off-white);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.news-card {
  padding: 0;
  overflow: hidden;
}

.news-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-image.blue {
  background: linear-gradient(135deg, #C4B299, #DED2C1);
}

.news-image.teal {
  background: linear-gradient(135deg, #A07A58, #C4B299);
}

.news-image.purple {
  background: linear-gradient(135deg, #8B7355, #A07A58);
}

.news-image.green {
  background: linear-gradient(135deg, #2ECC71, #27AE60);
}

.news-image.orange {
  background: linear-gradient(135deg, #E67E22, #D35400);
}

.news-image.red {
  background: linear-gradient(135deg, #E74C3C, #C0392B);
}

.news-icon {
  font-size: 72px;
}

.news-content {
  padding: 32px;
}

.news-content h3 {
  font-size: 22px;
  margin-bottom: 12px;
  color: var(--deep-brown);
  line-height: 1.3;
}

.news-content p {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more {
  color: var(--deep-brown);
  font-weight: 600;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: var(--accent-gold);
}

.load-more {
  text-align: center;
}

.press-releases {
  background: var(--primary-black);
  padding: 80px 0;
}

.press-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 60px;
}

.press-item {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 30px;
  align-items: center;
  padding: 30px;
  background: var(--light-black);
  border: 1px solid var(--mid-beige);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.press-item:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 20px rgba(160, 122, 88, 0.2);
  border-color: var(--accent-gold);
}

.press-date {
  text-align: center;
  background: var(--accent-gold);
  color: var(--off-white);
  border-radius: 12px;
  padding: 16px;
}

.month {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.day {
  font-size: 32px;
  font-weight: 800;
}

.press-content h3 {
  font-size: 20px;
  margin-bottom: 8px;
  color: var(--deep-brown);
}

.press-content p {
  color: var(--text-light);
  line-height: 1.6;
}

.press-link {
  color: var(--deep-brown);
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.press-link:hover {
  color: var(--accent-gold);
}

.media-contact {
  padding: 100px 0;
}

.contact-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.contact-content h2 {
  font-size: 42px;
  color: white;
  margin-bottom: 20px;
}

.contact-content > p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  line-height: 1.6;
}

.contact-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.contact-box {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-box .icon {
  font-size: 48px;
}

.contact-box strong {
  color: white;
  font-size: 16px;
}

.contact-box a {
  color: white;
  font-size: 18px;
  font-weight: 600;
  transition: opacity 0.3s ease;
}

.contact-box a:hover {
  opacity: 0.8;
}

@media (max-width: 968px) {
  .page-title {
    font-size: 38px;
  }

  .featured-card {
    grid-template-columns: 1fr;
  }

  .filter-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .press-item {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>

