import "./PokemonDetailMain.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemonsContext } from "../context/PokemonsContext";

function PokemonDetailMain() {
  const { pokemon } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [speciesData, setSpeciesData] = useState(null);
  const { resetPokemonList } = usePokemonsContext();

  useEffect(() => {
    const getPokemon = async (url) => {
      try {
        //if user turn back >> reset pokemon list
        resetPokemonList();
        //get pokemonData
        const response = await fetch(url);
        const data = await response.json();
        //get speciesData
        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();

        //set pokemon datas
        setPokemonData(data);
        setSpeciesData(speciesData);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    // eslint-disable-next-line
  }, []);

  const flavorText = () => {
    const pokemonText = speciesData.flavor_text_entries
      .filter((text) => text.version.name === "red")
      .map((text) => {
        return text.flavor_text;
      })[0];
    const flavorText = pokemonText.replace(/(\r\n|\n|\r|\f)/gm, " ");
    return <h3 className="flavorText">{flavorText}</h3>;
  };

  const informationContainer = () => {
    const category = speciesData.genera
      .filter((category) => category.language.name === "en")
      .map((category) => {
        return (
          <li key={category.language.name} className="information-values">
            {category.genus}
          </li>
        );
      });

    const abilities = pokemonData.abilities
      .filter((ability) => ability.is_hidden === false)
      .map((ability) => {
        return (
          <li key={ability.slot} className="information-values">
            {ability.ability.name}
          </li>
        );
      });

    return (
      <div className="information-container">
        <div className="container-part">
          <ul className="information-height-weight">
            <li className="information-header">Height</li>
            <li className="information-values">{pokemonData.height / 10} m</li>
            <li className="information-header">Weight</li>
            <li className="information-values">{pokemonData.weight / 10} kg</li>
          </ul>
        </div>
        <div className="container-part">
          <ul className="information-category-abilities">
            <li className="information-header">Category</li>
            {category}
            <li className="information-header">Abilities</li>
            {abilities}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="PokemonDetailMain">
      {pokemonData ? (
        <>
          <div className="pokemonDetail-container">
            <h1 className="pokemonName">{pokemonData.name}</h1>
            <div className="pokemon-container">
              <img
                src={
                  pokemonData.sprites.other["official-artwork"].front_default
                }
                alt={pokemonData.name}
              ></img>
              <div className="pokemon-profile">
                {flavorText()}
                {informationContainer()}
                <h3 className="type-header">Type</h3>
                <div className="types">
                  {pokemonData.types.map((type) => {
                    return (
                      <span key={type.slot} className={type.type.name}>
                        {type.type.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PokemonDetailMain;
