// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewBlog from './pages/Newblog';
import ColorTrail from './components/ColorTrail';
import './output.css'; 
import AllBlogs from './pages/AllBlogs';
import Profile from './pages/Profile';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <ColorTrail />
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<NewBlog />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<HomePage />} />
          {/* Add more routes/pages here */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
