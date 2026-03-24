import React from 'react';
import { Plane, SearchX, MessageSquareDashed, FileWarning } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Problem.css';

const Problem = () => {
  const problems = [
    {
      title: "Costly Travel",
      description: "Business deals often require expensive travel and long in-person meetings.",
      icon: <Plane className="problem-icon-svg" />
    },
    {
      title: "Unreliable Discovery",
      description: "It's hard to find and verify reliable companies to partner with online.",
      icon: <SearchX className="problem-icon-svg" />
    },
    {
      title: "Scattered Comms",
      description: "Negotiations get lost across endless emails and fragmented message threads.",
      icon: <MessageSquareDashed className="problem-icon-svg" />
    },
    {
      title: "Fragmented Flow",
      description: "Contract signing is slow, requiring multiple tools and manual follow-ups.",
      icon: <FileWarning className="problem-icon-svg" />
    }
  ];

  return (
    <section className="problem section" id="problem">
      <div className="container">
        <h2 className="section-title">The old way of doing business is broken.</h2>
        <p className="section-subtitle">Closing deals today is slower, more expensive, and more complex than it needs to be.</p>
        
        <div className="problem-grid">
          {problems.map((prob, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="problem-card">
                <div className="problem-icon-wrapper">
                  {prob.icon}
                </div>
                <h3 className="problem-title">{prob.title}</h3>
                <p className="problem-desc">{prob.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
