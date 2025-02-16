import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex justify-center p-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Pesquisar personagens..."
        className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
};

export default SearchBar;


