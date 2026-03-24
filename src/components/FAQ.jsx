import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is my contract legally binding?",
      answer: "Yes, all contracts signed on Shinrai comply with major e-signature laws (eIDAS, ESIGN, UETA) and are fully legally binding globally."
    },
    {
      question: "Who can access my Deal Room?",
      answer: "Only the people you explicitly invite. Our deal rooms use end-to-end encryption, and you control exactly who has view or sign permissions."
    },
    {
      question: "What types of companies can I find on the discovery engine?",
      answer: "You can find vetted B2B partners across industries including IT & Software, Legal Services, Marketing, Logistics, Construction, and more."
    },
    {
      question: "How do I invite someone who isn't on Shinrai?",
      answer: "Simply send them a secure email invite link directly from your workspace. They can join your room as a guest in seconds without setting up a full profile."
    },
    {
      question: "Is there really no monthly subscription fee?",
      answer: "Correct. We believe software should only make money when it delivers value. You only pay a 1% commission (capped at $5,000) when a deal is successfully signed."
    }
  ];

  return (
    <section className="faq section" id="faq">
      <div className="faq-bg"></div>
      <div className="container faq-container">
        <h2 className="section-title text-center text-white">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center">Everything you need to know about the product and billing.</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <ChevronDown className="faq-icon" size={20} />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
