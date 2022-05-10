import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';

function App() {

	return (
		<div className="App">
			<h1 className='App__title'>React chat</h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chat/:name" element={<Chat />} />
      		</Routes>
		</div>
	);
}

export default App;
