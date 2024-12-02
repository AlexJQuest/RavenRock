// DetailsBar.js
import React from 'react';
import '../Components/Detailsbar.css';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const DetailsBar = () => {
  return (
    <div className="details-bar">
      <h2>Contact Information</h2>
      <p>Fill up the form and our team will get back to you within 24 hours</p>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhone color="white " />
          <span>+233543201893</span>
        </div>
        <div className="contact-item">
          <FaEnvelope color="white " />
          <span>aljay3334@gmail.com</span>
        </div>
      </div>

      <div className="circles">
        <div className="big-circle"></div>
        <div className="small-circle"></div>
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com">
          <FaFacebook color="#fff" size={20} />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram color="#fff" size={20} />
        </a>
        <a href="https://www.linkedin.com">
          <FaLinkedin color="#fff" size={20} />
        </a>
      </div>
    </div>
  );
};

export default DetailsBar;
