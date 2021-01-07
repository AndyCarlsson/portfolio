import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ProjectItemContainer,
  InnerDiv,
  Title,
  Description,
  StackList,
  Image,
} from './Styles/ProjectStyles';
import './ProjectsListItem.scss';

export default function ProjectsListItem({ children, direction = 'row', ...restProps }) {
  return <ProjectItemContainer direction={direction}>{children}</ProjectItemContainer>;
}

ProjectsListItem.Container = function ProjectsListItemContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

ProjectsListItem.InnerDiv = function ProjectsListItemInnerDiv({ children, ...restProps }) {
  return <InnerDiv {...restProps}>{children}</InnerDiv>;
};

ProjectsListItem.Description = function ProjectsListItemDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

ProjectsListItem.Title = function ProjectsListItemTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ProjectsListItem.StackList = function ProjectsListItemStackList({ children, ...restProps }) {
  return <StackList {...restProps}>{children}</StackList>;
};

ProjectsListItem.Image = function ProjectsListItemImage({ ...restProps }) {
  return <Image {...restProps} />;
};
