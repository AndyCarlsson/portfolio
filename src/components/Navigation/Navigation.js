import React from 'react';
import { Container, Logo, ItemUl, ItemLi, Link, Button } from './styles/Navigation';

export function Navigation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navigation.Logo = function NavigationLogo({ children, ...restProps }) {
  return <Logo>{children}</Logo>;
};

Navigation.ItemUl = function NavigationItemUl({ children, ...restProps }) {
  return <ItemUl>{children}</ItemUl>;
};

Navigation.ItemLi = function NavigationLi({ children, ...restProps }) {
  return <ItemLi>{children}</ItemLi>;
};

Navigation.Link = function NavigationLink({ children, ...restProps }) {
  return <Link>{children}</Link>;
};

Navigation.Button = function NavigationButton({ children, ...restProps }) {
  return <Button>{children}</Button>;
};
