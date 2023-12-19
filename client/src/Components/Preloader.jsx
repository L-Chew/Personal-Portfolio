import React, { useEffect } from 'react';
import TypeWriter from './TypeWriter.jsx';

const Preloader = () => {

  useEffect(() => {

  }, [])

  return (
    <div className='preloader h-[100vh] w-screen fixed flex items-center justify-center mx-0 mb-0 z-55'>
      <TypeWriter />
    </div>
  )
}

export default Preloader;