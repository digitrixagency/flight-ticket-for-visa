import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Home from './Home'
import Features from './otherPages/features'
import Documents from './otherPages/Documents'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Features />
    <Documents />
  </React.StrictMode>
);
