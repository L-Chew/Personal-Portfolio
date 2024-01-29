import React from 'react';
import yotr from '../../dist/Images/Keyboards/yotr.png';
import tsukimi from '../../dist/Images/Keyboards/tsukimi.png';
import winterglow from '../../dist/Images/Keyboards/winterglow.png';
import strawberryMilk from '../../dist/Images/Keyboards/strawberryMilk.png';
import pilates from '../../dist/Images/Sports/pilates.jpeg';
import badminton from '../../dist/Images/Sports/badminton.jpeg';
import golf from '../../dist/Images/Sports/golf.jpeg';
import Slider from './Slider.jsx';

const Hobbies = () => {

  const activities = [
    {
      keyboards: [
        {
          model: 'QK75',
          keycaps: 'Osume: Year of the Rabbit',
          img: yotr,
        },
        {
          model: 'Zoom65',
          keycaps: 'Osume: Tsukimi',
          img: tsukimi,
        },
        {
          model: 'Zoom75',
          keycaps: 'Osume: Strawberry Milk',
          img: strawberryMilk,
        },
        {
          model: 'Bakaneko',
          keycaps: 'Osume: Winterglow',
          img: winterglow,
        }
      ],
    },
    {
      sports: [
        {
          type: 'Reformer Pilates',
          img: pilates,
        },
        {
          type: 'Badminton',
          img: badminton,
        },
        {
          type: 'Golf',
          img: golf,
        },
      ],
    },
  ];

  return (
    <>
      <div id='projects' className='h-[100vh] animate-fadeIn'>
        <div className='flex flex-col gap-4 px-2 md:gap-8'>
          <h2 className='font-Fraunces text-6xl font-extralight text-[#fac1e9] lg:text-8xl'>
            hobbies.
          </h2>
          <Slider activities={ activities } />
        </div>
      </div>
    </>
  );
};

export default Hobbies;
