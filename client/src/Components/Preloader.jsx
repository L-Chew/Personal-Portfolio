import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Preloader = () => {
  const [textColor, setTextColor] = useState('white');

  const [italicize, setItalicize] = useState(false);

  const intro = `I'm Lorene`;

  return (
    <div
      className='preloader h-[100vh] w-screen fixed flex items-center justify-center m-50px z-55 text-5xl font-extralight pointer-events-none'
      style={{ color: textColor }}
    >
      <TypeAnimation
        sequence={[
          `Hello`,
          1000,
          () => setTextColor('#fac1e9'),
          `I'm Lorene`,
          1000,
          () => setTextColor('#CBD5E1'),
          'Welcome to my bubble!',
        ]}
        wrapper='span'
        cursor={false}
        repeat={0}
        style={{
          whiteSpace: 'pre-line',
          'font-family': 'Fraunces',
        }}
      />
    </div>
  );
};

export default Preloader;
