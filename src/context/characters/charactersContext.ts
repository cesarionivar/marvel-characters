import { createContext } from 'react';
import { charactersState } from '.';

interface ContextProps extends charactersState {
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  getCharactersBySearchTerm: (searchTerm: string) => void;
}

export const CharactersContext = createContext({} as ContextProps);
