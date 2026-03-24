import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Shinrai</div>
            <p className="footer-desc">
              The unified digital deal-making platform for modern businesses and individuals.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#use-cases">Use Cases</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Legal</h4>
            <ul>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shinrai. All rights reserved.</p>
          <div className="social-links">
            <a href="#twitter" className="social-icon">𝕏</a>
            <a href="#linkedin" className="social-icon">in</a>
            <a href="#github" className="social-icon">gh</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
