<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <router-link to="/" class="logo">
          <div class="logo-circle"></div>
          <span>PRAYUKT</span>
        </router-link>
        
        <button class="mobile-toggle" @click="toggleMobile" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" :class="{ 'active': mobileMenuOpen }">
          <li><router-link to="/" @click="closeMobile">Home</router-link></li>
          <li><router-link to="/who-we-are" @click="closeMobile">Who We Are</router-link></li>
          <li><router-link to="/our-companies" @click="closeMobile">Our Companies</router-link></li>
          <li><router-link to="/how-we-grow" @click="closeMobile">How We Grow</router-link></li>
          <li><router-link to="/investors" @click="closeMobile">Investors</router-link></li>
          <li><router-link to="/news" @click="closeMobile">News</router-link></li>
          <li><router-link to="/careers" @click="closeMobile">Careers</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMobile() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobile() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(245, 242, 236, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(94, 64, 51, 0.1);
  border-bottom: 1px solid var(--mid-beige);
}

.navbar.scrolled {
  box-shadow: 0 4px 20px rgba(94, 64, 51, 0.15);
  background: rgba(245, 242, 236, 0.98);
  border-bottom: 1px solid var(--accent-gold);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-size: 24px;
  color: var(--deep-brown);
  letter-spacing: 1px;
}

.logo-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-gold), var(--mid-beige));
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  align-items: center;
}

.nav-links a {
  color: var(--text-dark);
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-gold);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--accent-gold);
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.nav-links a.router-link-active {
  color: var(--accent-gold);
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 5px;
}

.mobile-toggle span {
  width: 25px;
  height: 3px;
  background: var(--deep-brown);
  border-radius: 3px;
  transition: all 0.3s ease;
}

@media (max-width: 968px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--off-white);
    padding: 30px;
    gap: 20px;
    box-shadow: 0 10px 30px rgba(94, 64, 51, 0.2);
    border: 1px solid var(--mid-beige);
    transform: translateY(-120%);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

