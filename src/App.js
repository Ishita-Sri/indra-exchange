
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "@fontsource/league-gothic";


import React, { Suspense, lazy } from 'react';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      
      
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Removed the duplicate Home route */}
     
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

