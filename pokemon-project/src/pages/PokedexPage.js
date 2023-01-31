import "./PokedexMain.css";
import LoadMorePokemonButton from "../components/LoadMorePokemonButton";
import PokemonList from "../components/PokemonList";
import { usePokemonsContext } from "../context/PokemonsContext";

function PokedexPage() {
  const { pokedexErrorMessage } = usePokemonsContext();

  return (
    <div className="PokedexMain">
      <>
        {pokedexErrorMessage ? (
          <PokemonList />
        ) : (
          <>
            <PokemonList />
            <LoadMorePokemonButton />
          </>
        )}
      </>
    </div>
  );
}

export default PokedexPage;
