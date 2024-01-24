import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from '../../../config';
import mail from '../../dist/Images/mail.png';

const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const formBorder =
    'bg-transparent border-solid border-white border rounded-md p-2';

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Lorene Chew',
      message: message,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Thank you for your email! I will get back to you soon!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email: ', error);
      });
  };

  return (
    <div className='animate-fadeIn'>
      <div className='flex flex-col gap-4 px-2 pb-20 md:gap-8'>
        <h2 className='font-Fraunces font-extralight text-[#fac1e9] sm:text-xl lg:text-2xl xl:text-8xl'>
          get in touch.
        </h2>
        <div className='group relative p-20'>
          <div className='absolute inset-0 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 opacity-20 blur pointer-events-none'></div>
          <div className='grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2'>
            <div className='relative h-full w-full'>
              <img className='w-full object-cover' src={mail} alt='mail' />
            </div>
            <form
              className='flex w-fit flex-col justify-center gap-y-4 md:w-full'
              onSubmit={handleSubmit}
            >
              <input
                className={formBorder}
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={formBorder}
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className={`${formBorder} h-60 resize-none sm:h-40`}
                placeholder='Your Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className={`${formBorder}`} type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
