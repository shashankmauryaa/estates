import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const smallTextRef = useRef(null);

  useEffect(() => {
    // Initial Load Animation
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current.querySelectorAll('.char'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: 'power4.out', delay: 0.2 }
    );
    tl.fromTo(
      smallTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      "-=0.5"
    );
    tl.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' },
      "-=1"
    );

    // Parallax Scroll Animation
    gsap.to(textRef.current, {
      y: 200,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(imageRef.current, {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const text = "IRREPLACEABLE";

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-text-container container">
        <div className="hero-top-row">
          <h2 className="hero-live-in">LIVE IN</h2>
          <p className="hero-subtitle" ref={smallTextRef}>
            Stately homes built with vision,<br/>
            scope, and architectural finesse.
          </p>
        </div>
        <h1 className="hero-title" ref={textRef}>
          {text.split('').map((char, index) => (
            <span key={index} className="char-wrap">
              <span className="char">{char}</span>
            </span>
          ))}
        </h1>
      </div>
      <div className="hero-image-container">
        <img 
          src={`${import.meta.env.BASE_URL}building_cutout.png`}
          alt="Modern red building cutout" 
          className="hero-image" 
          ref={imageRef} 
        />
      </div>
    </section>
  );
};

export default Hero;
