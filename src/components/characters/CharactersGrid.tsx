import { useEffect } from 'react';
import { CharacterItem } from './CharacterItem';

export const CharactersGrid = () => {
  const getCharacters = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/v1/public/characters?apikey=${
          import.meta.env.VITE_API_KEY
        }`
      );

      const { data } = await res.json();

      console.log(data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className='px-10 grid grid-cols-auto-fill mt-10 gap-6 dark:text-black'>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(character => (
        <CharacterItem key={character} />
      ))}
    </div>
  );
};
