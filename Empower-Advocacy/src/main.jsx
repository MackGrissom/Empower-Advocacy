import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>
);