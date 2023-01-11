import React from 'react';
import styled from 'styled-components';

const GridLayout = styled.div `
  display: grid;
  grid-template-columns: repeat(auto, 1fr);
  grid-template-areas:
    /* 'blank blank Container' */
    /* 'Icon blank OrderedList' */
    'i .  navi';
  border-style: none;
`;

// const Container = styled.div `
//   grid-area: Container;
//   display: flex;
//   justify-content: space-between;
// `;

// const NaviContent = styled.div `
//   display: flex;
// `;

// const Button = styled.button `
//   background: none;
//   color: inherit;
//   border: none;
//   padding: 0 1rem;
//   font-style: inherit;
//   &:hover {
//     color: pink;
//   }
// `;

// const Numbers = styled.div `
//   color: pink;
// `;

const Icon = styled.div `
  grid-area: i;
  display: flex;
  justify-content: left;
  align-items: center;
  color: pink;
  font-size: 30px;


`;

const OrderedList = styled.ol `
  grid-area: navi;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li `
  /* display: list-item; */
  color: pink;
  padding-right: 0.5rem;
`;

const Link = styled.a `
  display: flex;
  text-decoration: none;
  color: white;
  position: relative;
  &:hover {
    color: pink
  }
`;

const Navigation = () => {
  return (
    <GridLayout>
      <Icon>
        LC
      </Icon>
      <OrderedList>
        <ListItem>
          <Link href='/#About'>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link href='/#Experience'>
            Experience
          </Link>
        </ListItem>
        <ListItem>
          <Link href='/#Projects'>
            Projects
          </Link>
        </ListItem>
        <ListItem>
          <Link href='/#Contact'>
            Contact
          </Link>
        </ListItem>
      </OrderedList>

    </GridLayout>
  )
}

export default Navigation;




/*
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
  */