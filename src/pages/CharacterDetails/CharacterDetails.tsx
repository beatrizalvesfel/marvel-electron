import { useParams, Link } from 'react-router-dom';
import useMarvelAPI from '../../hooks/useMarvelApi';
import { ArrowLeft } from 'lucide-react';

const CharacterDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useMarvelAPI(`characters/${id}`);

  if (loading) return <p className="text-center text-lg font-semibold">Carregando detalhes...</p>;
  if (error) return <p className="text-center text-red-500">Erro ao carregar personagem.</p>;
  if (!data || data.length === 0) return <p className="text-center">Personagem não encontrado.</p>;

  const character = data[0];

  if (!character || !character.thumbnail) {
    return <p className="text-center">Dados do personagem incompletos.</p>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl">
        <Link to="/" className="flex items-center text-red-600 hover:text-red-800 transition mb-4">
          <ArrowLeft className="w-6 h-6 mr-2" /> Voltar
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="w-full h-96 object-cover"
          aria-labelledby="character-name"
        />
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">{character.name}</h1>
          <p className="mt-4 text-gray-700">{character.description || "Sem descrição disponível."}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;