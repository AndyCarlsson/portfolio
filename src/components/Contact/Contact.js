import React from 'react';
import ContactData from './data/ContactData.json';

import { Container, ContainerInner, ItemContainer, Image, Details } from './styles/ContactStyles';

function Contact() {
  return (
    <Container>
      <ContainerInner>
        {ContactData.map((item) => {
          return (
            <ItemContainer key={item.id}>
              <Image src={item.imgURL} alt={item.imgAlt} />
              <Details>{item.details}</Details>
            </ItemContainer>
          );
        })}
      </ContainerInner>
    </Container>
  );
}

export default Contact;
