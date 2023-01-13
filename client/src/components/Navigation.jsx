import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GridLayout = styled.div `
  display: grid;
  grid-template-columns: repeat(auto, 1fr);
  grid-template-areas:
    'logo .  navi';
  border-style: none;
  margin-bottom: 100px;
`;

const Logo = styled(Link) `
  font-family: 'Beautica';
  grid-area: logo;
  display: flex;
  justify-content: left;
  align-items: center;
  color: #ff79be9d;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;

`;


const OrderedList = styled.ol `
  grid-area: navi;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li `
  /* display: list-item; */
  color: #ff79be9d;
  padding-right: 0.5rem;
`;

const StyledLink = styled(Link) `
  /* display: flex; */
  text-decoration: none;
  color: #c2c2c2;
  /* position: relative; */
  &:hover {
    color: #ff79be9d
  }
`;

const Navigation = () => {
  return (
    <GridLayout>
      <Logo to='/'>
          LC
      </Logo>
      <OrderedList>
        <ListItem>
          <StyledLink to='/about'>
            About
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/experience'>
            Experience
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/projects'>
            Projects
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/contact'>
            Contact
          </StyledLink>
        </ListItem>
      </OrderedList>
    </GridLayout>
  )
}

export default Navigation;