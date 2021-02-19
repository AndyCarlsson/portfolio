import React from 'react';
import EducationList from './EducationList';
import WorkList from './WorkList';
import { Container, InnerContainer, Image, Text, Section } from './styles/AboutStyles';
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
          <Image src='/stockphotoTest.jpg' style={imgSpring} />
          <div>
            <Text style={textSpring}>Hi!</Text>
            <Text>
              My name is Andreas Carlsson. I am an aspiring developer from Gothenburg, Sweden.
            </Text>
          </div>
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
