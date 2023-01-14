import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';
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
    'foot foot foot foot foot foot foot foot foot foot foot foot';
`;

const Layout = () => {
  return (
    <LayoutGrid>
      <Navigation />
      <ContentGrid>
        <Outlet />
      </ContentGrid>
      <Footer />
    </LayoutGrid>
  )
}

export default Layout;