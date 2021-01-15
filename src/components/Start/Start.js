import React, { useRef } from 'react';
import { Container, TextContainer, Title, Description, Span } from './styles/StartStyles';
import { useSpring, animated, useChain } from 'react-spring';

function Start() {
  const descRef1 = useRef();
  console.log(descRef1);
  // const descStyle1 = useAnimation(descRef1);

  const titleDesc = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 2000,
  });

  const descStyle1 = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 500,
  });

  const descStyle2 = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 800,
  });

  const descStyle3 = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 1100,
  });

  const descStyle4 = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 1400,
  });
  // useChain({ descRef1, descRef2, descRef3, descRef4 });

  return (
    <Container>
      <TextContainer>
        <Title style={titleDesc}>Andreas Carlsson.</Title>
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

// const useAnimation = (ref) => {
//   const spring = useSpring({
//     from: {
//       opacity: 0,
//     },
//     to: {
//       opacity: 1,
//     },
//     ref: ref,
//   });
//   return spring;
// };

export default Start;
