// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-5">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="text-white">Dog Breed</Link>
        </li>
        <li>
          <Link to="/shape_game" className="text-white">Shapes</Link>
        </li>
        <li>
          <Link to="/bin_game" className="text-white">Bins</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
