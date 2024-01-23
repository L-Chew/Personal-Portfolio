import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../../../config';
import mail from '../../dist/Images/mail.png';


const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const formBorder = 'bg-transparent border-solid border-white border rounded-md p-2';

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Lorene Chew',
      message: message
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Thank you for your email! I will get back to you soon!')
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email: ', error)
      })
  }

  return (
    <div className='animate-fadeIn'>
      <div className='flex flex-col gap-4 md:gap-8 px-2 pb-20'>
        <h2 className='sm:text-xl lg:text-2xl xl:text-8xl text-[#fac1e9] font-Fraunces font-extralight'>
          get in touch.
        </h2>
        <div className='relative group p-20'>
          <div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md blur opacity-20  pointer-events-none'></div>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 justify-items-center'>
            <div className='relative w-full h-full'>
              <img className='w-full object-cover' src={mail} alt='mail' />
            </div>
            <form className='flex flex-col gap-y-4 justify-center w-fit md:w-full' onSubmit={handleSubmit}>
              <input
                className={ formBorder }
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={ formBorder }
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className={`${ formBorder } resize-none h-60 sm:h-40`}
                placeholder='Your Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className={`${ formBorder }`} type='submit'> Submit </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch;