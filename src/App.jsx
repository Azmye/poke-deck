import React, { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Decks from './pages/Decks';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Decks />} path="/decks" />
      </Routes>
    </div>
  );
}
