import React from 'react';
import EducationList from './EducationList';
import WorkList from './WorkList';
import {
  Container,
  InnerContainer,
  ImageContainer,
  Image,
  TextContainer,
  Heading,
  Text,
  Section,
} from './styles/AboutStyles';
import profile_pic from '../../assets/images/profilepic.webp';
import { useSpring } from 'react-spring';

function About() {
  const imgSpring = useSpring({
    from: {
      marginRight: 20,
    },
    to: {
      marginRight: 0,
    },
  });

  const textSpring = useSpring({
    from: {
      marginLeft: 20,
    },
    to: {
      marginLeft: 0,
    },
  });

  return (
    <Container>
      <InnerContainer>
        <Section direction='row' gap='5rem'>
          <ImageContainer>
            <Image src={profile_pic} style={imgSpring} />
          </ImageContainer>
          <TextContainer style={textSpring}>
            <Heading>Hi!</Heading>
            <Text>
              My name is Andreas Carlsson. I am an aspiring developer from Gothenburg, Sweden.
            </Text>
            <Text>Learning new things and trying out stuff is what really motivates me.</Text>
            <Text>
              My goal is to one day be that guy that everyone comes to when they are stuck and need
              input about a problem.
            </Text>
          </TextContainer>
        </Section>
        <Section direction='column'>
          <EducationList />
          <WorkList />
        </Section>
      </InnerContainer>
    </Container>
  );
}

export default About;
