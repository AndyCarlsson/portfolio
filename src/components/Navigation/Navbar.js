import React from 'react';
import { Container, Logo, ItemUl, ItemLi, Button, StyledNavLink } from './styles/NavigationStyles';
import NavigationData from './data/NavigationData.json';

export default function Navbar() {
  return (
    <Container>
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
  );
}
