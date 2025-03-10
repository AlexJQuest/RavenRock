import React, { useState } from 'react';
import './Navbar.css';
import Hero from './../Pages/Hero.jsx';
import About from '../Pages/About.jsx';
import Mission from '../Pages/Mission.jsx';
import Contact from "../Components/contactForm";
import stairs from '../pics/stairs.png';
import cardimage2 from "../pics/structures.png";
import LOGO from "../pics/Textlogo.jpeg";
import UserStory from "./UserStory";
import userLogo from '../pics/logo.jpeg'; // Import the image

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <nav className={`navbar ${isOpen ? 'open' : 'closed'}`}>
        <img className="logo" src={LOGO} alt="RAVEN ROCK Logo" />
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home" className={isOpen ? '' : 'disabled'}>Home</a></li>
          <li><a href="#about" className={isOpen ? '' : 'disabled'}>About</a></li>
          <li><a href="#Mission" className={isOpen ? '' : 'disabled'}>Mission</a></li>
          <li><a href="#contact" className={isOpen ? '' : 'disabled'}>Contact</a></li>
        </ul>
      </nav>

      <div className="main-content">
        <section id="home" className="hero-section">
          <video className="background-video" autoPlay muted loop>
            <source src="/RavenRock/bgvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <div className='page-content'>
          <section id="Hero" className="section">
            <Hero />
          </section>

          <section id="about" className="section">
            <About />
          </section>

          <section id="Missionpane" className="Missionpane">
            <Mission
              image={stairs}
              title="Our Core Values"
              subtitle="Excellence. Integrity. Innovation."
              content="These core values have been with us from the start, shaping who we are and how we work. We thrive on transforming spaces by setting high standards, pursuing excellence, fostering trust, and supporting our team every step of the way."
            />
            <Mission
              image={cardimage2}
              title="Our Approach"
              subtitle="Pursuit of Excellence"
              content="We are dedicated to finding and implementing new and improved construction methods by bringing together the best talent, cutting-edge innovations, and strategic partnerships to anticipate and tackle emerging challenges."
            />
            <Mission
              image={stairs}
              title="Our Impact"
              subtitle="Dedicated to Positive Change"
              content="We make a difference by fostering an inclusive culture, prioritizing the safety of our workers, and actively living our core values to drive meaningful change in our industry and communities."
            />
          </section>

          <section id="UserStories" className="UserStories">
            <div className='userstoryentries'>
              <UserStory
                image={userLogo}
                title="Adrian Alex Jacobs"
                subtitle="Web Developer & Designer"
                content="Amazing work and attention to detail!"
                stars={5} // Pass an integer for the rating (1 to 5)
              />

              <UserStory
                image={userLogo}
                title="Adrian Alex Jacobs"
                subtitle="Web Developer & Designer"
                content="Amazing work and attention to detail!"
                stars={5} // Pass an integer for the rating (1 to 5)
              />

              <UserStory
                image={userLogo}
                title="Adrian Alex Jacobs"
                subtitle="Web Developer & Designer"
                content="Amazing work and attention to detail!"
                stars={5} // Pass an integer for the rating (1 to 5)
              />

              <UserStory
                image={userLogo}
                title="Adrian Alex Jacobs"
                subtitle="Web Developer & Designer"
                content="Amazing work and attention to detail!"
                stars={5} // Pass an integer for the rating (1 to 5)
              />
            </div>
          </section>

          <section id="Contact-page" className="Contact-page">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
