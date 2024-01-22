import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../../../config';


const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email: ', error)
      })

  }

  const formBorder = 'bg-transparent border-solid border-white border rounded-md p-2';

  return (
    <div className='animate-fadeIn'>
      <div className='flex flex-col gap-4 md:gap-8 px-2 pb-20'>
          <h2 className='sm:text-xl lg:text-2xl xl:text-8xl text-[#fac1e9] font-Fraunces font-extralight'>
            get in touch.
          </h2>
          <form className='flex flex-col gap-y-4 w-1/2' onSubmit={handleSubmit}>
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
              className={ formBorder }
              placeholder='Your Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className={`${ formBorder }`} type='submit'> Submit </button>
          </form>
        </div>
    </div>
  )
}

export default GetInTouch;