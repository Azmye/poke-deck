import { createContext, useReducer } from 'react';

export const PokeDeleteContext = createContext();

const initialState = {
  pokeId: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'DELETE_POKEMON': {
      return {
        pokeId: payload,
      };
    }
    case 'CLEAR_POKEMON_ID': {
      return {
        pokeID: null,
      };
    }
    default:
      throw new Error();
  }
};

export const PokeDeleteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <PokeDeleteContext.Provider value={[state, dispatch]}>{children}</PokeDeleteContext.Provider>;
};
