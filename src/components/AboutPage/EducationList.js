import React from 'react';
import './EducationList.scss';

function EducationList() {
  return (
    <>
      <h1>Education</h1>
      <div className='education-list-wrapper'>
        <div className='time-period-container'>
          <div className='start-date-container'>
            <h2>2019</h2>
            <p>sep</p>
          </div>
          <div className='end-date-container'>
            <h2>2021</h2>
            <p>jun</p>
          </div>
        </div>
        <div className='education-info-container'>
          <h2>System Developer .NET</h2>
          <p>Higher Vocational Education</p>
          <p>Newton Yrkeshögskola</p>
          <p>
            During my studies at University West I gained knowledge about
            digital media production and design.
          </p>
        </div>
      </div>
    </>
  );
}

export default EducationList;
