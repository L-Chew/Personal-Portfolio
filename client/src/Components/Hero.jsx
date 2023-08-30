import React from 'react';

const Hero = () => {
  return (
    <div className='w-screen min-h-screen'>
      <div className='grid grid-cols-12 gap-1 grid-rows-6'>
        <div className='col-start-2 col-span-6 row-start-3'>
          <div className='text-[50px]'>
            Hello, I'm <span className='text-[#5EEAD4]'>Lorene Chew</span>.
          </div>
          <div className='text-[35px]'>
            I am a full-stack web developer.
          </div>
          <br></br>
          <button className='rounded bg-[#3B4560]'>
            {`Learn More ->`}
          </button>
        </div>
        <div className='col-end-13 col-span-4 row-span-6'>
          <div className='h-[100vh] bg-[#3B4560] bg-opacity-25'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero;