import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsListItem.scss';

function ProjectsListItem(props) {
  return (
    <div className='project-item'>
      <div className='image-container'>{props.item.imgURL}</div>
      <div className='info-container'>
        <div className='stacklist-container'>
          {props.item.stackList.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <h2>{props.item.title}</h2>
        <p className='item-description'>{props.item.shortDescription}</p>
      </div>
      <div className='button-container'>
        <Link
          to={{
            pathname: `/work/${props.item.title}`,
            state: {
              object: props.item,
            },
          }}>
          More info
        </Link>
        <a href={props.item.githubLink} rel='noreferrer' target='_blank'>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectsListItem;
