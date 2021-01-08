import React from 'react';
import {
  Container,
  Title,
  ItemContainer,
  SubTitle,
  Text,
  Span,
  DurationContainer,
  InfoContainer,
} from './styles/ListStyles';
import EducationData from './data/EducationData.json';

function EducationList() {
  return (
    <Container>
      <Title>Education</Title>
      {EducationData.map((item) => {
        return (
          <ItemContainer key={item.id}>
            <DurationContainer>
              <SubTitle>{item.startYear}</SubTitle>
              <Span>-</Span>
              <SubTitle>{item.endYear}</SubTitle>
              <Text>{item.startMonth}</Text>
              <Span></Span>
              <Text>{item.endMonth}</Text>
            </DurationContainer>
            <InfoContainer>
              <SubTitle>{item.title}</SubTitle>
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
