import React from 'react';
import styled from 'styled-components';

// const GridLayout = styled.div `
//   display: grid;
//   grid-template-areas:
//     'name name name'
//     'intro blank blank'
//     'intro blank blank';
//   grid-template-columns: repeat(3, 2fr);
//   grid-template-rows: repeat(2, 2fr);
//   border-style: none;
// `;

// const Name = styled.div `
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   grid-area: name;
//   background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.897), #ffffffba, #b2a7f2);

// `;

// const Intro = styled.div `
//   grid-area: intro;
// `;

const IntroContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px 0;
`;

const Entry = () => {
  return (
    <IntroContainer>
      <div> Hi, my name is </div>
      <div> Lorene Chew </div>
      <div> Simplicity is a good thing </div>
      <div> I'm a software engineer who likes to focus on design, aesthetics, and efficiency. </div>
    </IntroContainer>
  )
}

export default Entry;