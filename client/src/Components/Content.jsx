import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';

const Content = () => {

  // const [textColor, setClickedTextColor] = useState('#CBD5E1');

  const handleClick = (e) => {
    // setClickedTextColor((textColor) => (textColor === '#2DD4BE' ? '#CBD5E1' : '#2DD4BE'))
    document.getElementById(`${e.target.value}`).scrollIntoView({block: 'end', behavior: 'smooth'});
  }


  return (
    <div className='ml-20 mr-20'>
      <NavLink to='/' className='fixed w-screen mt-10 text-3xl text-[#2DD4BE]'> LC </NavLink>
      <div className='grid grid-cols-8'>
        <div className='col-start-2 col-span-2'>
          <div className='fixed flex flex-col h-screen justify-center pl-20 text-xl'>
            <button onClick={handleClick} value='about'> About </button>
            <button onClick={handleClick} value='experience'> Experience </button>
            <button onClick={handleClick} value='projects'> Projects </button>
          </div>
        </div>
        <div className='col-start-5 col-span-4 my-20 h-100'>
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  )
};

export default Content;