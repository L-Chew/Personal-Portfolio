import React, { useState, useEffect } from 'react';
import closeButton from '../../dist/Images/Email/closeButton.svg';
import checkMark from '../../dist/Images/Email/checkMark.svg';
import exclamationMark from '../../dist/Images/Email/exclamationMark.svg';
import turtle from '../../dist/Images/Email/turtle.svg';

const Modal = ({ validity, open, onClose, loading }) => {
  return loading ? (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121033] bg-opacity-80'>
      <div class='relative left-10'>
        <div class='h-20 w-20 rounded-full border-2 border-purple-200'></div>
        <div class='absolute top-0 h-20 w-20 animate-spin rounded-full border-t-2 border-purple-700'></div>
      </div>
      <div class='relative left-5'>
        <div class='h-10 w-10 rounded-full border-2 border-purple-200'></div>
        <div class='absolute left-0 top-0 h-10 w-10 animate-spin rounded-full border-t-2 border-purple-700'></div>
      </div>
      <div class='relative -left-1'>
        <div class='h-5 w-5 rounded-full border-2 border-purple-200'></div>
        <div class='absolute left-0 top-0 h-5 w-5 animate-spin rounded-full border-t-2 border-purple-700'></div>
      </div>
      <div>
        <img className='w-24 skew-y-12' src={turtle} />
      </div>
    </div>
  ) : validity ? (
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
          <p className='text-center text-2xl text-[#3c3b67]'>
            Please enter a valid email!
          </p>
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