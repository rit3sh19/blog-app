// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind or global styles
import App from './App'; // ✅ Import App

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* ✅ Use App component here */}
  </React.StrictMode>
);
