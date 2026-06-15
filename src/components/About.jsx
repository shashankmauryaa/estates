import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="about-section" ref={containerRef}>
      <div className="container about-container">
        <p className="about-text" ref={textRef}>
          Every estate we present is hand-chosen<br />
          through a frame of permanence, refinement,<br />
          and timeless detail. Standards are not<br />
          a flourish. It is our discipline.
        </p>
        
        <div className="about-stats">
          <div className="stat-item">
            <h3 className="stat-number">120+</h3>
            <p className="stat-label">Portfolio Holdings</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3 className="stat-number">12</h3>
            <p className="stat-label">Global Locations</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3 className="stat-number">98%</h3>
            <p className="stat-label">Patron Loyalty Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
