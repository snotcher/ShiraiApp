import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <h2 className="section-title">Transparent Pricing</h2>
        <p className="section-subtitle">We only make money when you successfully close a deal. No hidden fees, no subscriptions.</p>

        <div className="pricing-context">
          <h3>Why Pay-As-You-Go?</h3>
          <p>Traditional contract software locks you into expensive monthly subscriptions whether you are closing deals or not. With Shinrai, you get a premium platform for free, and we only succeed when you succeed.</p>
        </div>

        <RevealOnScroll delay={100}>
          <div className="pricing-card-wrapper">
            <div className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-badge">Pay as you go</span>
                <div className="pricing-rate">1%</div>
                <div className="pricing-label">commission on successful contracts</div>
              </div>
              
              <div className="pricing-body">
                <ul className="pricing-features">
                  <li><span className="check-icon">✓</span> Unlimited Deal Rooms</li>
                  <li><span className="check-icon">✓</span> Free Company Discovery</li>
                  <li><span className="check-icon">✓</span> Multi-Party Chat</li>
                  <li><span className="check-icon">✓</span> Electronic Signatures</li>
                  <li><span className="check-icon">✓</span> Secure Document Storage</li>
                </ul>
                <div className="pricing-action">
                  <button className="btn btn-primary w-full">Create Free Account</button>
                  <p className="pricing-note">Free to sign up, only pay when you close.</p>
                </div>
              </div>
            </div>
            
            <div className="pricing-faq">
              <div className="p-faq-item">
                <h4>When does the 1% apply?</h4>
                <p>Only when a contract is signed and legally binding through our platform.</p>
              </div>
              <div className="p-faq-item">
                <h4>Is there a cap?</h4>
                <p>Yes. The commission is capped at $5,000 per deal. You will never pay more than that, regardless of the contract size.</p>
              </div>
              <div className="p-faq-item">
                <h4>What if the deal falls through?</h4>
                <p>If you negotiate but don't sign, you pay absolutely nothing. The deal room and tools are completely free to use.</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Pricing;
