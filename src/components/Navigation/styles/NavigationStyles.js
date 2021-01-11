import styled from 'styled-components/macro';
import { Link, NavLink } from 'react-router-dom';

//Here goes all styled components for Nav menu
export const Container = styled.div`
  height: 7vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
`;

export const Logo = styled.h2``;

export const ItemUl = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
`;

const activeClassName = 'nav-item-active';

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  border: none;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: rgba(20, 20, 20, 0.5);
  border-bottom: transparent solid 2px;
  transition: all 0.3s;

  :hover {
    color: rgba(20, 20, 20, 1);
  }

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 40%;
    left: 0;
    background-color: #e85a4f;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  :hover::before {
    visibility: visible;
    transform: scaleX(1);
    /* border-bottom: #e85a4f solid 2px; */
  }

  &.${activeClassName} {
    color: rgba(20, 20, 20, 1);
    text-decoration: line-through #e85a4f 2px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  border: none;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: rgba(20, 20, 20, 0.5);
  border-bottom: transparent solid 2px;
  transition: all 0.3s;

  :hover {
    color: rgba(20, 20, 20, 1);
  }

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 40%;
    left: 0;
    background-color: #e85a4f;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  :hover::before {
    visibility: visible;
    transform: scaleX(1);
    /* border-bottom: #e85a4f solid 2px; */
  }
`;

export const ItemLi = styled.li``;

export const Button = styled.button`
  font-weight: 700;
  padding: 5px;
  border-radius: 10px;
  color: rgba(20, 20, 20, 0.5);
  background: transparent;
  border: none;
  cursor: pointer;

  transition: all 0.3s;

  :hover {
    color: #e85a4f;
  }
`;
