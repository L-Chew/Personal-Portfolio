import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  VERIFALIA_API_USER_KEY,
  VERFIFALIA_API_USER_PW,
} from '../../../config.js';
import mail3 from '../../dist/Images/Email/mail3.png';
import Modal from '../Components/Modal.jsx';
import { VerifaliaRestClient } from 'verifalia';

const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [emailValidity, setEmailValidity] = useState(true);
  const [loading, setLoading] = useState(false);

  const verifalia = new VerifaliaRestClient({
    username: VERIFALIA_API_USER_KEY,
    password: VERFIFALIA_API_USER_PW,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Lorene Chew',
      message: message,
    };

    verifalia.emailValidations
      .submit(email)
      .then((result) => {
        const emailCheck = result.entries[0].classification;
        return emailCheck === 'Deliverable'
          ? emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              templateParams,
              EMAILJS_PUBLIC_KEY,
            )
          : Promise.reject('Invalid email');
      })
      .then((response) => {
        console.log('Email sent successfully!', response);
        setEmailValidity(true);
        setModalOpen(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email: ', error);
        setEmailValidity(false);
        setModalOpen(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className='animate-fadeIn overflow-x-clip'>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        validity={emailValidity}
        loading={loading}
      />
      {/* Main Content */}
      <div className='flex flex-col gap-4 px-2 pb-20 md:gap-8'>
        <h2 className='font-Fraunces text-6xl font-extralight text-[#fac1e9] lg:text-8xl'>
          get in touch.
        </h2>
      </div>
      <div className='group relative rounded-2xl bg-slate-300 p-20'>
        <div className='pointer-events-none absolute inset-0 rounded-md bg-gradient-to-r from-pink-300 to-purple-600 opacity-50 blur'></div>
        <div className='relative grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2'>
          <div className='relative z-10 mr-0 flex h-full items-center md:mr-16'>
            <img className='invert filter' src={mail3} alt='mail' />
          </div>
          <div className='absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-purple-400 opacity-90 mix-blend-multiply blur-xl filtern overflow-x-clip'></div>
          <div className='animation-delay-2000 absolute left-52 top-0 h-72 w-72 animate-blob  rounded-full bg-blue-400 opacity-90 mix-blend-multiply blur-xl filter overflow-x-clip'></div>
          <div className='animation-delay-4000 absolute -bottom-4 left-24 h-72 w-72 animate-blob rounded-full bg-pink-400 opacity-90 mix-blend-multiply blur-xl filter overflow-x-clip'></div>
          <form
            className=' flex w-fit flex-col justify-center gap-y-8 md:w-full'
            onSubmit={handleSubmit}
          >
            <div className='rounded-xl border border-solid border-purple-400 '>
              <label className='relative'>
                <input
                  className={`w-full rounded-xl bg-[#e0abf2] p-3 text-[#634485]`}
                  type='text'
                  placeholder=''
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span className='input-text absolute -left-6 -top-1 mx-6 px-2 text-lg text-[#634485] text-opacity-80 transition duration-200'>
                  Full Name
                </span>
              </label>
            </div>
            <div className='rounded-xl border border-solid border-purple-400'>
              <label className='relative'>
                <input
                  className={`w-full rounded-xl bg-[#e0abf2] p-3 text-[#634485]`}
                  type='text'
                  placeholder=''
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className='input-text absolute -left-6 -top-1 mx-6 px-2 text-lg text-[#634485] text-opacity-80 transition duration-200'>
                  Email
                </span>
              </label>
            </div>
            <div className='z-10 rounded-xl border border-solid border-purple-400 bg-[#e0abf2]'>
              <label className='relative'>
                <textarea
                  className={`h-60 w-full resize-none rounded-xl bg-[#e0abf2] p-3 text-[#634485] sm:h-40`}
                  placeholder=''
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <span className='input-text absolute -left-6 mx-6 px-2 pt-1 text-lg text-[#634485] text-opacity-80 transition duration-200'>
                  Message
                </span>
              </label>
            </div>
            <button
              className={`z-10 rounded-xl border border-solid border-purple-400 bg-[#e0abf2]  from-pink-600 to-purple-600 p-2 text-[#644781] hover:bg-gradient-to-r hover:font-semibold hover:text-white hover:opacity-100 hover:duration-200`}
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
