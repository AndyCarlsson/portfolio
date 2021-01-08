import styled from 'styled-components/macro';

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

export const ItemLi = styled.li``;

export const NavA = styled.a`
  text-decoration: none;
  border: none;
  font-weight: 700;
  color: #616161;
  &:hover {
    color: #ff37cb;
    transition: color 0.3s;
  }

  &:visited {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  color: #31dbff;
  font-weight: 700;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
