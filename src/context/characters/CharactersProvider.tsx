import { useEffect, useReducer } from 'react';
import type {
  CharactersResponse,
  ICharacters,
} from '../../interfaces/charactersResponse';
import { CharactersContext, charactersReducer } from './';

export interface charactersState {
  characters: ICharacters[];
  loading: boolean;
  error: boolean;
}

const Characters_INITIAL_STATE: charactersState = {
  characters: [],
  error: false,
  loading: true,
};

interface Props {
  children: React.ReactNode;
}

interface CharactersDataResponse {
  data: CharactersResponse;
}

export const CharactersProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    charactersReducer,
    Characters_INITIAL_STATE
  );

  const getCharacters = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/v1/public/characters?apikey=${
          import.meta.env.VITE_API_KEY
        }`
      );

      const { data }: CharactersDataResponse = await res.json();

      dispatch({ type: 'load-characters', payload: data.results });
    } catch (error) {
      dispatch({ type: 'add-error' });
    } finally {
      dispatch({ type: 'remove-loading' });
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
