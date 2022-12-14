import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/stylesheets/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './components/app';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);