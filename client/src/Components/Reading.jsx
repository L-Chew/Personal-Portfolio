import React from 'react';
import ReadingCards from './ReadingCards.jsx';

const Readings = () => {
  return (
    <div id='reading' className='animate-fadeIn h-[100vh]'>
      <div className='flex flex-col gap-4 md:gap-8 px-2 pb-20'>
        <h2 className='sm:text-xl lg:text-2xl xl:text-8xl text-[#fac1e9] font-Fraunces font-extralight'>
          reading.
        </h2>
      </div>
      {/*Cards*/}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-auto-rows-auto grid-auto-flow-dense'>
        <ReadingCards />
      </div>
    </div>
  )
}

export default Readings;