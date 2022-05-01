import { useCharacters } from '../../hooks/useCharacters';
import { Error, Loader, Pagination } from '../ui';
import { CharacterItem } from './CharacterItem';

export const CharactersGrid = () => {
  const { characters, error, loading } = useCharacters();

  if (error) return <Error />;

  return (
    <div className='px-6 sm:px-20 my-10'>
      <Pagination />
      {loading ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-auto-fill my-4 gap-6 dark:text-black'>
          {characters.map(character => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </div>
      )}
      <Pagination />
    </div>
  );
};
