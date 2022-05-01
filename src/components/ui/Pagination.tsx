export const Pagination = () => {
  return (
    <div className='flex text-white text-lg justify-between'>
      <p>Showing 1 - 20 of 1564</p>
      <div className='flex gap-4'>
        <button>
          <i className='fa-solid fa-circle-chevron-left'></i>
        </button>
        <button>
          <i className='fa-solid fa-circle-chevron-right'></i>
        </button>
      </div>
    </div>
  );
};
