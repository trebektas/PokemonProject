import React, { createContext, useState, useContext } from "react";

export const PokemonsContext = createContext(null);

export function usePokemonsContext() {
  return useContext(PokemonsContext);
}

export const PokemonsProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [loadButtonIsVisible, setLoadButtonIsVisible] = useState(true);
  const [detailErrorMessage, setDetailErrorMessage] = useState();
  const [pokedexErrorMessage, setPokedexErrorMessage] = useState();

  function addPokemonToList(obj) {
    if (pokemonList.length > 0) {
      setPokemonList((pokemonList) => [...pokemonList, ...obj]);
    } else {
      setPokemonList(obj);
    }
  }

  function addDetailErrorMessage(err) {
    setDetailErrorMessage(err);
  }

  function addPokedexErrorMessage(error) {
    setPokedexErrorMessage(error);
  }

  function resetPokemonList() {
    setPokemonList([]);
  }

  function addNextUrl(url) {
    setNextUrl(url);
  }

  function resetNextUrl() {
    setNextUrl(null);
  }

  const getPokemons = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.next !== null) {
        addNextUrl(data.next);
      } else {
        setLoadButtonIsVisible(false);
      }
      addPokemonToList(data.results);
    } catch (error) {
      console.log(error);
      resetPokemonList();
      resetNextUrl();
      addPokedexErrorMessage(error);
    }
  };

  return (
    <PokemonsContext.Provider
      value={{
        getPokemons,
        pokemonList,
        addPokemonToList,
        resetPokemonList,
        nextUrl,
        addNextUrl,
        resetNextUrl,
        loadButtonIsVisible,
        addDetailErrorMessage,
        detailErrorMessage,
        addPokedexErrorMessage,
        pokedexErrorMessage,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
