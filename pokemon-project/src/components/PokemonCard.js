import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePokemonsContext } from "../context/PokemonsContext";
import notFound from "../assets/not-found.svg";

function PokemonCard() {
  const { pokemonList } = usePokemonsContext();
  const [pokemonDetails, setPokemonDetails] = useState([]);

  //fetch pokemonList
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
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPokemonDetails([]);
      return;
    }
  }, [pokemonList]);

  return (
    <ul className="PokemonList">
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
                      pokemon.sprites.other["official-artwork"].front_default
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
        <p>Loading...</p>
      )}
    </ul>
  );
}

export default PokemonCard;
