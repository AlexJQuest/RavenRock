import React from 'react';
import './Hero.css'; // Import the CSS file
import imghome from './../pics/69270745-b8c8-44cd-bc86-617f9fe0a4b8.jpg'

const HeroSection = () => {
    return (
      <div>
        <div className='stylist'>
          <section className="hero-section">
              <div className="text-column">
                    <h1> Our Story</h1>
                    <h2>We Redefine Industry Standards</h2>
                    <p>At "name", we’re redefining industry standards with groundbreaking innovation and exceptional service.
                    we’re committed to innovation and excellence, setting new standards and delivering results that exceed expectations..</p>
                    <a href="#learn-more" className="cta-button">Learn More</a>
              </div>
              <div className="image-column">
                    <img src={imghome} alt="Hero" className="hero-image" />
              </div>
              
            </section>
        </div>
      </div>
    );
  }
export default HeroSection;
