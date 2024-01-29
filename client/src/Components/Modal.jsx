import React, { useState } from 'react';
import closeButton from '../../dist/Images/Email/closeButton.svg';
import checkMark from '../../dist/Images/Email/checkMark.svg';
import exclamationMark from '../../dist/Images/Email/exclamationMark.svg';

const Modal = ({ validity, open, onClose }) => {
  return validity ? (
    <div
      className={`fixed inset-0 overflow-y-auto bg-[#121033] bg-opacity-80 ${open ? 'visible z-50 animate-fadeIn' : 'invisible'}`}
    >
      <div className='flex min-h-screen items-center'>
        <div className='relative mx-auto flex max-w-sm flex-col items-center gap-y-4 rounded-3xl bg-[#cbd5e1] p-6 py-12 shadow-lg md:max-w-md'>
          <h3 className='text-3xl font-semibold text-[#3c3b67]'>Email Sent</h3>
          <img className='w-1/3' src={checkMark} />
          <p className='text-center text-xl text-[#3c3b67]'>
            Thank you for your message.
            <br></br>I will get back to you soon!
          </p>
          <div className='mt-4 flex w-full justify-center'>
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
        <div className='relative mx-auto flex max-w-sm flex-col items-center gap-y-4 rounded-3xl bg-[#cbd5e1] p-6 py-16 shadow-lg md:max-w-md '>
          <img className='w-1/3 pb-4' src={exclamationMark} />
          <p className='text-center text-2xl text-[#3c3b67]'>Please enter a valid email!</p>
          <div className='mt-4 flex w-full justify-center text-center text-black'>
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