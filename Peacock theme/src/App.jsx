import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IndianDecor from './components/IndianDecor';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import OurCompanies from './pages/OurCompanies';
import HowWeGrow from './pages/HowWeGrow';
import Investors from './pages/Investors';
import News from './pages/News';
import Careers from './pages/Careers';

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <IndianDecor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-companies" element={<OurCompanies />} />
            <Route path="/how-we-grow" element={<HowWeGrow />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

