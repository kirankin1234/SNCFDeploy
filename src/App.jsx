import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Drives from './components/Drives';
import Footer from './components/Footer';
import ProjectTemplate from './components/ProjectTemplate';
import GuidingForce from './components/GuidingForce';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import Honours from './components/Honours';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drives" element={<Drives />} />
          <Route path="/projects" element={<ProjectTemplate />} />
          <Route path="/guiding-force" element={<GuidingForce />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/honours" element={<Honours />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Add more routes as needed */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
