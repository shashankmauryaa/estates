import React from 'react';
import './Gallery.css';

const images = [
  `${import.meta.env.BASE_URL}gallery_1.png`,
  `${import.meta.env.BASE_URL}gallery_2.png`,
  `${import.meta.env.BASE_URL}gallery_3.png`,
  `${import.meta.env.BASE_URL}gallery_4.png`,
  `${import.meta.env.BASE_URL}gallery_5.png`,
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
