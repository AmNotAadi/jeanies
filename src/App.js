import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ThreadCursor from './components/ThreadCursor';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Moodboard from './pages/Moodboard';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <ThreadCursor />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/moodboard" element={<Moodboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
