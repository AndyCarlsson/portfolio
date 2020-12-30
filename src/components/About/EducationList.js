import React from 'react';
import './EducationList.scss';
import { EducationItems } from './EducationItems';

function EducationList() {
  return (      
      <div className='education-list-wrapper'>
        <h1>Education</h1>      
        {EducationItems.map((item, index) => {
          return (
            <div className='education-list-container' key={index}>
              <div className='time-period-container'>
                    <h2>{item.startYear}</h2>
                    <span>-</span>
                    <h2>{item.endYear}</h2>                    
                    <p>{item.startMonth}</p>
                    <span></span>                    
                    <p>{item.endMonth}</p>
              </div>
                <div className='education-info-container'>
                  <h2>{item.title}</h2>
                  <p>{item.degree}</p>
                  <p>{item.school}</p>
                  <p>
                   {item.description}
                  </p>
                </div>
            </div>
          );
        })}
      </div>
  );
}

export default EducationList;
