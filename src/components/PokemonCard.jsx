import React from 'react';

export default function PokemonCard(props) {
  return (
    <div className="shadow-lg flex flex-row items-center py-3 bg-[#eee] rounded-md">
      <div className="w-1/3 p-5">
        <img src={props.pokeData.sprites.front_default} alt="" className="w-full" />
      </div>
      <div className="w-2/3">
        <table>
          <tbody>
            <tr className="">
              <td>Name</td>
              <td> : </td>
              <td>
                <span className="bg-sky-500 text-white rounded-md font-semibold text-lg px-1">{props.pokeData.name}</span>
              </td>
            </tr>
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
  );
}
