import React from 'react';
import './Gallery.css';

const images = [
  '/gallery_1.png',
  '/gallery_2.png',
  '/gallery_3.png',
  '/gallery_4.png',
  '/gallery_5.png',
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery property ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
