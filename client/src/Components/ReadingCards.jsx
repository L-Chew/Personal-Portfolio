import React, { useState } from 'react';


const ReadingCards = ({ book }) => {

  const statusColor = book.ExclusiveShelf === 'read'
    ? 'bg-green-800'
    : book.ExclusiveShelf === 'currently-reading'
    ? 'bg-amber-600'
    : 'bg-rose-800';

  return (
    <div className='relative group h-96 w-72'>
      <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
      <div className='relative h-96 w-72 cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
        <img className='w-full h-full object-cover transition-transform duration-500  group-hover:scale-110' src={ book.Picture} alt='book' />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
        </div>
        <div className='absolute inset-0 flex opacity-0 translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0'>
          <h2 className='text-2xl font-bold text-white'>{ book.Title }</h2>
          <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>{ book.Author }</p>
          <div className={`text-sm italic text-white ${statusColor} rounded-xl px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>{ book.ExclusiveShelf }</div>
        </div>
      </div>
    </div>
  )
}

export default ReadingCards;