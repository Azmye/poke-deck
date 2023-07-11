import React, { useContext, useEffect, useState } from 'react';
import Search from '../components/Search';
import PokemonLists from '../components/PokemonLists';
import useFetchAllPokemon from '../hooks/useFetchAllPokemon';
import PokemonCard from '../components/PokemonCard';
import { PokeCreateModalCtx } from '../context/pokeCreateModal';
import { PokemonStoreCtx } from '../context/pokemonContext';
import { MdCheck } from 'react-icons/md';
import { PokeDeleteContext } from '../context/pokeDeleteContext';

export default function Home() {
  const [searchData, setSearchData] = useState('');
  const [filterData, setFilterData] = useState('');
  const [pokeData, setPokeData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const { pokemonData, loading, error } = useFetchAllPokemon();

  // Context
  const [pokeState, pokeDispatch] = useContext(PokeCreateModalCtx);
  const [deletePokeState, deletePokeDispatch] = useContext(PokeDeleteContext);
  const { data: decks, setData: setDecks } = useContext(PokemonStoreCtx);

  useEffect(() => {
    if (pokeState.pokeId) {
      setPokeData(pokemonData[pokeState.pokeId]);
    }
  }, [pokeState]);

  useEffect(() => {
    pokeDispatch({ type: 'CLOSE_CREATE_MODAL' });
  }, []);

  useEffect(() => {
    if (filterData) {
      const newPoke = pokemonData.filter((poke) => {
        return poke.types.some((type) => type.type.name === filterData);
      });
      setFilteredData(newPoke);
    }

    if (!filterData) {
      setFilteredData(null);
    }
  }, [filterData, pokemonData]);

  useEffect(() => {
    if (searchData) {
      const newPoke = pokemonData.filter((poke) => {
        return poke.name === searchData;
      });
      setFilteredData(newPoke);
    }

    if (!searchData) {
      setFilteredData(null);
    }
  }, [pokemonData, searchData]);

  useEffect(() => {
    const newPokemonArr = [];
    if (pokeState.pokeData) {
      newPokemonArr.push(pokeState.pokeData);
      setDecks((prevDecks) => [...prevDecks, ...newPokemonArr]);
      pokeDispatch({ type: 'RESET_ADD_POKEMON' });
      pokeDispatch({ type: 'OPEN_NOTIFY_MODAL' });
    }
  }, [pokeState.pokeData]);

  return (
    <div>
      <Search className={'px-4 py-5'} setSearchData={setSearchData} />
      <section>
        {error && <div>{error.message}</div>}
        {loading && (
          <div className="w-full flex flex-col items-center justify-center text-sky-500 pb-20 py-10">
            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="text-lg">Loading...</span>
          </div>
        )}
        {pokemonData && !loading && <PokemonLists setFilterData={setFilterData} filterData={filterData} pokeData={filteredData ? filteredData : pokemonData} className={'px-4'} />}
      </section>

      {pokeState.isCreate && (
        <section className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div onClick={() => pokeDispatch({ type: 'CLOSE_CREATE_MODAL' })} className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 flex justify-center items-center -z-10"></div>
          <div className="w-10/12 md:w-1/2">{pokeData && <PokemonCard className={'mx-auto'} pokeData={pokeData} disableOnClick={true} />}</div>
        </section>
      )}

      {pokeState.isNotify && (
        <section className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div onClick={() => pokeDispatch({ type: 'CLOSE_NOTIFY_MODAL' })} className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 flex justify-center items-center -z-10"></div>
          <div className="w-10/12 md:w-1/4 bg-white rounded-md">
            <div className="w-fit mx-auto">
              <MdCheck className="text-7xl text-green-600 my-3" />
            </div>
            <div className="text-center">
              <p className="font-semibold my-5">Pokemon Added to Poke Deck</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
