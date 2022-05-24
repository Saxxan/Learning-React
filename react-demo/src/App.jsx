import { getFirestore } from 'firebase/firestore';
import { Route, Routes } from 'react-router-dom';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import './App.css';
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <>
      <h1 className="App__title">React chat</h1>
      <main>
        <FirestoreProvider sdk={firestoreInstance}>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/chat/:id" element={<Chat/>}></Route>
          </Routes>
        </FirestoreProvider>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
