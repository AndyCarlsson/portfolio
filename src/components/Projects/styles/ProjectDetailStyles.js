import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 93vh;
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 480px) {
    min-height: 100vh;
    margin-top: 0;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    min-height: 100vh;
    margin-top: 0;
    gap: 2rem;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: fixed;
  top: 10%;
  left: 5%;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(20, 20, 20, 0.5);
  transition: all 0.2s ease-in-out;

  :hover {
    color: rgba(20, 20, 20, 1);
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 480px) {
    margin-top: 10vh;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    margin-top: 10vh;
    gap: 2rem;
  }
`;

export const TitleContainer = styled.div`
  width: 70%;

  @media (max-width: 480px) {
    width: 90%;
  }
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  gap: 5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ImageContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${({ align }) => align};
  height: 60vh;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 100%;

  @media (max-width: 480px) {
    width: 90%;
    height: 90%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #dbd9d3;
  padding: 2rem;
  border-radius: 10px;
  width: 30%;
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 70%;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Video = styled.video``;
