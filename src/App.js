import React, { useState, useEffect } from 'react';
// Styles
import { GlobalStyle } from './GlobalStyle';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components

import MobileMenu from './components/MobileMenu';
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
      {width >= 768 ? <Home /> : <MobileHome />}
      <GlobalStyle />
    </Router>
  );
};

export default App;
