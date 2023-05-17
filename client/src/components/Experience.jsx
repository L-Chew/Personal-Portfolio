import React from 'react';
import styled from 'styled-components';

const ContentGrid = styled.div`
  grid-area: exp;
`;


const Experience = () => {
  return (
    <ContentGrid>
      <div className='sections'>
        <div className='sectionNums'> .02 </div>
        Where I've Worked
      </div>
    </ContentGrid>
  )
}

export default Experience;