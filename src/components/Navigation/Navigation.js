import React from 'react';
import NavigationData from './NavigationData.json';
import { Link } from 'react-router-dom';
import { Container, Logo, ItemUl, ItemLi, NavA, Button } from './styles/NavigationStyles';

export default function Navigation() {
  return (
    <Container>
      <Logo>AC</Logo>
      <ItemUl>
        {NavigationData.map((item) => (
          <ItemLi>
            <Link to={item.url} style={{ textDecoration: 'none' }}>
              <NavA>{item.page}</NavA>
            </Link>
          </ItemLi>
        ))}
      </ItemUl>
      <Button>Resume</Button>
    </Container>
  );
}
