import React from 'react';
import { PlayCircle, Lock, CheckCircle, Zap } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Introducing Shinrai</div>
          <h1 className="hero-title">
            Negotiate. Collaborate.<br />
            Sign Deals — <span className="text-highlight">All in One Secure Platform.</span>
          </h1>
          <p className="hero-subtitle">
            A single platform where businesses and individuals can find partners, negotiate securely, and finalize contracts online.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary hero-btn">Start a Deal</button>
            <button className="btn btn-secondary hero-btn">Explore Companies</button>
            <button className="btn-demo hero-btn">
              <PlayCircle className="demo-icon" size={20} />
              Watch Demo
            </button>
          </div>
          <div className="hero-trust">
            <span className="trust-item"><Lock size={16} className="trust-icon" /> End-to-End Encrypted</span>
            <span className="trust-dot">·</span>
            <span className="trust-item"><CheckCircle size={16} className="trust-icon" /> Legally Binding Contracts</span>
            <span className="trust-dot">·</span>
            <span className="trust-item"><Zap size={16} className="trust-icon" /> Sign in Under 2 Minutes</span>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">1%</span>
              <span className="stat-label">Commission</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Secure</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Access</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="deal-room-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="mockup-title">Secure Deal Room #492</div>
            </div>
            <div className="mockup-body">
              <div className="mockup-chat">
                <div className="chat-bubble received">Let's finalize the contract terms.</div>
                <div className="chat-bubble sent">Agreed. The 1% commission model works perfectly.</div>
                <div className="chat-action">
                  <button className="btn btn-primary btn-sm">Sign Contract Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
