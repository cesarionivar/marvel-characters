import { useCharacters } from '../../hooks/useCharacters';
import { CharacterItem } from './CharacterItem';

export const CharactersGrid = () => {
  const { characters, error, loading } = useCharacters();

  if (loading) {
    return (
      <>
        <h2 className='font-bold'>Loading...</h2>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2 className='bg-red-800 text-white'>Error</h2>
      </>
    );
  }

  return (
    <div className='px-10 grid grid-cols-auto-fill mt-10 gap-6 dark:text-black'>
      {characters.map(character => (
        <CharacterItem key={character.id} />
      ))}
    </div>
  );
};
