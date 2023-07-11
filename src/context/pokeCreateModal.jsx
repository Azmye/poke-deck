import { createContext, useReducer } from 'react';

export const PokeCreateModalCtx = createContext();

const initialState = {
  isCreate: false,
  isNotify: false,
  pokeId: null,
  pokeData: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'OPEN_CREATE_MODAL': {
      return {
        isCreate: true,
        pokeId: payload,
      };
    }
    case 'CLOSE_CREATE_MODAL': {
      return {
        isCreate: false,
        pokeId: null,
      };
    }
    case 'ADD_POKEMON': {
      return {
        isCreate: false,
        pokeData: payload,
      };
    }
    case 'RESET_ADD_POKEMON': {
      return {
        isCreate: false,
        pokeData: null,
      };
    }
    case 'OPEN_NOTIFY_MODAL': {
      return {
        isCreate: false,
        isNotify: true,
      };
    }
    case 'CLOSE_NOTIFY_MODAL': {
      return {
        isCreate: false,
        isNotify: false,
      };
    }
    default:
      throw new Error();
  }
};

export const PokeCreateModalCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <PokeCreateModalCtx.Provider value={[state, dispatch]}>{children}</PokeCreateModalCtx.Provider>;
};
