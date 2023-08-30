import React from 'react';

const Hero = () => {
  return (
    <div className='w-screen min-h-screen'>
      <div className='grid grid-cols-12 gap-1 grid-rows-6'>
        <div className='col-start-2 col-span-6 row-start-3'>
          <div className='text-[60px]'>
            Hello, I'm <span className='text-[#5EEAD4]'>Lorene Chew</span>.
          </div>
          <div className='text-[45px]'>
            I am a full-stack web developer.
          </div>
          <br></br>
          <button className='rounded bg-[#3B4560] h-[2.5rem] w-[10rem]'>
            {`Learn More ->`}
          </button>
        </div>
        <div className='row-span-6 col-end-13 col-span-5'>
          <div className='grid grid-cols-5 grid-rows-5'>
            <div className='col-start-1 col-span-3 row-start-2 row-span-2 z-10'>
              <div className='h-[45vh] bg-[#5EEAD4] bg-opacity-90'></div>
            </div>
            <div className='col-start-3 col-span-3 row-start-1 row-span-4'>
              <div className='h-[100vh] bg-[#3B4560] bg-opacity-25'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;