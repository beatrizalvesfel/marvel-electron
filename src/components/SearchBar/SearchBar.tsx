import React, { useState } from 'react';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-center p-4">
      <input
        type="text"
        placeholder="Buscar personagem..."
        className="p-2 border rounded-md w-full max-w-md"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;


