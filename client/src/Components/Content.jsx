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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ml-20 mr-20'>
      <div className='col-start-1'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
          <div className='flex flex-col'>
            <NavLink to='/' className='relative'>
              <a href='' className='logo'>
                <img className='object-scale-down' src={logo} />
              </a>
            </NavLink>
            <div className='buttons flex flex-col'>
              <button className='text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={handleClick} value='about'>About</button>
              <button className='text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={handleClick} value='experience'>Experience</button>
              <button className='text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={handleClick} value='projects'>Projects</button>
            </div>
          </div>
        </div>
      </div>
      <div className='col-start-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8'>
          {/* <div className='col-start-1 sm:col-start-1 md:col-start-1 lg:col-start-2 xl:col-start-2'>
            <div className='fixed flex flex-col h-screen justify-center pl-20 text-3xl'>
              <button className='text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl' onClick={handleClick} value='about'> About </button>
              <button className='text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl' onClick={handleClick} value='experience'> Experience </button>
              <button className='text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl' onClick={handleClick} value='projects'> Projects </button>
            </div>
          </div> */}
          <div className='col-start-1 sm:col-start-1 sm:col-span-2 md:col-start-1 md:col-span-3 lg:col-start-1 lg:col-span-4 xl:col-start-1 xl:col-span-8'>
            <About />
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Content;