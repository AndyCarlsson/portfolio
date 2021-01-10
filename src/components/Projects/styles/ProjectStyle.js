import styled from 'styled-components/macro';

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
  display: flex;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  padding: 20px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  gap: 2rem;
  height: 25rem;
  width: 60%;
  border-radius: 5px;
`;

export const TitleSektion = styled.div``;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 50%;
`;

export const Title = styled.h1``;

export const Description = styled.p``;

export const StackList = styled.p`
  font-weight: 700;
  color: #e85a4f;
`;

export const Image = styled.img`
  height: 100%;
  background-color: lightcoral;
`;
