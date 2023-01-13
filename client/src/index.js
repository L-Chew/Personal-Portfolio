import React from 'react';
import ReactDom from 'react-dom/client';
import App from './components/App.jsx';
import Layout from './components/Layout.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

const root = ReactDom.createRoot(document.getElementById('app'));

root.render(<App />);



