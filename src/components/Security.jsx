import React from 'react';
import { Shield, Lock, Fingerprint, FileSignature, Database } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Security.css';

const Security = () => {
  const securityFeatures = [
    {
      icon: <Fingerprint size={32} />,
      title: "Biometric & Code Access",
      description: "Deal rooms are locked behind multi-factor authentication, ensuring only invited participants can enter."
    },
    {
      icon: <Lock size={32} />,
      title: "End-to-End Encryption",
      description: "Every message, document, and interaction is encrypted. We can't see your data, and neither can anyone else."
    },
    {
      icon: <FileSignature size={32} />,
      title: "Legally Compliant e-Signatures",
      description: "Our electronic signatures comply with eIDAS, ESIGN, and UETA regulations globally."
    },
    {
      icon: <Database size={32} />,
      title: "Private Document Storage",
      description: "Secure, redundant cloud storage for all your executed contracts and supporting documents."
    }
  ];

  return (
    <section className="security section" id="security">
      <div className="security-bg-grid"></div>
      <div className="container security-container">
        <div className="security-header text-center">
          <div className="security-icon-wrapper">
            <Shield size={48} className="shield-icon" />
          </div>
          <h2 className="section-title">Your Deals Are Fortress-Level Secure</h2>
          <p className="section-subtitle">We built Shinrai from the ground up with bank-grade security and uncompromising privacy.</p>
        </div>

        <div className="security-grid">
          {securityFeatures.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className="security-card">
                <div className="sec-icon">{feature.icon}</div>
                <h3 className="sec-title">{feature.title}</h3>
                <p className="sec-desc">{feature.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
