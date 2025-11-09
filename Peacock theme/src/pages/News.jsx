import React from 'react';
import './News.css';

const News = () => {
  const newsItems = [
    {
      date: "November 5, 2025",
      category: "Company News",
      title: "Prayukt Announces Record Q2 Results",
      excerpt: "Strong performance across all sectors drives 14% revenue growth and upgraded full-year guidance.",
      image: "📰"
    },
    {
      date: "October 28, 2025",
      category: "Acquisition",
      title: "Strategic Acquisition Expands Healthcare Portfolio",
      excerpt: "Agreement to acquire leading medical imaging technology company strengthens diagnostic capabilities.",
      image: "🤝"
    },
    {
      date: "October 15, 2025",
      category: "Innovation",
      title: "Next-Generation Fire Safety System Launched",
      excerpt: "Revolutionary AI-powered detection system sets new industry standard for early fire detection.",
      image: "🔥"
    },
    {
      date: "September 30, 2025",
      category: "Sustainability",
      title: "Commitment to Net Zero Emissions by 2040",
      excerpt: "Comprehensive sustainability strategy announced with ambitious carbon reduction targets.",
      image: "🌱"
    },
    {
      date: "September 12, 2025",
      category: "Awards",
      title: "Recognized as Industry Leader in Innovation",
      excerpt: "Multiple companies receive prestigious technology and innovation awards at annual industry conference.",
      image: "🏆"
    },
    {
      date: "August 25, 2025",
      category: "Expansion",
      title: "Opening New Manufacturing Facility in Asia",
      excerpt: "State-of-the-art facility will support growing demand in Asian markets and create 500 jobs.",
      image: "🏭"
    },
    {
      date: "August 10, 2025",
      category: "Partnership",
      title: "Strategic Partnership with Leading Research Institute",
      excerpt: "Collaboration to accelerate development of next-generation healthcare technologies.",
      image: "🔬"
    },
    {
      date: "July 28, 2025",
      category: "Product Launch",
      title: "Revolutionary Water Quality Monitoring System",
      excerpt: "Advanced IoT-enabled system provides real-time water safety monitoring for municipalities.",
      image: "💧"
    }
  ];

  return (
    <div className="news">
      <section className="page-hero">
        <div className="container">
          <h1>News & Press</h1>
          <p>Stay updated with our latest announcements and company news</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured News */}
          <div className="featured-news">
            <div className="featured-badge">Featured Story</div>
            <div className="featured-content">
              <div className="featured-image">
                <span className="featured-emoji">🎉</span>
              </div>
              <div className="featured-text">
                <span className="news-category">Company News</span>
                <h2>Prayukt Celebrates 50 Years of Innovation</h2>
                <p className="news-date">November 8, 2025</p>
                <p>
                  Marking five decades of growth, innovation, and commitment to making the world 
                  safer and healthier. From our founding with a single company to becoming a global 
                  group of 40+ leading technology businesses, our journey reflects our unwavering 
                  dedication to our mission and values.
                </p>
                <button className="btn btn-primary">Read Full Story</button>
              </div>
            </div>
          </div>

          {/* News Filter */}
          <div className="news-filter">
            <h3>Latest News</h3>
            <div className="filter-buttons">
              <button className="filter-btn active">All News</button>
              <button className="filter-btn">Company News</button>
              <button className="filter-btn">Product Launches</button>
              <button className="filter-btn">Acquisitions</button>
              <button className="filter-btn">Press Releases</button>
            </div>
          </div>

          {/* News Grid */}
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <article key={index} className="news-card">
                <div className="news-image">
                  <span className="news-emoji">{item.image}</span>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-category">{item.category}</span>
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="load-more">
            <button className="btn btn-secondary">Load More News</button>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="section media-contact-section">
        <div className="container">
          <div className="media-contact-content">
            <h2>Media Inquiries</h2>
            <p>
              For press inquiries, interview requests, or media materials, 
              please contact our Communications team
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>media@prayukt.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Phone</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Download Media Kit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

