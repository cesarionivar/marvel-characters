import { Header } from './components/ui';
import { CharactersGrid } from './components/characters';
import { CharactersProvider } from './context/characters';

export const App = () => {
  return (
    <CharactersProvider>
      <Header />
      <CharactersGrid />
    </CharactersProvider>
  );
};
