import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import OurCompanies from './pages/OurCompanies';
import HowWeGrow from './pages/HowWeGrow';
import Investors from './pages/Investors';
import News from './pages/News';
import Careers from './pages/Careers';
import './App.css';

// Peacock Particles Component
function PeacockParticles() {
  return (
    <div className="peacock-particles">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="peacock-particle"></div>
      ))}
    </div>
  );
}

// Animated Routes with 3D effects
function AnimatedRoutes() {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    // Page transition effect
    if (mainRef.current) {
      mainRef.current.style.opacity = '0';
      mainRef.current.style.transform = 'translateX(50px) rotateY(10deg)';
      
      setTimeout(() => {
        mainRef.current.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        mainRef.current.style.opacity = '1';
        mainRef.current.style.transform = 'translateX(0) rotateY(0deg)';
      }, 50);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-layer');
      
      parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.05;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // 3D tilt effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.card-3d');
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        if (card.matches(':hover')) {
          card.style.transform = `
            translateY(-15px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateZ(20px)
          `;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main ref={mainRef} className="main-content">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-companies" element={<OurCompanies />} />
        <Route path="/how-we-grow" element={<HowWeGrow />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <PeacockParticles />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
