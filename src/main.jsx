import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { PokeCreateModalCtxProvider } from './context/pokeCreateModal.jsx';
import { PokemonStoreProvider } from './context/pokemonContext.jsx';
import { PokeDeleteContextProvider } from './context/pokeDeleteContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokeCreateModalCtxProvider>
      <PokemonStoreProvider>
        <PokeDeleteContextProvider>
          <Router>
            <App />
          </Router>
        </PokeDeleteContextProvider>
      </PokemonStoreProvider>
    </PokeCreateModalCtxProvider>
  </React.StrictMode>
);
