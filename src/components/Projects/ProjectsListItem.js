import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsListItem.scss';

function ProjectsListItem(props) {
  console.log(props.item.imgURL.xkcdThumbnail);
  return (
    <div className='project-item'>
      <div className='image-container'>
        <img src={props.item.imgURL.xkcdThumbnail} alt='thumbnail' />
      </div>
      <div className='info-container'>
        <div>
          <div className='stacklist-container'>
            {props.item.stackList.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            <h2>{props.item.title}</h2>
            <p className='item-description'>{props.item.shortDescription}</p>
          </div>
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
    </div>
  );
}

export default ProjectsListItem;
