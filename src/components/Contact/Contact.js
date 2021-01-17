import React, { useRef } from 'react';
import ContactData from './data/ContactData.json';
import {
  Container,
  ContainerInner,
  ItemContainer,
  Image,
  Details,
} from './styles/ContactStyles';
import { useChain, useSpring, useTrail } from 'react-spring';

function Contact() {
  const containerTrailRef = useRef();
  const itemSpringRef = useRef();

  const containerTrail = useTrail(ContactData.length, {
    from: {
      marginRight: 100,
      opacity: 0,
    },
    to: {
      marginRight: 0,
      opacity: 1,
    },
    ref: containerTrailRef,
  });

  const itemSpring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 2000,
    },
    ref: itemSpringRef,
  });

  useChain([containerTrailRef, itemSpringRef]);

  return (
    <Container>
      <ContainerInner>
        {containerTrail.map((props, index) => (
          <ItemContainer key={ContactData[index]} style={props}>
            <Image
              src={ContactData[index].imgURL}
              alt={ContactData[index].imgAlt}
              style={itemSpring}
            />
            <Details style={itemSpring}>{ContactData[index].details}</Details>
          </ItemContainer>
        ))}

        {/* {ContactData.map((item) => {
          return (
            <ItemContainer key={item.id}>
              <Image src={item.imgURL} alt={item.imgAlt} />
              <Details>{item.details}</Details>
            </ItemContainer>
          );
        })} */}
      </ContainerInner>
    </Container>
  );
}

export default Contact;
