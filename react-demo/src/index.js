import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyAFMY2cY-bir73Sqxhd4PfqiEjG09Jbk34",
  authDomain: "shopdemo-d6aac.firebaseapp.com",
  databaseURL: "https://shopdemo-d6aac.firebaseio.com",
  projectId: "shopdemo-d6aac",
  storageBucket: "shopdemo-d6aac.appspot.com",
  messagingSenderId: "465836681350",
  appId: "1:465836681350:web:39490b069682fe2c898907"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
