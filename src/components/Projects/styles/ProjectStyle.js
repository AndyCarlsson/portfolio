import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';

export const Container = styled.div`
  width: 100%;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 100vh;
  }
`;

export const ListContainer = styled(animated.div)`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  padding: 20px;

  @media (max-width: 480px) {
    margin-top: 7vh;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 60%;
  gap: 2rem;
  border-radius: 5px;

  @media (max-width: 480px) {
    height: 100%;
    width: 100%;
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const TitleSektion = styled.div`
  height: 100%;

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const Section = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100%;
  width: 50%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 1.7rem;
    margin-bottom: 5px;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
  margin-top: 1.3rem;
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  background-color: #e85a4f;
  color: white;
  padding: 0.5rem 0.7rem;
  border: 1px solid transparent;
  border-radius: 25px;
  transition: all 0.3s;

  :hover {
    background-color: transparent;
    color: #e85a4f;
    border: 1px solid #e85a4f;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: #141414;
`;

export const TechStackContainer = styled.div`
  display: flex;
  gap: 1.3rem;
`;

export const TechStackItem = styled.p`
  font-weight: 700;
  color: #e85a4f;
`;

export const ImageContainer = styled.div`
  height: 45vh;
`;

export const Image = styled(animated.img)`
  height: 100%;

  @media only screen and (max-width: 480px) {
    height: 80%;
  }
`;
