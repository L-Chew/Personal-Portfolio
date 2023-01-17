import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../../../config.js';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  /* background-color: #fbcde59d; */
  /* color: #c2c2c2; */
`;

const Label =styled.label`
  font-family: 'Gambarino Regular';
  font-size: 20px;
  letter-spacing: 0.1em;
`;

const SubmitButton = styled.input`
  background-color: #ff79be9d;
  color: #c2c2c2;
  font-family: 'Gambarino-Regular';
  font-size: 15px;
  letter-spacing: 0.1em;
`;

const Contact = () => {
  const form = useRef();
  // this wouldnt work because if error, we'd still like a popup error message; rethink
  // const {successfulSubmit, setSuccessfulSubmit} = useState(false);

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
        <Label>Name</Label>
        <input className='inputs' type='text' name='user_name' />
        <Label>Email</Label>
        <input className='inputs' type='email' name='user_email' />
        <Label>Message</Label>
        <textarea className='inputs' name='message' />
        <SubmitButton type='submit' value='Send' />
      </ContactForm>
    </>
  )
}

export default Contact;