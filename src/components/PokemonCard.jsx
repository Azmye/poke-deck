import React, { useContext, useState } from 'react';
import { PokeCreateModalCtx } from '../context/pokeCreateModal';
import { MdCatchingPokemon } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { PokeDeleteContext } from '../context/pokeDeleteContext';

export default function PokemonCard(props) {
  const [createState, createDispatch] = useContext(PokeCreateModalCtx);
  const [deleteState, deleteDispatch] = useContext(PokeDeleteContext);
  const [pokeState, pokeDispatch] = useContext(PokeCreateModalCtx);
  const [aliased, setAliased] = useState('');
  const pokemon = {
    ...props.pokeData,
    aliased: aliased,
  };
  const handleAddPokemon = (e) => {
    e.preventDefault();
    createDispatch({ type: 'ADD_POKEMON', payload: pokemon });
  };
  return (
    <div
      onClick={props.disableOnClick === true ? null : () => createDispatch({ type: 'OPEN_CREATE_MODAL', payload: props.pokeData.id })}
      className={`${props.className} relative shadow-lg flex flex-row py-3 bg-[#eee] rounded-md ${props.disableOnClick || props.onDecksPage === true ? '' : 'hover:bg-[#ddd] cursor-pointer'}`}
    >
      <div className={`w-full flex flex-col items-center md:flex-row ${pokeState.isCreate ? 'pt-10 md:pt-0' : 'pt-0'}`}>
        <div className="w-full md:w-1/3 p-5">
          <img src={props.pokeData.sprites.front_default} alt={props.pokeData.name} className="w-full" />
        </div>
        <div className="w-full md:w-2/3">
          <table className="mx-auto">
            <tbody>
              <tr className="">
                <td>Name</td>
                <td> : </td>
                <td>
                  <span className="bg-sky-500 text-white rounded-md font-semibold text-lg px-1">{props.pokeData.name}</span>
                </td>
              </tr>
              {props.pokeData.aliased ? (
                <tr className="">
                  <td>Aliased Name</td>
                  <td> : </td>
                  <td>
                    <span className="bg-orange-500 text-white rounded-md font-semibold text-lg px-1">{props.pokeData.aliased}</span>
                  </td>
                </tr>
              ) : null}
              <tr className="">
                <td>Weight</td>
                <td> : </td>
                <td>
                  <span className="bg-red-500 text-white rounded-md px-1">{props.pokeData.weight / 10}KG</span>
                </td>
              </tr>
              <tr className="">
                <td>Height</td>
                <td> : </td>
                <td>
                  <span className="bg-yellow-300 text-white rounded-md px-1">{props.pokeData.height * 10}CM</span>
                </td>
              </tr>
              <tr className="">
                <td>Types</td>
                <td> : </td>
                <td>
                  {props.pokeData.types.map((type, index) => (
                    <span key={index} className="bg-green-500 mr-3 rounded-md px-1 text-white">
                      {type.type.name}
                    </span>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {props.disableOnClick && (
        <div className="absolute px-2 top-2 md:left-2 md:right-2 md:top-2 flex justify-between items-center">
          <h2 className="font-semibold text-xs md:text-lg">Add Pokemon to Deck</h2>
          <form onSubmit={handleAddPokemon} className="flex w-1/2">
            <input
              onChange={(e) => setAliased(e.target.value)}
              name="aliased"
              type="text"
              placeholder="Pokemon Aliases"
              className="h-[30px] w-[100px] md:w-full md:h-[40px] md:px-2 bg-transparent border border-red-700 rounded-l-md focus:outline-none text-sm md:text-lg"
              required
            />
            <button className="flex items-center gap-2 bg-red-700 rounded-r-md h-[30px] w-[100px] md:w-auto md:h-auto md:px-2 md:py-1 hover:bg-red-600 hover:shadow-lg">
              <span className="text-white text-xs md:text-lg">Add</span> <MdCatchingPokemon className="text-white text-sm" />
            </button>
          </form>
        </div>
      )}

      {props.onDecksPage && (
        <div className="absolute left-2 right-2 top-2 flex justify-end items-center">
          <button onClick={() => deleteDispatch({ type: 'DELETE_POKEMON', payload: props.pokeData.id })}>
            <IoMdTrash className="text-2xl text-red-700 hover:text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
}
