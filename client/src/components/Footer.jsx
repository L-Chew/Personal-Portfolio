import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  grid-area: foot;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-family: GambarinoRegular;
  font-size: 15px;
  margin: 5rem 0 1.5rem 0;
  color:  #ff79be9d;
`;

const IconsContainer = styled.div `
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0;
`;

const Content = styled.div`
  color:  #ff79be9d;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Content> This website is powered by: </Content>
      <IconsContainer>
        <div>React</div>
        <div>Babel</div>
        <div>Webpack</div>
      </IconsContainer>
      <Content> © 2023 Lorene Chew. All rights reserved. </Content>
    </FooterContainer>
  )
}

export default Footer;