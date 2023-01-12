import React from 'react';
import GlobalFonts from '../globalStyles.jsx';
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
      <Navigation/>
      <Entry/>
      <Projects/>
      <Footer/>
    </AppGrid>
  )
}

export default App;