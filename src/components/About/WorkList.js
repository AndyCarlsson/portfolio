import React from 'react';
import { WorkItems } from './WorkItems';
import './WorkList.scss';

function WorkList() {
  return (
    <div className='work-list-wrapper'>
      <h1>Work</h1>
      {WorkItems.map((item, index) => {
        return (
          <div className='work-list-container' key={index}>
            <div className='time-period-container'>
              <h2>{item.startYear}</h2>
              <span>-</span>
              <h2>{item.endYear}</h2>
              <p>{item.startMonth}</p>
              <span></span>
              <p>{item.endMonth}</p>
            </div>
            <div className='work-info-container'>
              <h2>{item.title}</h2>
              <p>{item.workPlace}</p>
              <p>{item.school}</p>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WorkList;
