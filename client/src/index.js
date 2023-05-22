import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import HomePages from './pages/HomePages';
import OurServices from './pages/OurServices';
import Some from './pages/Some';
import Ourblog from './pages/Ourblog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Navbar/>
    <HomePages/>
    <OurServices/>
    <Some/>
    <Ourblog/>
  </>
);


