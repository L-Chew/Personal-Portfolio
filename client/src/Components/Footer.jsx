import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../dist/Images/Lorene-Chew.png';

const Footer = () => {
  return (
    <div className='mb-1 mt-20 flex w-full justify-center'>
      <Link to='/'>
        <img className='w-16' src={logo} />
      </Link>
    </div>
  );
};

export default Footer;
