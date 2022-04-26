import React from 'react';
import './App.css';
import Contact from './components/Contact';
import UserList from './components/usersList.json';

function App() {

  return (
    <div className="App">
      <h1 className='App__title'>Contactos</h1>
      {UserList.map(user => <Contact name={user.name} img={user.image} mail={user.mail} feature={user.feature}></Contact>)}
    </div>
  );
}

export default App;
