import React, { useState } from 'react';
import './contactForm.css';  // Importing the CSS file
import DetailsBar from './DetailsBar';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <div className="page-wrapper">
      <DetailsBar />
      <div className="form-container">
        <div className="page-heading-wrapper">
          <h1 className="text-one">Contact Us</h1>
          <p className="text-two">Any questions or remarks? Just write us a message.</p>
        </div>
        <div className="form-elements">
          <form onSubmit={handleSubmit}>
            <div className='inputboxes'>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-field"
              />
              <textarea
                name="message"
                placeholder="Write your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="text-area"
              />
            </div>
           <div className='subbutton'> <button type="submit" className="submit-button">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
