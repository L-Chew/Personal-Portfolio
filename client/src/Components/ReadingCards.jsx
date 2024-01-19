import React from 'react';


const ReadingCards = () => {
  return (
    <div className='group h-96 w-72 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
      <img className='w-full h-full object-cover transition-transform duration-500  group-hover:scale-110' src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1662607049i/61434791.jpg' alt='book' />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
      </div>
      <div className='absolute inset-0 flex opacity-0 translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0'>
        <h2 className='text-2xl font-bold text-white'>Heaven Officials' Blessing Vol 1</h2>
        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Mo Xiang Tong Xiu</p>
        <div className='text-sm italic text-white bg-green-900 rounded-2xl px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Read</div>
      </div>
    </div>
  )
}

export default ReadingCards;