export const SearchCharacters = () => {
  return (
    <div className='text-slate-900 mb-5'>
      <form>
        <div className='flex flex-col w-full sm:w-8/12 lg:w-4/12'>
          <label htmlFor='search' className='dark:text-white my-2 text-lg'>
            Search by name:
          </label>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='Spider Man'
            className='px-2 py-2 rounded'
          />
        </div>
      </form>
    </div>
  );
};
