import styled from 'styled-components/macro';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GeneralText = styled.p`
  height: 20rem;
  display: flex;
  align-items: center;
`;

export const ListContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  padding: 20px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  gap: 2rem;
  height: 100%;
  width: 60%;
  border-radius: 5px;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const TitleSektion = styled.div``;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
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
  margin-top: 1.3rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #141414;
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

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
