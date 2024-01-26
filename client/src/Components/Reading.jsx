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
    <div id='reading' className='h-[100vh] animate-fadeIn'>
      <div className='flex flex-col gap-4 px-2 pb-20 md:gap-8'>
        <h2 className='font-Fraunces text-4xl font-extralight text-[#fac1e9] lg:text-6xl xl:text-8xl'>
          reading.
        </h2>
      </div>
      {/*Cards*/}
      <div className='grid-auto-rows-auto grid-auto-flow-dense grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {books.map((book) =>
          book.Display === 'yes' ? (
            <ReadingCards key={book.Title} book={book} />
          ) : (
            ''
          ),
        )}
      </div>
    </div>
  );
};

export default Readings;
