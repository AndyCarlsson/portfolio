import styled from 'styled-components/macro';
import { animated } from 'react-spring';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.3rem;
//   align-items: center;
//   width: 100%;
// `;

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 20% 50%;
  width: 70%;
  grid-row-gap: 1rem;
  grid-column-gap: 5rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  background-color: ${({ bgColor }) => bgColor};
`;

// export const Title = styled.h1`
//   font-size: 1.5rem;
//   width: 40%;

//   @media (max-width: 480px) {
//     width: 90%;
//     font-size: 1.5rem;
//   }
// `;

export const Title = styled.h1`
  font-size: 1.5rem;
  transform: rotate(-90deg);
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1 / span 2;

  @media (max-width: 480px) {
    width: 90%;
    font-size: 1.5rem;
  }
`;

// export const ItemContainer = styled(animated.div)`
//   width: 40%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: 1.5rem;

//   @media (max-width: 480px) {
//     align-items: flex-start;
//     flex-direction: column;
//     width: 90%;
//   }
// `;

export const ItemContainer = styled(animated.div)`
  grid-column: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
  }
`;

export const ItemTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 7px;
  color: #e85a4f;

  @media (max-width: 480px) {
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
`;

export const CourseList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px 1rem;
`;

export const CourseLi = styled.li`
  /* display: inline-block; */
`;

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
  /* background-color: #dbd9d3; */
`;
