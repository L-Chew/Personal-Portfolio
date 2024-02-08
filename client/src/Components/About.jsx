import React from 'react';
import profilePic from '../../dist/Images/profilePic.jpeg';

const About = () => {
  return (
    <div className='animate-fadeIn'>
      <div className='flex flex-col gap-4 px-2 pb-20 md:gap-8'>
        <h2 className='font-Fraunces text-6xl font-extralight text-[#fac1e9] lg:text-8xl'>
          about.
        </h2>
        <div className='mt-10 flex flex-col-reverse items-center justify-evenly gap-4 lg:flex-row'>
          <p className='lg:w-1/2 text-xl md:text-2xl'>
            In late 2021, I decided to quit my job to pursue a new career in
            software development. It all started from when I was leading a
            project to consolidate all cross-functional teams' data, originally
            in offline spreadsheets, into one live database.
            <br></br>
            <br></br>
            Seeing how our vision started to come to life with the help of a few
            lines of code, I was inspired. I no longer wanted to do tedious,
            low-impact work manipulating rows in spreadsheets manually, waiting
            on others to save local files, and dealing with Excel crashes.
            <br></br>
            <br></br>
            My goal as a software engineer is to use software to accelerate
            productivity for myself and others around me. As a visual learner, I
            enjoy seeing my work evolving right in front of me as I code and I
            feel rewarded when I see hours of coding turn into a beautiful,
            finished product.
          </p>
          <div className='relative'>
            <img
              src={profilePic}
              alt='profilePic'
              className='h-52 w-52 rounded-full object-cover md:h-64 md:w-64 lg:h-96 lg:w-96'
            />
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// bg-[#fac1e9]

//sm:text-lg md:text-xl lg:text-2xl xl:text-3xl

//className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-full xl:h-1/2 object-cover rounded-md'
