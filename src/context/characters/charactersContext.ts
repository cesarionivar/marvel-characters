import { createContext } from 'react';
import { charactersState } from '.';

interface ContextProps extends charactersState {
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

export const CharactersContext = createContext({} as ContextProps);
