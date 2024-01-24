import React from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from '../../dist/Images/profilePic.jpeg';

const Hero = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-[#0f172a] to-[#efd4e7]'>
      <div className='grid grid-cols-12'>
        {/* Left Side */}
        <div className='col-start-2 col-span-6 md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-5 xl:col-start-2 xl:col-span-6 space-y-4 flex flex-col h-screen items-left justify-center'>
          <div className='text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
            Hello, I'm <span className='text-[#fac1e9]'>Lorene Chew</span>.
          </div>
          <div className='text-4xl sm:text-md md:text-lg lg:text-xl xl:text-2xl'>
            Welcome to my world.
          </div>
          <NavLink
            to='/learn-more'
            className='flex justify-center items-center rounded bg-[#495678] h-10 w-32 sm:w-8 md:w-16 lg:w-24 xl:w-32'
          >
            {`Learn More ->`}
          </NavLink>
        </div>
        {/* Right Side */}
        <div className='col-end-13 col-span-5 md:col-span-5 lg:col-span-5 xl:col-span-5'>
          <div className='grid grid-cols-5'>
            <div className='col-start-1 col-span-3 row-start-2 row-span-2 z-10 relative'>
              <div className='h-[45vh]'>
                {/* Display the profile pic */}
                <img
                  src={profilePic}
                  alt='profile pic'
                  className='object-cover w-full h-full'
                />
                {/* Overlay the background color on top of the profilePic */}
                <div className='pink-overlay absolute inset-0 h-full w-full bg-[#fac1e9] bg-opacity-25'></div>
              </div>
            </div>
            <div className='col-start-3 col-span-3 row-start-1 row-span-4'>
              <div className='h-[100vh] bg-[#495678] bg-opacity-25'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

//#2DD4BE

{
  /* <div className='w-screen h-screen bg-gradient-to-r from-[#0f172a] to-[#efd4e7]'>
<div className='grid grid-cols-12'>
  <div className='titleSide col-start-1 col-span-5 flex flex-col h-screen items-left justify-center mx-20'>
    <div className='text-6xl'>
      Hello, I'm <span className='text-[#fac1e9]'>Lorene Chew</span>.
    </div>
    <div className='text-4xl'>
      I am a Full Stack Developer
    </div>
    <NavLink to='/learn-more' className='flex justify-center items-center rounded bg-[#495678] h-10 w-32'>
    {`Learn More ->`}
    </NavLink>
  </div>
  <div className='imageSide col-end-13 col-span-5'>
    <div className='grid grid-cols-5'>
      <div className='col-start-1 col-span-3 relative z-10'>
        <div className='flex h-screen items-center'>
          <img src={profilePic} className='picture object-cover h-[50vh] w-[50vh]' alt='profile-pic'/>
          <div className='pink-overlay absolute inset-0 h-[50vh] bg-[#fac1e9] bg-opacity-25'></div>
        </div>
      </div>
      <div className='boxDecoration col-end-13 col-span-3'>
        <div className='h-[100vh] bg-[#495678] bg-opacity-25 relative'>box</div>
      </div>
    </div>
  </div>
</div>
</div> */
}
