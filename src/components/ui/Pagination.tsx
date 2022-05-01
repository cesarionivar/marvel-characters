import { useCharacters } from '../../hooks/useCharacters';

export const Pagination = () => {
  const { handleNextPage, handlePreviousPage, totalCharacters } =
    useCharacters();

  return (
    <div className='flex text-white text-lg justify-between'>
      <p>Showing 1 - 20 of {totalCharacters}</p>
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
