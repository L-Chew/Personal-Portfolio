import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from './Preloader.jsx';
import Content from './Content.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6500)
  , []})

  return (
    <>
      {
        loading ? <Preloader />
        :
        <Routes>
          {/* <Route exact path="/" element={<Hero />} /> */}
          <Route path="/learn-more" element={<Content />} />
        </Routes>
      }
    </>
  )
}

export default App;

//#191939