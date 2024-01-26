import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from '../../../config';
import mail from '../../dist/Images/mail.png';
import Modal from '../Components/Modal.jsx';

const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  // const formInputStyle = 'w-full rounded-md bg-transparent p-2 text-white lg:text-[#634485]';
  // const inputDivStyle = 'rounded-md border border-solid border-purple-400 bg-white';

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
        // alert('Thank you for your email! I will get back to you soon!');
        setModalOpen(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email: ', error);
      });
  };

  const handleClose = () => {
    setModalOpen(false);
  }

  return (
    <div className='animate-fadeIn'>
      <Modal className='' open={modalOpen} onClose={handleClose} />

      <div className='flex flex-col gap-4 px-2 pb-20 md:gap-8'>
        <h2 className='font-Fraunces font-extralight text-[#fac1e9] text-4xl lg:text-6xl xl:text-8xl'>
          get in touch.
        </h2>
        <div className='group relative rounded-2xl bg-slate-300 p-20'>
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
              className='flex w-fit flex-col justify-center gap-y-8 md:w-full'
              onSubmit={handleSubmit}
            >
              <div className='rounded-md border border-solid border-purple-400 bg-white'>
                {/* className={`${inputDivStyle}`} */}
                <label className='relative'>
                  <input
                    // className={`${formInputStyle}`}
                    className={`w-full rounded-md bg-transparent p-2 text-white xl:text-[#634485]`}
                    type='text'
                    placeholder=''
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <span className='input-text absolute -left-6 -top-1 mx-6 px-2 text-lg text-white text-opacity-80 transition duration-200 xl:text-[#634485]'>
                    Full Name
                  </span>
                </label>
              </div>
              <div className='rounded-md border border-solid border-purple-400 bg-white'>
                {/* className={`${inputDivStyle}`} */}
                <label className='relative'>
                  <input
                    // className={`${formInputStyle}`}
                    className={`w-full rounded-md bg-transparent p-2 text-white xl:text-[#634485]`}
                    type='text'
                    placeholder=''
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className='input-text absolute -left-6 -top-1 mx-6 px-2 text-lg text-white text-opacity-80 transition duration-200 xl:text-[#634485]'>
                    Email
                  </span>
                </label>
              </div>
              <div className='rounded-md border border-solid border-purple-400 bg-white'>
                {/* className={`${inputDivStyle}`} */}
                <label className='relative'>
                  <textarea
                    // className={`${formInputStyle} h-60 w-full resize-none sm:h-40`}
                    className={`h-60 w-full resize-none rounded-md bg-transparent p-2 text-white sm:h-40 xl:text-[#634485]`}
                    placeholder=''
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <span className='input-text absolute -left-6 mx-6 px-2 pt-1 text-lg text-white text-opacity-80 transition duration-200 xl:text-[#634485]'>
                    Message
                  </span>
                </label>
              </div>
              <button
                // className={`${formInputStyle} hover:from-pink-600 to-purple-600 transition duration-1000 hover:bg-gradient-to-r hover:font-semibold hover:text-white hover:opacity-100 hover:duration-200`}
                className={`text-[#180e22] rounded-md border border-solid  border-purple-400 from-pink-600 to-purple-600 p-2 bg-white hover:bg-gradient-to-r hover:font-semibold hover:text-white hover:opacity-100 hover:duration-200`}
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
