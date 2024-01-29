import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';


const Slider = ({ activities }) => {
  return (
    <div className='flex flex-col items-center mt-10'>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='max-w-[90%] lg:max-w-[80%]'
      >
        {activities.map((activityGroup, groupIndex) => {
          const items = Object.values(activityGroup)[0];
          return items.map((item, itemIndex) => (
            <SwiperSlide key={`group-${groupIndex}-items-${itemIndex}`}>
              <div className='group relative mb-20 flex h-[250px] w-[215px] flex-col gap-6 overflow-hidden rounded-xl hover:text-white shadow-lg lg:h-[400px] lg:w-[350px] '>
                <div
                  className='inset-o absolute h-full w-full bg-cover bg-center'
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-50' />
                <div className='group-hover:animate-slideDown relative opacity-0 flex group-hover:opacity-100 flex-col pl-3 pt-4 group-hover:bg-white group-hover:bg-opacity-30'>
                  <h1 className='text-xl lg:text-2xl'>
                    {activityGroup.sports ? item.type : item.model}
                  </h1>
                  <p className='lg:text-lg'>
                    {activityGroup.sports ? '' : item.keycaps}
                  </p>
                </div>
                {groupIndex !== activities.length-1 || itemIndex !== items.length-1 ?
                  <RxArrowTopRight className='absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-pink-300' /> : ''
                }
              </div>
            </SwiperSlide>
          ));
        })}
      </Swiper>
    </div>
  );
}

export default Slider;