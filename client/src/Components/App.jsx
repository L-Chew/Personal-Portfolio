import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from './Preloader.jsx';
import Content from './Content.jsx';
import Content2 from './Content2.jsx';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6500)
  , []})

  return (
    <>
      {
        loading ? <Preloader />
        :
        <Routes>
          <Route exact path="/" element={<Content2 />} />
        </Routes>
      }
    </>
  )
}

export default App;

//#191939