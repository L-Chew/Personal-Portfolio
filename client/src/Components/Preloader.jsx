import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Preloader = () => {
  const [text] = useTypewriter({
    words: [`Hello, I'm Lorene.`, `Welcome to my world!`],
    typeSpeed: 120,
    deleteSpeed: 120
  })
  return (
  <div className='preloader h-[100vh] w-screen fixed flex items-center justify-center mx-0 mb-0 z-55'>
    <div className='textContainer m-50px'>
      <div>
        <span>
          {text}
        </span>
        <span>
          <Cursor cursorStyle='|' />
        </span>
      </div>
    </div>
  </div>
  )
}

export default Preloader;
