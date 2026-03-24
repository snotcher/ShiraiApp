import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">Shinrai</a>
        <div className="navbar-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How it works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>
        <div className="navbar-actions">
          <div className="lang-switcher">
            <Globe size={18} className="lang-icon" />
            <select className="lang-select">
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
            </select>
          </div>
          <a href="#login" className="nav-link login-btn">Login</a>
          <button className="btn btn-primary get-started-btn">Get Started</button>
        </div>
        
        <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-links">
            <a href="#features" className="nav-link" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="nav-link" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#pricing" className="nav-link" onClick={() => setMenuOpen(false)}>Pricing</a>
            <hr className="drawer-divider" />
            <a href="#login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</a>
            <button className="btn btn-primary" onClick={() => setMenuOpen(false)}>Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
