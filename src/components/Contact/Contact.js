import React from 'react';
import './Contact.scss';
import ContactInfoList from './ContactInfoList';

function Contact() {
  return (
  <div className='contact-page-wrapper'>
    <h1>Contact</h1>
    <div className='contact-info-wrapper'>
      <ContactInfoList/>
    </div>
  </div>
  )
}

export default Contact;
