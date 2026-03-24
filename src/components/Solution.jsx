import React from 'react';
import { Building2, MessageCircle, PenTool } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Solution.css';

const Solution = () => {
  const steps = [
    {
      title: "Find specialized companies",
      icon: <Building2 className="solution-icon-svg" />
    },
    {
      title: "Open secure chat rooms",
      icon: <MessageCircle className="solution-icon-svg" />
    },
    {
      title: "Sign contracts instantly",
      icon: <PenTool className="solution-icon-svg" />
    }
  ];

  return (
    <section className="solution section" id="solution">
      <div className="container solution-container">
        <div className="solution-text">
          <h2 className="solution-title">Everything you need to close a deal, perfectly integrated.</h2>
          <p className="solution-desc">
            Shinrai unifies company discovery, secure multi-party communication, and electronic document signing into a single, seamless workflow. No more context switching or lost emails.
          </p>
        </div>
        
        <div className="solution-features">
          {steps.map((step, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className={`solution-feature-card card-${index + 1}`}>
                <div className="solution-icon-wrapper">
                  {step.icon}
                </div>
                <span className="solution-feature-title">{step.title}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
