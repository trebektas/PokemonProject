import React, { useEffect } from "react";
import { usePokemonsContext } from "../context/PokemonsContext";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const { getPokemons, pokedexErrorMessage } = usePokemonsContext();

  //Test for the pokemons without image
  //https://pokeapi.co/api/v2/pokemon?offset=1265&limit=12

  //Orijinal URL
  //https://pokeapi.co/api/v2/pokemon?limit=12

  useEffect(() => {
    getPokemons(`https://pokeapi.co/api/v2/pokemon?limit=12`);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {pokedexErrorMessage ? (
        <p className="error-message">
          Oops, something went wrong while loading pokedex pokemons
        </p>
      ) : (
        <PokemonCard />
      )}
    </>
  );
}

export default PokemonList;
