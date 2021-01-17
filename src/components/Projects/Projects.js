import React from 'react';
import ProjectData from './data/ProjectData.json';
import { useSpring } from 'react-spring';

import {
  Container,
  ListContainer,
  ProjectContainer,
  TitleSektion,
  Section,
  Title,
  Description,
  LinkContainer,
  StyledLink,
  ExternalLink,
  TechStackContainer,
  TechStackItem,
  Image,
} from './styles/ProjectStyle';

export default function Projects() {
  const imgSpring = useSpring({
    from: {
      opacity: 0,
      marginBottom: 50,
    },
    to: {
      opacity: 1,
      marginBottom: 0,
    },
  });

  const textSpring = useSpring({
    from: {
      marginTop: 50,
    },
    to: {
      marginTop: 0,
    },
  });

  return (
    <Container>
      {ProjectData.map((item) => (
        <ListContainer item={item} key={item.id} bgColor={item.bgColor}>
          <ProjectContainer direction={item.direction}>
            <Section style={textSpring}>
              <TitleSektion>
                <Title>{item.title}</Title>
                <TechStackContainer>
                  {item.stackList.map((item) => (
                    <TechStackItem key={item}>{item}</TechStackItem>
                  ))}
                </TechStackContainer>
                <Description>{item.shortDescription}</Description>
              </TitleSektion>
              <LinkContainer>
                <ExternalLink href={item.githubLink} rel='noreferrer' target='_blank'>
                  Github
                </ExternalLink>
                <StyledLink
                  to={{
                    pathname: `/work/${item.title}`,
                    state: {
                      object: item,
                    },
                  }}>
                  More info
                </StyledLink>
              </LinkContainer>
            </Section>
            <Section style={imgSpring}>
              <Image src={item.imgURL} alt={item.Alt} />
            </Section>
          </ProjectContainer>
        </ListContainer>
      ))}
    </Container>
  );
}
