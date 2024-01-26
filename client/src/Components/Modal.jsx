import React, { useState } from 'react';
// import { createPortal } from 'react-dom';
import mail from '../../dist/Images/mail.png';
import closeButton from '../../dist/Images/closeButton.svg';
import checkMark from '../../dist/Images/checkMark.svg';
import doubleExclamationMark from '../../dist/Images/doubleExclamationMark.svg';

const Modal = ({ validity, open, onClose }) => {
  return validity ? (
    <div
      className={`fixed inset-0 overflow-y-auto bg-[#121033] bg-opacity-80 ${open ? 'visible z-50 animate-fadeIn' : 'invisible'}`}
    >
      <div className='flex min-h-screen items-center'>
        <div className='relative flex flex-col items-center mx-auto max-w-sm rounded-md bg-[#cbd5e1] p-6 shadow-lg md:max-w-md'>
          <h3 className='text-lg font-black text-black'>
            Email Sent Successfully
          </h3>
          <img className='w-1/2' src={checkMark} />
          <p className='text-md text-black text-center'>
          Thank you for your message.
          <br></br>
          I will get back to you soon!
          </p>
          <div className='mt-4 flex w-full justify-center text-black'>
            <img
              className='w-10 rounded-3xl bg-slate-200 bg-opacity-0 mix-blend-multiply transition duration-1000 hover:bg-opacity-50 hover:duration-200'
              src={closeButton}
              onClick={onClose}
            ></img>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`fixed inset-0 overflow-y-auto bg-[#121033] bg-opacity-80 ${open ? 'visible z-50 animate-fadeIn' : 'invisible'}`}
    >
      <div className='flex min-h-screen items-center '>
        <div className='relative flex flex-col items-center mx-auto w-full max-w-sm rounded-md bg-[#cbd5e1] p-6 shadow-lg md:max-w-md '>
          <h3 className='text-lg font-black text-black'>
            Email Unsuccessful!
          </h3>
          <img className='w-1/2' src={doubleExclamationMark} />
          <p className='text-md text-black text-center'>
            Please enter a valid email!
          </p>
          <div className='mt-4 flex w-full justify-center text-black text-center'>
            <img
              className='w-10 rounded-3xl bg-slate-200 bg-opacity-0 mix-blend-multiply transition duration-1000 hover:bg-opacity-50 hover:duration-200'
              src={closeButton}
              onClick={onClose}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;