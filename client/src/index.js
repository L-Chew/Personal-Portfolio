import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './Components/App.jsx';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    { /* Using HashRouther due to Github Pages and BrowserRouter incompatibility */ }
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
