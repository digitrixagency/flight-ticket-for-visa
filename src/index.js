import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Home from './Home';
import Features from './otherPages/features';
import Documents from './otherPages/Documents';
import Reservation from './otherPages/Reservation';
import UserCentric from './otherPages/userCentric';
import Steps from './otherPages/steps';
import Footer from './footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Features />
    <Documents />
    <Reservation />
    <UserCentric />
    <Steps />
    <Footer />
  </React.StrictMode>
);
