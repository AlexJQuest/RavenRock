// FormPage.js
import React from 'react';
import styled from 'styled-components';
import DetailsBar from './DetailsBar';

const FormPage = () => {
  return (
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contact Us</TextOne>
        <TextTwo>Any question or remark? Just write us a message</TextTwo>
      </PageHeadingWrapper>
      <FormContainer>
        <DetailsBar />
      </FormContainer>
    </PageWrapper>
  );
};

export default FormPage;

// Styled components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(245, 245, 245);
  min-height: 100vh;
  padding: 50px 20px;
`;

const PageHeadingWrapper = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const TextOne = styled.h1`
  color: rgb(8, 8, 63);
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TextTwo = styled.p`
  color: rgb(100, 100, 100);
  font-size: 18px;
  margin-top: 0;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;
