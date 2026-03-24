import React from 'react';
import { Star } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      type: "B2B Supplier Deal",
      quote: "We used Shinrai to finalize a $2M component supply contract. The entire negotiation and signing process was secure, fast, and completely transparent across all our global teams.",
      author: "Sarah Jenkins",
      role: "Procurement Director",
      company: "TechCorp Logistics"
    },
    {
      id: 2,
      type: "Freelance Client Contract",
      quote: "As an independent consultant, having a secure deal room where I can invite my clients, negotiate terms, and sign legally binding contracts in under 5 minutes is a game changer.",
      author: "David Chen",
      role: "Independent Consultant",
      company: "DC Strategy"
    },
    {
      id: 3,
      type: "Internal Team Agreement",
      quote: "We needed a private space to finalize our executive compensation packages. Shinrai's end-to-end encryption gave us the peace of mind we needed to handle sensitive documents.",
      author: "Elena Rodriguez",
      role: "VP of HR",
      company: "Fintech Solutions"
    }
  ];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">Trusted by professionals worldwide</h2>
          <p className="section-subtitle">See how companies and individuals use Shinrai to secure their most important deals.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.id} delay={index * 150}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                  ))}
                </div>
                <div className="testimonial-type">{testimonial.type}</div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.author.charAt(0)}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="trust-logos">
          <p className="logos-title">Powering secure deals for innovative teams</p>
          <div className="logos-row">
            <div className="logo-placeholder">Acme Corp</div>
            <div className="logo-placeholder">GlobalTech</div>
            <div className="logo-placeholder">Nexus Industries</div>
            <div className="logo-placeholder">Stark Logistics</div>
            <div className="logo-placeholder">Vanguard Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
