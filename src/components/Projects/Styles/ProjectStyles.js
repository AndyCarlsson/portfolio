import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;

export const ProjectItemContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  height: 25rem;
  width: 60%;
  border-radius: 5px;
  background: rgb(6, 55, 65);
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 50%;
`;

export const Title = styled.h1``;

export const Description = styled.h2``;

export const StackList = styled.p``;

export const Image = styled.img`
  height: 100%;
  background-color: lightcoral;
`;
