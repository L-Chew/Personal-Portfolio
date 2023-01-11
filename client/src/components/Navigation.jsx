import React from 'react';
import styled from 'styled-components';

const GridLayout = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'blank blank Container'
  border-style: none;
`;

const Container = styled.div `
  grid-area: Container;
  display: flex;
  justify-content: space-between;
`;

const NaviContent = styled.div `
  display: flex;
`;

const Button = styled.button `
  background: none;
  color: inherit;
  border: none;
  padding: 0 1rem;
  font-style: inherit;
`;

const Numbers = styled.div `
  color: pink;
`;

const Navigation = () => {
  return (
    <GridLayout>
      <Container>
        <NaviContent>
          <Numbers>1. </Numbers>
          <Button>About</Button>
        </NaviContent>
        <NaviContent>
          <Numbers>2. </Numbers>
          <Button>Experience</Button>
        </NaviContent>
        <NaviContent>
          <Numbers>3. </Numbers>
          <Button>Projects</Button>
        </NaviContent>
        <NaviContent>
          <Numbers>4. </Numbers>
          <Button>Contact</Button>
        </NaviContent>
      </Container>
    </GridLayout>
  )
}

export default Navigation;