import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import logo from '../Images/Lorene-Chew.png';

const Content = () => {

  const handleClick = (e) => {
    // setClickedTextColor((textColor) => (textColor === '#2DD4BE' ? '#CBD5E1' : '#2DD4BE'))
    const y = document.getElementById(`${e.target.value}`).getBoundingClientRect().top + window.pageYOffset + -10;
    // document.getElementById(`${e.target.value}`).scrollIntoView({block: 'end', behavior: 'smooth'});
    window.scrollTo({top: y, behavior: 'smooth'})
  }

  return (
    <div className='ml-20 mr-20'>
      <NavLink to='/' className='fixed'>
        <a href='' className='logo'>
          <img className='object-scale-down' src={logo} />
        </a>
      </NavLink>
      <div className='grid grid-cols-8'>
        <div className='col-start-2 col-span-2'>
          <div className='fixed flex flex-col h-screen justify-center pl-20 text-3xl'>
            <button onClick={handleClick} value='about'> About </button>
            <button onClick={handleClick} value='experience'> Experience </button>
            <button onClick={handleClick} value='projects'> Projects </button>
          </div>
        </div>
        <div className='col-start-4 col-span-5 my-20 h-100'>
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  )
};

export default Content;