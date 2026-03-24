import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Search & Invite",
      description: "Search for a specialized company or invite participants directly to the platform via email."
    },
    {
      number: "02",
      title: "Open Deal Room",
      description: "Create a secure negotiation room to discuss terms, share documents, and chat in real-time."
    },
    {
      number: "03",
      title: "Sign Digitally",
      description: "Once terms are agreed, generate the contract and all parties can sign it electronically instantly."
    }
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How Shinrai Works</h2>
        <p className="section-subtitle">A simple, 3-step process to close your next big deal without the hassle.</p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <RevealOnScroll key={index} delay={index * 200}>
              <div className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
