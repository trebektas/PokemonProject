import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePokemonsContext } from "../context/PokemonsContext";
import notFound from "../assets/not-found.svg";
import loading from "../assets/pokeball-loading-animation.gif";

function PokemonCard() {
  const { pokemonList, addPokedexErrorMessage, pokedexErrorMessage } =
    usePokemonsContext();
  const [pokemonDetails, setPokemonDetails] = useState([]);

  //fetch url/urls on every pokemonList change
  useEffect(() => {
    if (pokemonList.length > 0) {
      Promise.all(
        pokemonList.map((pokemon) => {
          return fetch(pokemon.url);
        })
      )
        .then((respones) =>
          Promise.all(respones.map((response) => response.json()))
        )
        .then((datas) => {
          return setPokemonDetails(datas);
        })
        .catch((error) => {
          console.log(error);
          addPokedexErrorMessage(error);
        });
    } else {
      setPokemonDetails([]);
      return;
    }
    // eslint-disable-next-line
  }, [pokemonList]);

  return (
    <ul className="PokemonList">
      <>
        {pokedexErrorMessage ? (
          <p className="error-message">
            Oops, something went wrong while loading pokedex pokemons
          </p>
        ) : (
          <>
            {pokemonDetails.length > 0 ? (
              <>
                {pokemonDetails.map((pokemon) => {
                  return (
                    <li key={pokemon.id} className="PokemonCard">
                      <Link
                        className="pokemon-detail-link"
                        to={`/pokedex/${pokemon.name}`}
                      >
                        <img
                          src={
                            pokemon.sprites.other["official-artwork"]
                              .front_default
                              ? pokemon.sprites.other["official-artwork"]
                                  .front_default
                              : notFound
                          }
                          alt={pokemon.name}
                        ></img>
                      </Link>
                      <h4>{pokemon.name}</h4>
                      <div className="types">
                        {pokemon.types.map((item, index) => {
                          return (
                            <span key={index} className={item.type.name}>
                              {item.type.name}
                            </span>
                          );
                        })}
                      </div>
                    </li>
                  );
                })}
              </>
            ) : (
              <div className="loading-container">
                <img
                  src={loading}
                  alt="loading..."
                  className="loading-img"
                ></img>
                <p className="loading-p">Loading...</p>
              </div>
            )}
          </>
        )}
      </>
    </ul>
  );
}

export default PokemonCard;
