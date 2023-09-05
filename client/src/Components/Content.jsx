import React from 'react';
import About from './About.jsx';
import Experience from './Experience.jsx';

const Content = () => {
  return (
    <div className='ml-20 mr-20'>
      <div className='grid grid-cols-2'>
        <div className='col-start-1'>
          <div className='flex flex-col text-xl'>
            <button>About</button>
            <button>Experience</button>
            <button>Projects</button>
          </div>
        </div>
        <div className='col-start-2'>
          <About />
          <Experience />
        </div>
      </div>
    </div>
  )
};

export default Content;