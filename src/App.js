import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import Home from './pages/Home'
import Footer from './components/Footer';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
