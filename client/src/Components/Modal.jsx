import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import mail from '../../dist/Images/mail.png';
import closeButton from '../../dist/Images/closeButton.svg';

const Modal = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 overflow-y-auto bg-[#121033] bg-opacity-80 ${open ? 'animate-fadeIn z-50 visible' : 'invisible'}`}
    >
      <div className='flex min-h-screen items-center '>
        <div className='relative mx-auto w-full max-w-md rounded-md bg-[#cbd5e1] p-6 shadow-lg'>
          <h3 className='text-lg font-black text-black'>
            Email Sent Successfully
          </h3>
          <p className='text-md text-black'>
            Thank you for your message. I will get back to you soon!
          </p>
          <div className='mt-4 flex w-full justify-center text-black'>
            <img
              className='w-10 bg-pink-300 bg-opacity-0 mix-blend-multiply transition duration-1000 hover:bg-opacity-50 hover:duration-200'
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