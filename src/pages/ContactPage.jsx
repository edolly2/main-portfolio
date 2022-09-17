import React from 'react';
import styled from 'styled-components';
const ContactPageMain = styled.main`
  display: flex;
  flex-direction: column;
`;
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const ContactPageTitle = styled.h1``;
const ContactPageInfo = styled.section``;
const InfoTitle = styled.h3``;
const ContactForm = styled.form``;
const ContactFormTitle = styled.h4``;
const ContactFormLabel = styled.label``;
const ContactFormInput = styled.input``;
const ContactFormTextArea = styled.textarea``;
const ContactFormGroup = styled.div``;

const ContactPage = () => {
  return (
    <ContactPageMain>
      <ContactPageTitle>Get In Touch</ContactPageTitle>
      <InfoWrapper>
        <ContactPageInfo>
          <InfoTitle>Email</InfoTitle>
        </ContactPageInfo>
        <ContactPageInfo>
          <InfoTitle>Social Media</InfoTitle>
        </ContactPageInfo>
        <ContactPageInfo>
          <InfoTitle>Phone Number</InfoTitle>
        </ContactPageInfo>
      </InfoWrapper>
      <ContactForm>
        <ContactFormTitle>Form Title</ContactFormTitle>
        <ContactFormGroup>
          <ContactFormLabel>Name</ContactFormLabel>
          <ContactFormInput />
        </ContactFormGroup>
        <ContactFormGroup>
          <ContactFormLabel>Phone Number</ContactFormLabel>
          <ContactFormInput />
        </ContactFormGroup>
        <ContactFormGroup>
          <ContactFormLabel>Email</ContactFormLabel>
          <ContactFormInput />
        </ContactFormGroup>
        <ContactFormGroup style={{ display: 'flex', flexDirection: 'column' }}>
          <ContactFormLabel style={{ textAlign: 'center' }}>
            Share Your Thoughts
          </ContactFormLabel>
          <ContactFormTextArea />
        </ContactFormGroup>
      </ContactForm>
    </ContactPageMain>
  );
};

export default ContactPage;
