import React from 'react';
import PokemonCard from './PokemonCard';
import Filter from './Filter';

export default function PokemonLists(props) {
  return (
    <div className={`${props.className}`}>
      <div className="bg-white rounded-md overflow-hidden">
        <div className="flex flex-row justify-between py-2 px-4">
          <h3 className="font-semibold text-xl">Lists :</h3>
          <Filter filterData={props.filterData} setFilterData={props.setFilterData} />
        </div>
        <div className="px-4 text-end">
          <h4>Total Pokemon : {props.pokeData.length}</h4>
        </div>
        <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">{props.pokeData && props.pokeData.map((pokemon, index) => <PokemonCard onDecksPage={props.onDecksPage} key={index} pokeData={pokemon} />)}</div>
      </div>
    </div>
  );
}
