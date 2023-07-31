import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

const ContentGrid = styled.div`
  grid-area: cont;
`;

const LayoutGrid = styled.div `
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    'head head head head head head head head head head head head'
    '... ... cont cont cont cont cont cont cont cont ... ...'
    '... ... about about about about about about about about ... ...'
    '... ... exp exp exp exp exp exp exp exp ... ...'
    '... ... proj proj proj proj proj proj proj proj ... ...'
    '... ... contact contact contact contact contact contact contact contact ... ...'
    'foot foot foot foot foot foot foot foot foot foot foot foot';
`;

const Layout = () => {
  
  return (
    <LayoutGrid>
      <Navigation />
      <ContentGrid>
        <Outlet />
      </ContentGrid>
      {/* <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer /> */}
    </LayoutGrid>
  )
}

export default Layout;