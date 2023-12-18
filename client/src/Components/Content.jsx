import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import logo from '../Images/Lorene-Chew.png';

const Content = () => {
  const rightSideRef = useRef(null);

  const handleClick = (e) => {
    const dataValue = e.target.dataset.value;
    const element = document.getElementById(dataValue);

    if (element && rightSideRef.current) {
      const y = element.getBoundingClientRect().top - rightSideRef.current.getBoundingClientRect().top + rightSideRef.current.scrollTop;
      rightSideRef.current.scrollTo({
        top: y,
        behavior: 'smooth' // Enable smooth scrolling only for the rightSide
      });
    }
    // const y = document.getElementById(`${dataValue}`).getBoundingClientRect().top + window.pageYOffset + -10;
    // window.scrollTo({top: y, behavior: 'smooth'})
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 ml-20 mr-20 min-w-[375px]'>
      <div className='leftSide mb-10'>
        <div className='flex flex-col items-center'>
          <NavLink to='/' className='relative'>
            <a href='object-scale-down' className='logo'>
              <img className='' src={logo} />
            </a>
          </NavLink>
          <div className='buttons flex flex-col items-center'>
            <span className='about sm:text-md md:text-md lg:text-lg xl:text-xl' data-value='about' onClick={handleClick}>About</span>
            <span className='experiene sm:text-md md:text-md lg:text-lg xl:text-xl' data-value='experience' onClick={handleClick}>Experience</span>
            <span className='projects sm:text-md md:text-md lg:text-lg xl:text-xl' data-value='projects' onClick={handleClick}>Projects</span>
          </div>
        </div>
      </div>
      <div className='rightSide overflow-y-scroll h-screen' ref={rightSideRef}>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8'>
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