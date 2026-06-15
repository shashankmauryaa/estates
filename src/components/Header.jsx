import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="header container">
        <div className="logo">Estates.</div>
        <div className="menu-container">
          <button 
            className="menu-toggle" 
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <>
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </>
              ) : (
                <>
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </header>
      
      <div className={`dropdown-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="dropdown-menu-wrapper container">
          <div className="dropdown-menu-content">
            <a href="mailto:shashankmaurya7539@gmail.com" className="contact-link">shashankmaurya7539@gmail.com</a>
            <a href="tel:+917763961399" className="contact-link">+91 7763961399</a>
            <div className="social-links">
              <a href="https://www.instagram.com/_shashankmaurya/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/in/shashank-maurya7539/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/shashankmauryaa" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
