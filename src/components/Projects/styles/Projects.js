import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const GeneralText = styled.p``;

export const ListContainer = styled.div``;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  height: 25rem;
  width: 60%;
  border-radius: 5px;
  background: rgb(6, 55, 65);
`;

export const Section = styled.div`
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
