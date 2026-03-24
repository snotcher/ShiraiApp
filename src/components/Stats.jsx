import React, { useState, useEffect, useRef } from 'react';
import '../styles/Stats.css';

const CountUp = ({ end, duration, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const numericEnd = parseInt(end.replace(/,/g, ''));

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentVal = Math.floor(progress * numericEnd);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  const formatNumber = (num) => {
    if (end.includes(',')) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return <span ref={nodeRef}>{prefix}{formatNumber(count)}{suffix}</span>;
};

const Stats = () => {
  return (
    <section className="stats-band">
      <div className="container stats-container">
        <div className="stat-item">
          <div className="stat-value">
            <CountUp end="500" duration={2000} suffix="+" />
          </div>
          <div className="stat-title">Companies</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            <CountUp end="2,400" duration={2000} suffix="+" />
          </div>
          <div className="stat-title">Deals Closed</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            <CountUp end="98" duration={2000} suffix="%" />
          </div>
          <div className="stat-title">Satisfaction</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            <CountUp end="12" duration={2000} prefix="$" suffix="M+" />
          </div>
          <div className="stat-title">in Contracts Signed</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
