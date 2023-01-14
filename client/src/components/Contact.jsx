import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../../../config.js';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  /* color: #c2c2c2; */
`;

const SubmitButton = styled.input`
  background-color: #ff79be9d;
  color: #c2c2c2;
  font-family: 'Gambarino-Regular';
  letter-spacing: 0.1em;
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
    .then((result) => {
      console.log(result.text)
      e.target.reset();
    }, (error) => {
      console.group(error.text)
    })
  };

  return (
    <>
      <div className='sections'>
        <div className='sectionNums'> .04 </div>
        Get In Touch
      </div>
      {/*Consider wrapping form in a grid to format fields and potentially an image */}
      <ContactForm ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' />
        <label>Email</label>
        <input type='email' name='user_email' />
        <label>Message</label>
        <textarea name='message' />
        <SubmitButton type='submit' value='Send' />
      </ContactForm>
    </>
  )
}

export default Contact;