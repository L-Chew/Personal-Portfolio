import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../globalStyles.jsx';
import styled from 'styled-components';
import Layout from './Layout.jsx';
import Intro from './Intro.jsx';
// import About from './About.jsx';
// import Experience from './Experience.jsx';
// import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const App = () => {
  return (
    <>
      <GlobalStyles/>
        <React.StrictMode>
          <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path='/' element={<Intro />} />
                  {/* <Route path='/about' element={<About />} />
                  <Route path='/experience' element={<Experience />} />
                  <Route path='/projects' element={<Projects />} /> */}
                  <Route path='/contact' element={<Contact />} />
                </Route>
              </Routes>
          </BrowserRouter>
          {/* <About />
          <Experience />
          <Projects /> */}
        </React.StrictMode>
    </>
  )
}

export default App;
