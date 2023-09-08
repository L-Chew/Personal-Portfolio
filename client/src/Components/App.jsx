import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './Hero.jsx';
import Content from './Content.jsx';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Hero />} />
      <Route path="/learn-more" element={<Content />} />
    </Routes>
  )
}

export default App;