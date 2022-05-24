import React, { useEffect } from 'react';
import { useState } from 'react';
import './Contact.css';
import Avatar from '../../../components/Avatar';

export default function Contact(props) {
	let classList = 'contact';
	let [fav, setFav] = useState(false);

	if (fav === true) {
	classList += ' active';
	} else {
	classList = 'contact';
	}

	useEffect(() => {
		if(fav === true) {
			window.localStorage.setItem('favorito', props.name);
			classList += ' active';
		} else {
			window.localStorage.removeItem('favorito');
			classList = 'contact';
		}
	}, [fav]);

	return <article onClick={() => fav ? setFav(false) : setFav(true)} className={classList}>
		<Avatar img={props.img}></Avatar>
		<section className='contact__info'>
			<h2 className='contact__name'>{props.name}</h2>
			<p className='contact__number'>{props.telf}</p>
		</section>
	</article>
}