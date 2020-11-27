import React from 'react';
import './projectitem.scss';
import { ProjectItemInfo } from './ProjectItemInfo';

function ProjectItem() {
  return (
    <div className='project-item-wrapper'>
      {ProjectItemInfo.map((item, index) => {
        return (
          <div key={index} className="project-item">
            <div className='image-container'>{item.img}</div>
            <div className='info-container'>
              <p>{item.stackList}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectItem;
