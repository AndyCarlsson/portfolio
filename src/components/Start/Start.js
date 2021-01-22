import React, { useRef } from 'react';
import { Container, TextContainer, Title, Description, Span } from './styles/StartStyles';
import { useSpring, useChain } from 'react-spring';
import phone_xkcd_fav from '../../images/phone_xkcd_fav.webp';

function Start() {
  const descRef1 = useRef();
  const descRef2 = useRef();
  const descRef3 = useRef();
  const descRef4 = useRef();

  const titleRef = useRef();

  const descStyle1 = useAnimation(descRef1);
  const descStyle2 = useAnimation(descRef2);
  const descStyle3 = useAnimation(descRef3);
  const descStyle4 = useAnimation(descRef4);

  const titleStyle = useSpring({
    from: {
      opacity: 0,
      color: 'black',
    },
    to: {
      opacity: 1,
      color: '#e85a4f',
    },
    ref: titleRef,
    duration: 500,
  });

  useChain([descRef1, descRef2, descRef3, descRef4, titleRef]);

  return (
    <Container>
      <TextContainer>
        <Title style={titleStyle}>Andreas Carlsson.</Title>
        <Description style={descStyle1}>Aspiring front end developer.</Description>
        <Description style={descStyle2}>Gothenburg, Sweden.</Description>
        <Description style={descStyle3}>
          Minigolf<Span> [</Span>semi<Span>] </Span>pro.
        </Description>
        <Description style={descStyle4}>Creative thinking.</Description>
      </TextContainer>
    </Container>
  );
}

const useAnimation = (ref) => {
  const spring = useSpring({
    from: {
      marginLeft: -50,
      opacity: 0,
    },
    to: {
      marginLeft: 0,
      opacity: 1,
    },
    ref: ref,
    config: {
      duration: 500,
    },
  });
  return spring;
};

export default Start;
