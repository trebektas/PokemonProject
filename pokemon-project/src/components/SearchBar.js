// import searchIcon from "../assets/search.svg";
// import React, { useState } from "react";
// import { usePokemonsContext } from "../context/PokemonsContext";

function SearchBar() {
  // const [searchInput, setSearchInput] = useState("");
  // const { pokemonList, resetPokemonList, addPokemonToList } =
  //   usePokemonsContext();

  // const inputHandler = (e) => {
  //   //convert input text to lower case
  //   const lowerCaseText = e.target.value.toLowerCase();
  //   console.log(lowerCaseText);
  //   setSearchInput(lowerCaseText);
  // };

  // const getInputPokemon = () => {
  //   const filteredPokemon = pokemonList.filter((pokemon) => {
  //     if (searchInput.length > 0) {
  //       return pokemon.name.match(searchInput);
  //     } else return pokemon;
  //   });
  //   resetPokemonList();
  //   addPokemonToList(filteredPokemon);
  // };

  return (
    <div className="SearchBar">
      {/* <div className="SearhBar-Container">
        <input
          type="text"
          placeholder="Pokemon name..."
          onChange={inputHandler}
        ></input>
        <button type="submit" onClick={getInputPokemon}>
          <img src={searchIcon} alt="Search"></img>
        </button>
      </div>
      <p>Search to explore Pokemon by Name</p> */}
    </div>
  );
}

export default SearchBar;
