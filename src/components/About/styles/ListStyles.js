import styled from 'styled-components/macro';
import { animated } from 'react-spring';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 20% 50%;
  width: 100%;
  min-height: 60vh;
  grid-row-gap: 1rem;
  grid-column-gap: 5rem;

  @media only screen and (max-width: 768px) {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  transform: rotate(-90deg);
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1 / span 2;

  @media only screen and (max-width: 480px) {
    transform: rotate(0deg);
    width: 90%;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    transform: rotate(0deg);
    width: 90%;
    font-size: 1.5rem;
  }
`;

export const ItemContainer = styled(animated.div)`
  grid-column: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (max-width: 480px) {
    width: 90%;
    align-items: flex-start;
    gap: 1rem;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    align-items: flex-start;
    gap: 0rem;
    flex-direction: column;
  }
`;

export const ItemTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 7px;
  color: #e85a4f;

  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-weight: 700;
  gap: 0.5rem;
  margin-bottom: 7px;

  @media only screen and (max-width: 480px) {
    span {
      display: none;
    }

    gap: 0;
    flex-direction: column;
  }
`;

export const CourseList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin: 10px 1rem;
`;

export const CourseLi = styled.li``;

export const Year = styled.h2`
  font-size: 1.2rem;
`;

export const Month = styled.p`
  font-weight: 700;
  color: #e85a4f;
`;

export const Text = styled.p``;

export const Span = styled.span`
  margin: 0.2rem;
  font-size: 1.8rem;
`;

export const DurationContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1.8rem 1rem;
  row-gap: 0;
`;

export const InfoContainer = styled.div`
  min-width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;

  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;
