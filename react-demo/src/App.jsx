import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {

  const userList = [
    { name: 'Pepe', image: 'https://placekitten.com/200/286' },
    { name: 'Maria', image: 'https://placekitten.com/200/286' },
    { name: 'Paco', image: 'https://placekitten.com/200/286' },
    { name: 'Irene', image: 'https://placekitten.com/200/286' },
    { name: 'Perrete', image: 'https://placekitten.com/200/286' },
  ];

  return (
    <div className="App">
      {userList.map(user => <Contact name={user.name} img={user.image}></Contact>)}
    </div>
  );
}

export default App;
