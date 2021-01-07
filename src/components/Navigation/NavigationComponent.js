import React from 'react';
import { Navigation } from './Navigation';
import { NavigationItems } from './NavigationItems';
import { Link } from 'react-router-dom';

function NavigationComponent() {
  return (
    <Navigation>
      <Navigation.Logo>AC</Navigation.Logo>
      <Navigation.ItemUl>
        {NavigationItems.map((item) => (
          <Navigation.ItemLi>
            <Link to={item.url} style={{ textDecoration: 'none' }}>
              <Navigation.Link>{item.page}</Navigation.Link>
            </Link>
          </Navigation.ItemLi>
        ))}
      </Navigation.ItemUl>
      <Navigation.Button>Resume</Navigation.Button>
    </Navigation>
  );
}

export default NavigationComponent;
