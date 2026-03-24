import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/UseCases.css';

const UseCases = () => {
  const cases = [
    {
      title: "Company to Company",
      tag: "B2B",
      description: "Companies collaborating on services, joint ventures, or large supplier agreements.",
      color: "blue"
    },
    {
      title: "Individual to Company",
      tag: "B2C",
      description: "Clients hiring specialized companies for professional services without physical meetings.",
      color: "green"
    },
    {
      title: "Team Collaboration",
      tag: "Internal",
      description: "Companies using rooms internally for deal discussions and stakeholder alignment.",
      color: "purple"
    }
  ];

  return (
    <section className="use-cases section" id="use-cases">
      <div className="container">
        <h2 className="section-title">Built for every type of deal</h2>
        <p className="section-subtitle">Whether you are hiring an agency or partnering with an enterprise, Shinrai adapts to your workflow.</p>

        <div className="cases-grid">
          {cases.map((useCase, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className="case-card">
                <div className={`case-tag tag-${useCase.color}`}>{useCase.tag}</div>
                <h3 className="case-title">{useCase.title}</h3>
                <p className="case-desc">{useCase.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
