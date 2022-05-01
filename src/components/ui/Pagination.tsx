import { useCharacters } from '../../hooks/useCharacters';

const CHARACTERS_LIMIT = 20;

export const Pagination = () => {
  const { handleNextPage, handlePreviousPage, totalCharacters, offset } =
    useCharacters();

  return (
    <div className='flex text-white text-lg justify-between'>
      <p>
        Showing {offset + 1} - {offset + CHARACTERS_LIMIT} of {totalCharacters}
      </p>
      <div className='flex gap-4'>
        <button onClick={handlePreviousPage}>
          <i className='fa-solid fa-circle-chevron-left'></i>
        </button>
        <button onClick={handleNextPage}>
          <i className='fa-solid fa-circle-chevron-right'></i>
        </button>
      </div>
    </div>
  );
};
