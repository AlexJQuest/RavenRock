import React, { useState } from 'react';
import './contactForm.css';  // Importing the CSS file
import DetailsBar from './DetailsBar'; // Import DetailsBar component
import emailjs from 'emailjs-com';  // Import EmailJS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState(''); // Error message state
  const [success, setSuccess] = useState(''); // Success message state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Phone number validation (basic format check)
  const validatePhone = (phone) => {
    const regex = /^\+?\d{10,15}$/;  // Validates international phone numbers (e.g., +233543201893)
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setSuccess(''); // Reset success message

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    // EmailJS configuration
    const templateParams = {
      to_name: 'Recipient Name',  // Replace with the actual name of the recipient, if required
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
    };

    // Sending email with EmailJS
    emailjs.send('service_0j7rwun', 'template_dbfhxff', templateParams, '7jDc6kFYMDoXEvdAn')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setError('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className="contact-page-wrapper">
      {/* Display DetailsBar component */}
      <DetailsBar />

      {/* Contact Form Section */}
      <div className="form-container">
        <div className="page-heading-wrapper">
          <h1 className="text-one">Contact Us</h1>
          <p className="text-two">Any questions or remarks? Just write us a message.</p>
        </div>

        <form onSubmit={handleSubmit} className="form-elements">
          <div className="inputboxes">
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

            {/* Show error message if there's one */}
            {error && <div className="error-message">{error}</div>}

            {/* Show success message if form was submitted successfully */}
            {success && <div className="success-message">{success}</div>}

            <div className="subbutton">
              <button type="submit" className="submit-button">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
