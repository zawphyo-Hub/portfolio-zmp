import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
console.log("Hello");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
