import React from 'react';
import {
  ListWrapper,
  Container,
  Title,
  ItemContainer,
  Year,
  Month,
  ItemTitle,
  Text,
  CourseList,
  CourseLi,
  Span,
  DurationContainer,
  InfoContainer,
  ItemInfoContainer,
} from './styles/ListStyles';
import WorkData from './data/WorkData.json';

function WorkList() {
  return (
    <ListWrapper bgColor='#EAE7DC'>
      <Container>
        <Title>Work</Title>
        {WorkData.map((item) => {
          return (
            <ItemContainer key={item.id}>
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
                <ItemInfoContainer>
                  <Text>{item.workPlace}</Text>
                </ItemInfoContainer>
                <Text>{item.description}</Text>
                <CourseList>
                  {item.techStack.map((course) => {
                    return <CourseLi key={item.id}>{course}</CourseLi>;
                  })}
                </CourseList>
              </InfoContainer>
            </ItemContainer>
          );
        })}
      </Container>
    </ListWrapper>
  );
}

export default WorkList;
