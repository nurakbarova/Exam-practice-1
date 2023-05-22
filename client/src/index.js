import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import HomePages from './pages/HomePages';
import OurServices from './pages/OurServices';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Navbar/>
    <HomePages/>
    <OurServices/>
  </>
);


