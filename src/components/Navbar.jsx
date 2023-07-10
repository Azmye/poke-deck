import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-sky-500 py-4 px-4 flex justify-between items-center">
      <h2 className="text-yellow-300 font-semibold text-xl">Pokémon</h2>
      <ul className="flex items-center gap-x-3">
        <li className="text-white font-semibold">Deck</li>
      </ul>
    </nav>
  );
}
