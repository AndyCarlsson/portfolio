import React from 'react';
import ProjectList from './ProjectList';
import './ProjectPage.scss';

function ProjectPage() {
  return (
    <div className='project-wrapper'>
      <div className='projects-text-area'>
        <p>Här finns det allmän text om mina projekt</p>
      </div>
        <ProjectList />
    </div>
  );
}

export default ProjectPage;
