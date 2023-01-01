import React from 'react';
import styled from 'styled-components';

const GridLayout = styled.div `
  display: grid;
  grid-template-areas:
    'name name name'
    'intro blank blank'
    'intro blank blank';
  grid-template-columns: repeat(3, 2fr);
  grid-template-rows: repeat(2, 2fr);
  border-style: none;
`;

const Name = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: name;
  background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.897), #ffffffba, #b2a7f2);

`;

const Intro = styled.div `
  grid-area: intro;
`;

const Entry = () => {
  return (
    <GridLayout>
      <Name> lorenechi </Name>
      <Intro> this is my story </Intro>
    </GridLayout>
  )
}

export default Entry;