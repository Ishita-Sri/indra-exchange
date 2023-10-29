import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "@fontsource/league-gothic";

import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/foot" element={<Footer />} />
   
      </Routes>
    </Router>

  );
}

export default App;
