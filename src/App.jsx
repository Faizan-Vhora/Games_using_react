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
        <Route path="/bin_game" element={<BinGame />} />
        <Route path="/shape_game" element={<ShapeGame />} />
      </Routes>
    </Router>
  );
}

export default App;
