import { createContext } from 'react';
import { charactersState } from '.';

interface ContextProps extends charactersState {}

export const CharactersContext = createContext({} as ContextProps);
