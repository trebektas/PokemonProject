import React, { useEffect } from "react";
import { usePokemonsContext } from "../context/PokemonsContext";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const { getPokemons } = usePokemonsContext();

  //https://pokeapi.co/api/v2/pokemon?limit=12
  //https://pokeapi.co/api/v2/pokemon?offset=1260&limit=12
  useEffect(() => {
    getPokemons(`https://pokeapi.co/api/v2/pokemon?limit=12`);
    // eslint-disable-next-line
  }, []);

  return <PokemonCard />;
}

export default PokemonList;
