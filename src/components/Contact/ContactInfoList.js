import React from 'react';
import './ContactInfoList.scss'
import { ContactInfoItems } from './ContactInfoItems';

function ContactInfoList(){
    return (
    <>
    {ContactInfoItems.map((item, index) => {
return (
<div className='contact-info-container' key={index}>
    <img src={item.imgURL} alt={item.imgAlt}/>
    <p>{item.details}</p>
</div>
);
})}
    </>
    )
}

export default ContactInfoList;