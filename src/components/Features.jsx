import React from 'react';
import { MessageSquare, PenTool, Search, Users } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      id: "deal-rooms",
      title: "Private Deal Rooms",
      description: "Secure chat spaces where companies and individuals negotiate deals with absolute privacy.",
      icon: <MessageSquare className="feature-icon-svg" />
    },
    {
      id: "e-signing",
      title: "Electronic Contract Signing",
      description: "Finalize agreements digitally without physical meetings or printing. Built-in compliance.",
      icon: <PenTool className="feature-icon-svg" />
    },
    {
      id: "discovery",
      title: "Company Discovery Engine",
      description: "Search specialized companies instantly and connect with verified partners based on quality reviews.",
      icon: <Search className="feature-icon-svg" />
    },
    {
      id: "collaboration",
      title: "Multi-Party Collaboration",
      description: "Invite multiple participants, lawyers, and stakeholders to a single negotiation room.",
      icon: <Users className="feature-icon-svg" />
    }
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">A complete platform for deal-making</h2>
          <p className="section-subtitle">Features built specifically to streamline complex B2B and B2C negotiations.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <RevealOnScroll key={feature.id} delay={index * 100}>
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <div className="feature-text-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
                <div className="feature-flare"></div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
