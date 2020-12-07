import React from 'react';
import EducationList from './EducationList';
import './AboutPage.scss';

function AboutPage() {
  return (
    <div className='aboutpage-wrapper'>
      <div className='personal-info-container'>
        <h1>Image</h1>
        <p>Text about me</p>
      </div>
      <div className='experiences-container'>
        <EducationList />
      </div>
    </div>
  );
}

export default AboutPage;
