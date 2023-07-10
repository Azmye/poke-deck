import React, { useState } from 'react';

export default function Search(props) {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    props.setSearchData(search);
  };
  return (
    <div className={`${props.className}`}>
      <form className="flex flex-row gap-2 md:gap-3" onSubmit={handleSearch}>
        <input type="text" placeholder="Search Pokemon" value={search} onChange={(e) => setSearch(e.target.value)} className="w-8/12 md:w-9/12 px-1 py-2 rounded-md focus:outline-none" />
        <button className="w-3/12 md:w-2/12 bg-sky-500 text-white rounded-md">Search</button>
        <button className="w-2/12 md:w-1/12 bg-gray-500 text-white rounded-md" onClick={() => setSearch('')}>
          Reset
        </button>
      </form>
    </div>
  );
}
