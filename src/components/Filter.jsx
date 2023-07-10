import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Filter(props) {
  const { data: types, loading, error } = useFetch(`https://pokeapi.co/api/v2/type`);

  return (
    <div>
      <div className="flex flex-row justify-end">
        <p>Filter By Type :</p>
        <select className="border-1" defaultValue={props.filterData} onClick={(e) => props.setFilterData(e.target.value)}>
          {loading && (
            <option onClick={() => props.setFilterData('')} value="">
              Loading...
            </option>
          )}
          <option value="" className="text-red-500">
            Reset
          </option>
          {types &&
            types.results.map((type, index) => (
              <option onClick={() => props.setFilterData(type.name)} key={index} value={type.name} className="text-sky-500 font-semibold">
                {type.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
