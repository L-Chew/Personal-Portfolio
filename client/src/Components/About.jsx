import React from 'react';

const About = () => {

  return (
    <div id='about'>
      <h2 className='flex my-12 text-3xl text-[#fac1e9] font-semibold uppercase'>About</h2>
      <div className='grid grid-cols-8'>
        <div className='col-start-1 col-span-9 text-3xl'>
          In late 2021, I decided to quit my job to pursue a new career in software development. It all started from when I was leading a project with a goal of consolidating all cross-functional teams' data, originally in spreadsheets, to one local source.
        </div>
      </div>
    </div>
  )
};

export default About;