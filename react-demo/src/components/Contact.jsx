import React from 'react';
import './Contact.css';

export default function Contact(props) {
  let classList = 'contact';

  if (props.feature === true) {
    classList += ' active';
  }

  return <article className={classList}>
    <img className='contact__img' src={props.img} alt="imagen de usuario" />
    <section className='contact__info'>
      <h2 className='contact__name'>{props.name}</h2>
      <a className='contact__link' href="" mailto="">{props.mail}</a>
    </section>
  </article>
}