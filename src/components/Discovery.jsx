import React from 'react';
import { Search, MapPin, Star, Building2, Scale, Terminal, HardHat } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Discovery.css';

const Discovery = () => {
  const companies = [
    {
      name: "Stark Logistics",
      type: "Supply Chain",
      rating: 4.9,
      reviews: 128,
      location: "Global",
      verified: true
    },
    {
      name: "Nexus Legal Partners",
      type: "Corporate Law",
      rating: 4.8,
      reviews: 95,
      location: "Europe",
      verified: true
    },
    {
      name: "Quantum IT Solutions",
      type: "Cybersecurity",
      rating: 5.0,
      reviews: 64,
      location: "North America",
      verified: true
    }
  ];

  return (
    <section className="discovery section" id="discovery">
      <div className="container">
        <div className="discovery-header">
          <h2 className="section-title">Verified Company Discovery Engine</h2>
          <p className="section-subtitle">Don't guess who to trust. Search our vetted directory of B2B partners, read real reviews, and start negotiating instantly.</p>
        </div>

        <RevealOnScroll>
          <div className="discovery-mockup">
            <div className="mockup-search-bar">
              <div className="search-input-wrapper">
                <Search className="search-icon" size={20} />
                <input type="text" placeholder="Search for IT, Legal, Logistics..." className="search-input" readOnly />
              </div>
              <button className="btn btn-primary search-btn">Search Partners</button>
            </div>

            <div className="category-filters">
              <span className="filter-pill active">All Categories</span>
              <span className="filter-pill"><Terminal size={14} /> IT & Tech</span>
              <span className="filter-pill"><Scale size={14} /> Legal Services</span>
              <span className="filter-pill"><Building2 size={14} /> Marketing</span>
              <span className="filter-pill"><HardHat size={14} /> Construction</span>
            </div>

            <div className="company-cards">
              {companies.map((company, index) => (
                <div key={index} className="company-card">
                  <div className="company-card-header">
                    <div className="company-avatar">{company.name.charAt(0)}</div>
                    <div className="company-info">
                      <h4 className="company-name">
                        {company.name} {company.verified && <span className="verified-badge">✓</span>}
                      </h4>
                      <p className="company-type">{company.type}</p>
                    </div>
                  </div>
                  <div className="company-card-meta">
                    <div className="meta-item text-primary">
                      <Star size={14} fill="currentColor" /> {company.rating} <span className="text-muted">({company.reviews})</span>
                    </div>
                    <div className="meta-item text-muted">
                      <MapPin size={14} /> {company.location}
                    </div>
                  </div>
                  <button className="btn btn-outline btn-sm w-full mt-auto">View Profile</button>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Discovery;
