<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="logo">
            <div class="logo-circle"></div>
            <span>PRAYUKT</span>
          </div>
          <p class="tagline">Humanizing customer service with Amazon Connect</p>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Company</h3>
          <ul>
            <li><router-link to="/who-we-are">Who We Are</router-link></li>
            <li><router-link to="/our-companies">Our Companies</router-link></li>
            <li><router-link to="/how-we-grow">How We Grow</router-link></li>
            <li><router-link to="/careers">Careers</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><router-link to="/investors">Investors</router-link></li>
            <li><router-link to="/news">News & Press</router-link></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Contact</h3>
          <ul class="contact-info">
            <li>
              <strong>Corporate Office</strong><br>
              123 Innovation Drive<br>
              Tech City, TC 12345<br>
              United States
            </li>
            <li>
              <strong>Email:</strong><br>
              info@prayukt.com
            </li>
            <li>
              <strong>Phone:</strong><br>
              +1 (555) 123-4567
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Prayukt. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #5E4033 0%, #7D5A47 100%);
  color: var(--off-white);
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section .logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 16px;
}

.logo-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-gold), var(--mid-beige));
}

.tagline {
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.9);
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-links a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--accent-gold);
  color: var(--deep-brown);
  transform: translateY(-3px);
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 12px;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.3s ease;
}

.footer-section ul li a:hover {
  color: white;
  padding-left: 5px;
}

.contact-info li {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin-bottom: 16px;
}

.contact-info strong {
  color: white;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  flex-wrap: wrap;
  gap: 20px;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.8);
}

.footer-links {
  display: flex;
  gap: 15px;
  align-items: center;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.footer-links span {
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>

