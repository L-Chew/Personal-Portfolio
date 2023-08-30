import React from 'react';

const Hero = () => {
  return (
    <div className='w-screen'>
      <div className='grid grid-rows-8 grid-cols-12 gap-1 h-screen content-center'>
        <div className='row-start-2 col-span-5 col-start-2 text-[50px]'>
          Hello, I'm <span className='text-[#5EEAD4]'>Lorene Chew</span>.
        </div>
        <div className='row-start-3 row-span-2 col-span-5 col-start-2 text-[35px]'>
          I am a full-stack web developer.
        </div>
        <button className='row-start-6 col-span-2 col-start-2 rounded bg-[#3B4560]'>
          {`Learn More ->`}
        </button>
        <div className='bg-[#5EEAD4] row-span-8 col-end-13 col-span-5'>box</div>
      </div>
    </div>
  )
}

export default Hero;