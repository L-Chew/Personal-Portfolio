import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: GambarinoRegular;
  font-size: 10px;
  margin-top: 5rem;
`;

const IconsContainer = styled.div `
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0;
`;

const Footer = () => {


  return (
    <FooterContainer>
      <div> This website is powered by: </div>
      <IconsContainer>
        <div>React</div>
        <div>Babel</div>
        <div>Webpack</div>
      </IconsContainer>
      <div> © 2023 Lorene Chew. All rights reserved. </div>
    </FooterContainer>


  )
}

export default Footer;