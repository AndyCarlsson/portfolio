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
  /* color: #141414; */
  color: rgba(20, 20, 20, 0.5);
  border-bottom: transparent solid 2px;
  transition: all 0.3s;
  :hover {
    border-bottom: #e85a4f solid 2px;
    color: rgba(20, 20, 20, 1);
  }
`;

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
