import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Preloader = () => {
  const [textColor, setTextColor] = useState('white');

  const [italic, setItalic] = useState(false);

  const intro = `I'm Lorene`;

  return (
    <div className='preloader h-[100vh] w-screen fixed flex items-center justify-center m-50px z-55 text-3xl font-bold' style={{ color:textColor }}>
      <TypeAnimation
      sequence={[
        `Hello`,
        1000,
        () => setTextColor('pink'),
        `I'm Lorene`,
        1000,
        () => setTextColor('white'),
        'Welcome to my world!',
      ]}
      wrapper="span"
      cursor={true}
      repeat={0}
      style={{
        whiteSpace: 'pre-line'
      }}
      />
    </div>
  )
}

export default Preloader;
