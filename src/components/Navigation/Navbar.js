import React from 'react';
import { Container, Logo, ItemUl, ItemLi, Button, StyledNavLink } from './styles/NavigationStyles';
import NavigationData from './data/NavigationData.json';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  let displayValue;

  if (location.pathname.includes('/work/')) {
    displayValue = 'none';
  } else {
    displayValue = 'flex';
  }

  return (
    <>
      <Container display={displayValue}>
        <StyledNavLink exact to='/'>
          <Logo>AC</Logo>
        </StyledNavLink>
        <ItemUl>
          {NavigationData.map((item) => (
            <ItemLi key={item.id}>
              <StyledNavLink to={item.url}>{item.page}</StyledNavLink>
            </ItemLi>
          ))}
        </ItemUl>
        <Button>Resume</Button>
      </Container>
    </>
  );
}
