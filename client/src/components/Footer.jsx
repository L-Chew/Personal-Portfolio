import React from 'react';
import styled from 'styled-components';


const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d9d9f8;
`;

const Footer = () => {


  return (
    <>
      <StyledFooterContainer className='footerContainer'>
        <h5> This website is powered by: </h5>
        <div className='footerIconsContainer'>
          <icons>React</icons>
          <icons>Babel</icons>
        </div>
      </StyledFooterContainer>
    </>

  )
}

export default Footer;