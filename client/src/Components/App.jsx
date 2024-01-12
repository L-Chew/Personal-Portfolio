import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from './Preloader.jsx';
// import Content from './Content.jsx';
// import Content2 from './Content2.jsx';
import Projects from './Projects.jsx';
import Reading from './Reading.jsx';
import Hobbies from './Hobbies.jsx';
import GetInTouch from './GetInTouch.jsx';
import Layout from './Layout.jsx';
import About from './About.jsx';

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
          <Route exact path='/' element={<Layout />}>
            <Route path='/' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/reading' element={<Reading />} />
            <Route path='/hobbies' element={<Hobbies />} />
            <Route path='/getInTouch' element={<GetInTouch />} />
          </Route>
        </Routes>
      }
    </>
  )
}

export default App;

//#191939