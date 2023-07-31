import React from 'react';
import styled from 'styled-components';

const SectionGrid = styled.div`
  grid-area: about;
  margin: 3rem;
`;

const SectionContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContentContainer = styled.div `
  display: flex;
  flext-direction: row;
`

const About = ({ aboutRef }) => {
  return (
    <SectionGrid ref={aboutRef}>
      <SectionContainer>
        <div className='sections'>
          <div className='sectionNums'> .01 </div>
          My Story
        </div>
        <ContentContainer>
          <div className='text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
          <img className='image' src='http://via.placeholder.com/640x360'></img>
        </ContentContainer>
      </SectionContainer>
    </SectionGrid>
  )
}

export default About;