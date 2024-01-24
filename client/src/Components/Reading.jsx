import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import ReadingCards from './ReadingCards.jsx';

const Readings = () => {
  const [csvData, setCsvData] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch URL is relative to the current HTML page, not the JavaScript file
        const response = await fetch('./goodreads.csv');
        // csv not a json therefore needs to use text
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setCsvData(results.data);
            console.log('results data: ', results.data);
            setBooks(Object.values(results.data));
          },
        });
      } catch (error) {
        console.error('Error parsing CSV:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div id='reading' className='animate-fadeIn h-[100vh]'>
      <div className='flex flex-col gap-4 md:gap-8 px-2 pb-20'>
        <h2 className='sm:text-xl lg:text-2xl xl:text-8xl text-[#fac1e9] font-Fraunces font-extralight'>
          reading.
        </h2>
      </div>
      {/*Cards*/}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-auto-rows-auto grid-auto-flow-dense'>
        {books.map((book) =>
          book.Display === 'yes' ? (
            <ReadingCards key={book.Title} book={book} />
          ) : (
            ''
          )
        )}
      </div>
    </div>
  );
};

export default Readings;
