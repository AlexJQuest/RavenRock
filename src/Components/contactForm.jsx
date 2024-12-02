import React, { useState } from 'react';
import styled from 'styled-components';
import DetailsBar from './DetailsBar';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  Gap: 1%;
  justify-content: space-evenly;
  padding: 50px;
  background-color: rgba(1, 29, 65, 1); /* Keep the same background color */
  color: white;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: stretch; /* Make children take full width */
  justify-content: center; /* Center items vertically */
  width: 60%;
  max-width: 800px; /* Set a max width to prevent it from becoming too wide */
  background-color: #161a31;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Increased shadow for depth */
  transition: transform 0.2s; /* Smooth scale on hover */

  &:hover {
    transform: scale(1.02); /* Slightly scale the container on hover */
  }

  /* Ensure the child elements have proper spacing */
  & > * {
    margin: 10px 0; /* Space between child elements */
    width: 100%; /* Make child elements full width */
  }
`;


const PageHeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px; /* Increased margin for better spacing */
`;

const TextOne = styled.h1`
  font-size: 26px; /* Increased font size for better visibility */
  margin-bottom: 15px; /* Slightly larger margin */
`;

const TextTwo = styled.p`
  font-size: 18px; /* Increased font size for better readability */
  margin-bottom: 25px; /* Adjusted margin for spacing */
`;

const InputField = styled.input`
  width: 95%;
  padding: 12px; /* Increased padding for comfort */
  margin: 10px 0;
  border: 2px solid rgba(252, 113, 137, 1); /* Custom border color */
  border-radius: 5px;
  background-color: white; /* Set background color to white */
  color: black; /* Set text color to black for contrast */

  &:focus {
    outline: none; /* Remove default outline */
    border-color: #ff0000; /* Change border color on focus */
  }
`;

const TextArea = styled.textarea`
  width: 95%;
  padding: 12px; /* Increased padding for comfort */
  margin: 10px 0;
  border: 2px solid rgba(252, 113, 137, 1); /* Custom border color */
  border-radius: 5px;
  resize: none;
  background-color: white; /* Set background color to white */
  color: black; /* Set text color to black for contrast */

  &:focus {
    outline: none; /* Remove default outline */
    border-color: #ff0000; /* Change border color on focus */
  }
`;

const SubmitButton = styled.button`
  width: 98.5%;
  padding: 12px; /* Increased padding for comfort */
  background-color: #ff0000; /* Your specified color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px; /* Increased font size for better visibility */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transition for hover effects */

  &:hover {
    background-color: #690e0e; /* Darker shade on hover */
    transform: translateY(-2px); /* Slightly move the button up */
  }
`;

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
    <PageWrapper>
      <DetailsBar />
      <FormContainer>
        <PageHeadingWrapper>
          <TextOne>Contact Us</TextOne>
          <TextTwo>Any questions or remarks? Just write us a message.</TextTwo>
        </PageHeadingWrapper>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Write your message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </form>
      </FormContainer>
    </PageWrapper>
  );
};

export default ContactForm;
