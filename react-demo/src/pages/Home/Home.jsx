import Contact from './components/Contact';
import UserList from './components/usersList.json';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return UserList.map(user => 
        <Link className='link' to={`/chat/${user.name}`}>
            <Contact 
            name={user.name} 
            img={user.image} 
            telf={user.telf} 
            feature={user.feature}>
        </Contact>
        </Link>
    )
}