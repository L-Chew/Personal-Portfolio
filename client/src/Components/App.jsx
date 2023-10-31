import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './Hero.jsx';
import Content from './Content.jsx';
import GetInTouch from './GetInTouch.jsx';

const App = () => {
  return (
    <div className='bg-[#0f172a] text-[#CBD5E1]'>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/learn-more" element={<Content />} />
      </Routes>
      <GetInTouch />
    </div>
  )
}

export default App;