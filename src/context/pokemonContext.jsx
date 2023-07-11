import React, { createContext, useEffect, useState } from 'react';

export const PokemonStoreCtx = createContext();

export const PokemonStoreProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedData = localStorage.getItem('Deck');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Store data in local storage whenever it changes
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  return <PokemonStoreCtx.Provider value={{ data, setData }}>{children}</PokemonStoreCtx.Provider>;
};
