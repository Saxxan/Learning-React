import './Avatar.css';

export default function Avatar(props) {
    return <img className='contact__img' src={props.img} alt="imagen de usuario" />
}