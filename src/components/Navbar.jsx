import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-sky-500 py-4 px-4 flex justify-between items-center">
      <h2 className="text-yellow-300 font-semibold text-xl">
        <Link to={'/'}>Pokémon</Link>
      </h2>
      <ul className="flex items-center gap-x-3">
        <li className="text-white font-semibold">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="text-white font-semibold">
          <Link to={'/decks'}>Deck</Link>
        </li>
      </ul>
    </nav>
  );
}
