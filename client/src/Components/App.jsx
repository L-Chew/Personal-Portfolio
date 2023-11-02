import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './Hero.jsx';
import Content from './Content.jsx';
import GetInTouch from './GetInTouch.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/learn-more" element={<Content />} />
      </Routes>
      {/* <GetInTouch /> */}
    </>
  )
}

export default App;

//#191939