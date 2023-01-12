import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px 0;
`;

const Intro = styled.div `
  color: #ff79be9d;
`;
const Name = styled.div `
  display: flex;
  font-family: 'Beautica';
  font-size: 100px;
  color:  #c2c2c2;
  margin: 1rem 0;
`;

const Slogan = styled.div `
  font-size: 45px;
  color: #fbcde59d;
`;

const Entry = () => {
  return (
    <IntroContainer>
      <Intro> Hi, my name is </Intro>
      <Name> Lorene Chew </Name>
      <Slogan> Simplicity is a good thing </Slogan>
      <div> I'm a software engineer who likes to focus on design, aesthetics, and efficiency. </div>
    </IntroContainer>
  )
}

export default Entry;