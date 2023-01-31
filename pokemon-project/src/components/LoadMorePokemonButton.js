import { usePokemonsContext } from "../context/PokemonsContext";

function LoadMorePokemonButton() {
  const { getPokemons, nextUrl, loadButtonIsVisible } = usePokemonsContext();

  return (
    <div
      className={`LoadButton-Container ${
        loadButtonIsVisible === true ? `Visible` : `Hidden`
      }`}
    >
      <button
        className="LoadMorePokemonButton"
        onClick={(e) => {
          getPokemons(nextUrl);
        }}
      >
        Load More Pokemon
      </button>
    </div>
  );
}

export default LoadMorePokemonButton;
