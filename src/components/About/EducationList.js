import React from 'react';
import {
  Year,
  Month,
  Container,
  Title,
  ItemContainer,
  ItemTitle,
  Text,
  Span,
  DurationContainer,
  InfoContainer,
} from './styles/ListStyles';
import EducationData from './data/EducationData.json';
import { useSpring } from 'react-spring';

function EducationList() {
  const containerSpring = useSpring({
    from: { marginTop: 40 },
    to: { marginTop: 0 },
  });

  return (
    <Container>
      <Title>Education</Title>
      {EducationData.map((item) => {
        return (
          <ItemContainer key={item.id} style={containerSpring}>
            <DurationContainer>
              <Year>{item.startYear}</Year>
              <Span>-</Span>
              <Year>{item.endYear}</Year>
              <Month>{item.startMonth}</Month>
              <Span></Span>
              <Month>{item.endMonth}</Month>
            </DurationContainer>
            <InfoContainer>
              <ItemTitle>{item.title}</ItemTitle>
              <Text>{item.degree}</Text>
              <Text>{item.school}</Text>
              <Text>{item.description}</Text>
            </InfoContainer>
          </ItemContainer>
        );
      })}
    </Container>
  );
}

export default EducationList;
