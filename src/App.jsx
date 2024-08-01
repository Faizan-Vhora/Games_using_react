// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DogBreedGame from './pages/dogbreed_game';
import BinGame from './pages/bin_game';
import ShapeGame from './pages/shape_game';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DogBreedGame />} />
        <Route path="/bins" element={<BinGame />} />
        <Route path="/shapes" element={<ShapeGame />} />
      </Routes>
    </Router>
  );
}

export default App;
