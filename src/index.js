import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/stylesheets/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, ComputerLab, Register, Layout } from './pages/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="computer-lab" element={<ComputerLab />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);