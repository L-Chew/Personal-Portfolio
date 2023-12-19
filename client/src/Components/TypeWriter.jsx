import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [`Hello, I'm Lorene.`, `Welcome to my world!`],
    typeSpeed: 120,
    deleteSpeed: 120
  })
  return (
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
  )
}

export default TypeWriter;
