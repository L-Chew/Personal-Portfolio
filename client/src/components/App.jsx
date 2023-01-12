import React from 'react';
import GlobalFonts from '../globalStyles.jsx';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';
import Intro from './Intro.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

const AppGrid = styled.div `
  display: grid;
  padding: 0 1rem;

`;

const App = () => {
  return (
    <AppGrid>
      <GlobalFonts/>
      <Navigation/>
      <Intro/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </AppGrid>
  )
}

export default App;