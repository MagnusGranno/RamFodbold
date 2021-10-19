import React, { useState, useEffect } from 'react';
// Styles
import { GlobalStyle } from './GlobalStyle';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Contact from './components/Contact';
import MobileHome from './components/MobileHome';
import Home from './components/Home';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const resize = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener('resize', resize);
  return (
    <Router>
      <Routes>
        <Route path="/" element={width >= 768 ? <Home /> : <MobileHome />} />
        <Route path="/kontakt" element={<Contact width={width} />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
