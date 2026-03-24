import React from 'react';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta section" id="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to close deals faster?</h2>
          <p className="cta-desc">
            Join thousands of companies and individuals who use Shinrai to negotiate, collaborate, and sign contracts securely online.
          </p>
          <div className="cta-actions">
            <button className="btn btn-primary cta-btn">Start Your First Deal</button>
            <button className="btn btn-outline cta-btn">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
