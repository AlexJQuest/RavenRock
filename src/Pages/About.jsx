import React from 'react';
import './About.css'; // Import the CSS file
import img2 from  './../pics/6193942e-75ad-4f96-88fd-a131fb43abfd.jpg'

const About = () => {
    return (
      <section className="hero-section2">
        <div className="image-column2">
          <img src={img2} alt="Hero" className="hero-image2" />
        </div>
        <div className="text-column2">
          <h1>Our Vision</h1>
          <h2>We Redefine Industry Standards</h2>
          <p>To seamlessly integrate every stage of the building lifecycle, transforming the way Cape Town constructs and elevating the industry standard for innovation and efficiency.</p>
          <a href="#learn-more" className="cta-button2">Learn More</a>
        </div>
        
      </section>
    );
  }
export default About;
