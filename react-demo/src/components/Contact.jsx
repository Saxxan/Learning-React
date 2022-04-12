import React from 'react';
import './Contact.css';

export default function Contact(props) {
  return <div className='contact'>
    <h1>{props.name}</h1>
    <img src={props.img} alt="imagen de usuario" />
  </div>
}