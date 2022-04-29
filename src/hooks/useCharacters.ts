import { useContext } from 'react';
import { CharactersContext } from '../context/characters';

export const useCharacters = () => {
  const context = useContext(CharactersContext);

  if (Object.keys(context).length === 0) {
    throw new Error('useCharacters must be used within a CharactersProvider');
  }

  return context;
};
