import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from './Preloader.jsx';
import Hero from './Hero.jsx';
import Content from './Content.jsx';
import GetInTouch from './GetInTouch.jsx';

const App = () => {
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 10000)
  // , []})

  return (
    <>
      {
        loading ? <Preloader />
        :
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/learn-more" element={<Content />} />
        </Routes>
      }
    </>
  )
}

export default App;

//#191939