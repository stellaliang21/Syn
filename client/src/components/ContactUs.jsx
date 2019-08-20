import React from 'react';
import styled from 'styled-components';

const ContactInfo = styled.div`
  border-style: solid;
  border-width: 3px;
  border-color: #4CAF50;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const ContactUs = () => {
  return (
    <ContactInfo> 
      <h1>Contact Us</h1>
      <p>
        If you have an questions or concerns, don't hesitate to reach out
        <br/>
        We will try to get back to you as soon as possible 
        <br/>
        Our operating hours are from 9 AM to 5 PM Monday - Friday
        <br/>
        Email: help@synbank.com
        <br/>
        Phone: 123-456-7890
      </p>
    </ContactInfo>
  )
}

export default ContactUs;