import React from 'react';
import ContactData from './data/ContactData.json';
import { Container, ContainerInner, Image, Details } from './styles/ContactStyles';

function Contact() {
  return (
    <Container>
      {ContactData.map((item) => {
        return (
          <ContainerInner key={item.id}>
            <Image src={item.imgURL} alt={item.imgAlt} />
            <Details>{item.details}</Details>
          </ContainerInner>
        );
      })}
    </Container>
  );
}

export default Contact;
