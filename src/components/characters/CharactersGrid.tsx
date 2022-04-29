import { useCharacters } from '../../hooks/useCharacters';
import { Error, Loader } from '../ui';
import { CharacterItem } from './CharacterItem';

export const CharactersGrid = () => {
  const { characters, error, loading } = useCharacters();

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className='px-6 sm:px-20 grid grid-cols-auto-fill mt-10 mb-20 gap-6 dark:text-black'>
      {characters.map(character => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};
