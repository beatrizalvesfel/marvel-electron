/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import useMarvelAPI from '../../hooks/useMarvelApi';
const CharacterList: React.FC = () => {
  const { data, loading, error } = useMarvelAPI('characters');
  const [searchQuery, setSearchQuery] = useState('');

  const characters = Array.isArray(data) ? data : [];

  const filteredCharacters = characters.filter((character: any) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p className="text-center text-lg font-semibold">Carregando seus personagens favoritos...</p>;
  if (error) return <p className="text-center text-red-500">Erro: {error}</p>;

  return (
    <Layout onSearch={setSearchQuery}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character: any) => (
            <Link to={`/character/${character.id}`} key={character.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-bold text-gray-800">{character.name}</h2>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-8">
            <p>Nenhum personagem encontrado.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CharacterList;