import React, {useState} from "react";
import {useQuery} from "react-query";
import useSWR from "swr";
import fetchPokemon from './utils/fetchPokemon';

const Pokemon = ({ id }) => {

    const { data: pokemon, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}`,fetchPokemon, {suspense: true});


    return !pokemon ? (
        <div>{}error</div>
    ) : (
        <div>
            <h2>#{id}</h2>
            <h2>{pokemon.name}</h2>
            <img alt="pokemon" src={pokemon.sprites.front_shiny} />
        </div>
    )
};
 const PokemonPager = () => {
    const [id, setId] = useState(1);
    return (
        <div className="container">
            <button type="button" onClick={() => setId(id !== 1 ? id -1 : 250)}>
                Previous
            </button>
            <button type="button" onClick={() => setId(id !== 250 ? id + 1 : 1)}>
                Next
            </button>

            <Pokemon id={id} />
        </div>
    )
}

export default PokemonPager;