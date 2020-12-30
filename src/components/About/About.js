import React from 'react';
import EducationList from './EducationList';
import './About.scss';
import WorkList from './WorkList';

function About() {
  return (
    <div className='aboutpage-wrapper'>
      <div className='personal-info-container'>
        <h1>Image</h1>
        <p>Text about me</p>
      </div>
      <div className='experiences-container'>
        <EducationList />
        <WorkList />
      </div>
    </div>
  );
}

export default About;
