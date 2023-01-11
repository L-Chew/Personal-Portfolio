import React from 'react';
import GlobalFonts from '../fonts/fonts.js';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';
import Entry from './Entry.jsx';
import Footer from './Footer.jsx';
import Projects from './Projects.jsx';

const AppGrid = styled.div `
  display: grid;
  padding: 0 1rem;

`;

const App = () => {
  return (
    <AppGrid>
      <GlobalFonts/>
      <h1>Lorene Chew</h1>
      <h2>Lorene Chew</h2>
      <Navigation/>
      <Entry/>
      <Projects/>
      <Footer/>
    </AppGrid>
  )
}

export default App;