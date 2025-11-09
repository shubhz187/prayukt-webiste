import './News.css';

function News() {
  const newsItems = [
    {
      category: 'Company News',
      date: 'March 15, 2024',
      title: 'Prayukt Announces Record Q4 2024 Results',
      excerpt: 'Revenue growth of 12% year-over-year driven by strong performance across all divisions...',
      featured: true
    },
    {
      category: 'Innovation',
      date: 'March 10, 2024',
      title: 'New AI-Powered Safety Detection System Launched',
      excerpt: 'Revolutionary technology enhances workplace safety with real-time hazard detection...'
    },
    {
      category: 'Acquisition',
      date: 'March 5, 2024',
      title: 'Prayukt Acquires Leading Healthcare Tech Company',
      excerpt: 'Strategic acquisition expands our healthcare portfolio and technological capabilities...'
    },
    {
      category: 'Sustainability',
      date: 'February 28, 2024',
      title: 'Achieving Carbon Neutrality: Our 2024 Commitment',
      excerpt: 'Comprehensive plan to achieve carbon neutrality across all operations by 2025...'
    },
    {
      category: 'Awards',
      date: 'February 20, 2024',
      title: 'Prayukt Named Industry Leader for Innovation',
      excerpt: 'Recognized for outstanding contribution to safety and healthcare technology...'
    },
    {
      category: 'Partnership',
      date: 'February 15, 2024',
      title: 'Strategic Partnership with Global Healthcare Leader',
      excerpt: 'Collaboration to develop next-generation medical monitoring solutions...'
    }
  ];

  return (
    <div className="news">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-title fade-in">
            News & <span className="gradient-text">Media</span>
          </h1>
          <p className="page-subtitle">
            Stay updated with the latest news, announcements, and insights from Prayukt
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="featured-news-section">
        <div className="featured-news-container">
          <span className="section-tag">Featured</span>
          <div className="featured-card">
            <div className="featured-badge">Latest News</div>
            <span className="featured-category">{newsItems[0].category}</span>
            <h2 className="featured-title">{newsItems[0].title}</h2>
            <p className="featured-excerpt">{newsItems[0].excerpt}</p>
            <div className="featured-footer">
              <span className="featured-date">{newsItems[0].date}</span>
              <a href="#" className="featured-link">Read Full Article →</a>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="news-grid-section">
        <div className="news-grid-container">
          <div className="section-header">
            <span className="section-tag">Recent Updates</span>
            <h2 className="section-title">Latest News</h2>
          </div>

          <div className="news-grid">
            {newsItems.slice(1).map((item, index) => (
              <article key={index} className="news-card">
                <div className="news-card-header">
                  <span className="news-category">{item.category}</span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="news-link">Read More →</a>
              </article>
            ))}
          </div>

          <div className="news-load-more">
            <button className="btn btn-secondary">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="press-section">
        <div className="press-container">
          <span className="section-tag">Press Releases</span>
          <h2 className="section-title">Official Announcements</h2>
          
          <div className="press-list">
            <div className="press-item">
              <div className="press-date">March 15, 2024</div>
              <div className="press-content">
                <h3>Q4 2024 Financial Results</h3>
                <p>Prayukt announces strong fourth quarter and full year 2024 results</p>
                <a href="#" className="press-link">Download PDF</a>
              </div>
            </div>
            <div className="press-item">
              <div className="press-date">March 5, 2024</div>
              <div className="press-content">
                <h3>Strategic Acquisition Announcement</h3>
                <p>Prayukt to acquire HealthTech Innovations for $450M</p>
                <a href="#" className="press-link">Download PDF</a>
              </div>
            </div>
            <div className="press-item">
              <div className="press-date">February 28, 2024</div>
              <div className="press-content">
                <h3>Sustainability Initiative Launch</h3>
                <p>New carbon neutrality roadmap and environmental commitments</p>
                <a href="#" className="press-link">Download PDF</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="media-contact-section">
        <div className="media-contact-container">
          <h2 className="section-title">Media Inquiries</h2>
          <p className="section-description">
            For press inquiries, interview requests, or media materials
          </p>
          <div className="media-contact-cards">
            <div className="media-contact-card">
              <h3>Press Office</h3>
              <p>Email: press@prayukt.com</p>
              <p>Phone: +1 (555) 123-4568</p>
            </div>
            <div className="media-contact-card">
              <h3>Media Resources</h3>
              <a href="#" className="media-resource-link">Brand Guidelines</a>
              <a href="#" className="media-resource-link">Press Kit</a>
              <a href="#" className="media-resource-link">Executive Bios</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;

