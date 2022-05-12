import { Header } from './components/ui';
import { CharactersGrid } from './components/characters';
import { CharactersProvider } from './context/characters';
import { BrowserRouter } from 'react-router-dom';

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
