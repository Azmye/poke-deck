import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchAllPokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=300');
        const pokemonList = response.data.results;

        const pokemonRequests = pokemonList.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return res.data;
        });

        const allPokemonData = await Promise.all(pokemonRequests);
        setPokemonData(allPokemonData);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { pokemonData, loading, error };
};

export default useFetchAllPokemon;
