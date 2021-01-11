import styled from 'styled-components/macro';

export const Container = styled.div`
  min-height: 93vh;
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
`;

export const TitleContainer = styled.div`
  width: 70%;
`;

export const StackContainer = styled.div`
  font-weight: 700;
  color: #e85a4f;
  display: flex;
  gap: 1.3rem;
`;

export const TechStackItem = styled.p`
  font-weight: 700;
  color: #e85a4f;
`;

export const Title = styled.h1``;

export const ImageContainer = styled.div`
  width: 70%;
  height: 60vh;
  display: flex;
  flex-direction: row;
`;

export const ImageContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${({ align }) => align};
  height: 100%;
  width: 50%;
`;

export const Image = styled.img`
  height: 45vh;
  width: 80%;
  background-color: lightblue;
`;

export const DescriptionContainer = styled.div`
  background-color: lightgreen;
  height: 50vh;
  width: 70%;
`;

export const Description = styled.p``;

export const VideoContainer = styled.div`
  height: 50vh;
  width: 70%;
  background-color: lightyellow;
`;
