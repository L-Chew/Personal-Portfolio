import React from 'react';
import styled from 'styled-components';

const ContentGrid = styled.div`
  grid-area: about;
`;

const SectionContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const About = () => {
  return (
    <ContentGrid>
      <SectionContainer>
        <div className='sections'>
          <div className='sectionNums'> .01 </div>
          My Story
        </div>
        <div className='content'>
          <div className='text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
          <div className='image'></div>
        </div>
      </SectionContainer>
    </ContentGrid>
  )
}

export default About;