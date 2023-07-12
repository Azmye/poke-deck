import React, { useContext, useEffect, useState } from 'react';
import { PokemonStoreCtx } from '../context/pokemonContext';
import Search from '../components/Search';
import PokemonLists from '../components/PokemonLists';
import { PokeDeleteContext } from '../context/pokeDeleteContext';

export default function Decks() {
  const [searchData, setSearchData] = useState('');
  const { data: decks, setData: setDecks } = useContext(PokemonStoreCtx);
  const [deletePoke, setDeletePoke] = useContext(PokeDeleteContext);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {});

  useEffect(() => {
    if (filterData) {
      const newPoke = decks.filter((poke) => {
        return poke.types.some((type) => type.type.name === filterData);
      });
      setFilteredData(newPoke);
    }

    if (!filterData) {
      setFilteredData(null);
    }
  }, [filterData, decks]);

  useEffect(() => {
    if (searchData) {
      const newPoke = decks.filter((poke) => {
        return poke.name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1;
      });
      setFilteredData(newPoke);
    }

    if (!searchData) {
      setFilteredData(null);
    }
  }, [decks, searchData]);

  useEffect(() => {
    if (deletePoke.pokeId) {
      const newDeck = decks.filter((poke) => poke.id !== deletePoke.pokeId);
      setDecks(newDeck);
      setDeletePoke({ type: 'CLEAR_POKEMON_ID' });
    }
  }, [deletePoke.pokeId]);

  return (
    <div>
      {decks.length > 0 ? <Search className={'px-4 py-5'} setSearchData={setSearchData} /> : null}
      <section>
        {decks.length > 0 ? (
          decks && <PokemonLists setFilterData={setFilterData} filterData={filterData} pokeData={filteredData ? filteredData : decks} onDecksPage={true} className={'px-4'} />
        ) : (
          <div className="text-center mt-10">
            <div className="mx-auto bg-red-700 w-fit px-4 py-2 rounded-md text-white">
              <h2 className="font-semibold text-3xl">Deck is Empty!</h2>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
