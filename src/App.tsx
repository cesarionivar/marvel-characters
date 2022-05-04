import { Header } from './components/ui';
import { CharactersGrid } from './components/characters';
import { CharactersProvider } from './context/characters';
import { BrowserRouter } from 'react-router-dom';
import { SearchCharacters } from './components/characters/SearchCharacters';

export const App = () => {
  return (
    <BrowserRouter>
      <CharactersProvider>
        <Header />
        <CharactersGrid />
      </CharactersProvider>
    </BrowserRouter>
  );
};
