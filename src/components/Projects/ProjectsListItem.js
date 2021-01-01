import React from 'react';


function ProjectsListItem(props){

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
        <p className='item-description'>{props.item.description}</p>
        </div>
        <div className='button-container'>
        <a href='/'>More info</a>
        <a href={props.item.githubLink} rel='noreferrer' target='_blank'>
            GitHub
        </a>
        </div>
  </div>
  )

}

export default ProjectsListItem;