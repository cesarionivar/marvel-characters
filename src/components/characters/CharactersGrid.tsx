import { useCharacters } from '../../hooks/useCharacters';
import { Error, Loader, Pagination } from '../ui';
import { CharacterItem } from './CharacterItem';
import { SearchCharacters } from './SearchCharacters';

export const CharactersGrid = () => {
  const { characters, error, loading } = useCharacters();

  if (error) return <Error />;

  return (
    <div className='px-6 sm:px-20 my-10'>
      <SearchCharacters />

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
