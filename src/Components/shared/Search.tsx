'use client'
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    console.log('Search Query: ', query);
    // Add your search handling logic here
  };

  return (
    <div className="relative border border-gray-600 w-auto mx-auto h-10">
      <form onSubmit={handleSearchSubmit} className="flex items-center
         overflow-hidden">
        <button type="submit" className=" p-2 pl-4">
          <Search className="h-6 w-6 text-gray-700" />
        </button>
        <input
          type="text"
          className="w-full text-lg px-4  focus:outline-none "
          placeholder="What you looking for"
          value={query}
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
