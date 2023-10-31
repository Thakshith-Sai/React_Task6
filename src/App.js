import React from 'react';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
        <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
