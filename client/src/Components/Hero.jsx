import React from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from '../Images/profilePic.jpeg';

const Hero = () => {

  return (
    <div className='w-screen h-screen'>
      <div className='grid grid-cols-12 gap-1 grid-rows-5'>
        <div className='col-start-2 col-span-6 row-start-3 space-y-4'>
          <div className='text-6xl'>
            Hello, I'm <span className='text-[#2DD4BE]'>Lorene Chew</span>.
          </div>
          <div className='text-4xl'>
            I am a full-stack web developer.
          </div>
          <NavLink to='/learn-more' className='flex justify-center items-center rounded bg-[#495678] h-10 w-32'>
            {`Learn More ->`}
          </NavLink>
        </div>
        <div className='row-span-6 col-end-13 col-span-5'>
          <div className='grid grid-cols-5 grid-rows-4'>
            <div className='col-start-1 col-span-3 row-start-2 row-span-2 z-10 relative'>
              <div className='h-[45vh]'>
                {/* Display the profile pic */}
                <img src={profilePic} alt='profile pic' className="object-cover w-full h-full" />
                {/* Overlay the background color on top of the profilePic */}
                <div className="absolute inset-0 h-[45vh] bg-[#2DD4BE] bg-opacity-25"></div>
              </div>
            </div>
            <div className='col-start-3 col-span-3 row-start-1 row-span-4'>
              <div className='h-[100vh] bg-[#495678] bg-opacity-25'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-1 bg-[#2DD4BE] mb-10 mx-20'></div>
    </div>
  )
}

export default Hero;
