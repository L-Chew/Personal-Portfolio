import React from 'react';
import profilePic from '../../dist/Images/profilePic.jpeg';

const About = () => {
  return (
    <div className='animate-fadeIn flex flex-col gap-4 md:gap-8 px-2'>
      <h2 className='flex sm:text-xl md:text-xl lg:text-2xl xl:text-8xl text-[#fac1e9] font-Fraunces font-extralight'>
        about.
      </h2>
      <div className='flex items-center justify-evenly gap-4'>
        <p className='w-1/2'>
          In late 2021, I decided to quit my job to pursue a new career in
          software development. It all started from when I was leading a project
          with a goal of consolidating all cross-functional teams' data,
          originally in spreadsheets, to one local source.
        </p>
        <div className='relative'>
          <img
            src={profilePic}
            alt='profilePic'
            className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-96 xl:h-96 object-cover rounded-full'
          />
          <div className='absolute inset-0 rounded-full bg-[#fac1e9] opacity-20'></div>
        </div>
      </div>
    </div>
  );
};

export default About;

//sm:text-lg md:text-xl lg:text-2xl xl:text-3xl

//className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-full xl:h-1/2 object-cover rounded-md'
