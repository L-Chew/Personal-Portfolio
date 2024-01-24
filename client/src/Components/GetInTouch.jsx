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

  // const formInputStyle =
  //   'rounded-md border border-solid border-white bg-transparent bg-white p-2 text-[#424d5a] placeholder-[#424d5a]';

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
        <div className='group relative rounded-md bg-slate-300 p-20'>
          <div className='pointer-events-none absolute inset-0 rounded-md bg-gradient-to-r from-pink-300 to-purple-600 opacity-50 blur'></div>
          <div className='grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2'>
            <div className='relative h-full w-full'>
              <img
                className='w-full object-cover brightness-0 '
                src={mail}
                alt='mail'
              />
              <div className='absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-purple-400 opacity-90 mix-blend-multiply blur-xl filter'></div>
              <div className='animation-delay-2000 absolute left-52 top-0 h-72 w-72 animate-blob  rounded-full bg-blue-400 opacity-90 mix-blend-multiply blur-xl filter'></div>
              <div className='animation-delay-4000 absolute -bottom-4 left-24 h-72 w-72 animate-blob rounded-full bg-pink-400 opacity-90 mix-blend-multiply blur-xl filter'></div>
            </div>
            <form
              className='flex w-fit flex-col justify-center gap-y-4 md:w-full'
              onSubmit={handleSubmit}
            >
              <input
                // className={`${formInputStyle}`}
                className={`rounded-md border border-solid border-white bg-transparent bg-white p-2 text-[#424d5a] placeholder-[#424d5a]`}
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                // className={`${formInputStyle}`}
                className={`rounded-md border border-solid border-white bg-transparent bg-white p-2 text-[#424d5a] placeholder-[#424d5a]`}
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                // className={`${formInputStyle} h-60 resize-none sm:h-40`}
                className={`h-60 resize-none rounded-md border border-solid border-white bg-transparent bg-white p-2 text-[#424d5a] placeholder-[#424d5a] sm:h-40`}
                placeholder='Your Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                // className={`${formInputStyle} hover:from-pink-600 to-purple-600 transition duration-1000 hover:bg-gradient-to-r hover:font-semibold hover:text-white hover:opacity-100 hover:duration-200`}
                className={`rounded-md border border-solid border-white bg-transparent bg-white hover:bg-gradient-to-r from-pink-600 to-purple-600 p-2 text-[#424d5a] placeholder-[#424d5a] transition duration-1000 hover:font-semibold hover:text-white hover:opacity-100 hover:duration-200`}
                type='submit'
              >
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
