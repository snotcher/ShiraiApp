import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Discovery from './components/Discovery';
import Security from './components/Security';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <Features />
      <Discovery />
      <Security />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
