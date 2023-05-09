import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';

// Warning ao usar ReactDOM.render   (ver por F12 no browser) 
// react-dom.development.js:86 Warning: 
// ReactDOM.render is no longer supported in React 18.  <===
// Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. 
// Learn more: https://reactjs.org/link/switch-to-createroot

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Download the React DevTools for a better development experience: 
//    https://reactjs.org/link/react-devtools

