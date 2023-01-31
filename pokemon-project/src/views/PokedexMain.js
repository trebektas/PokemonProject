import "./PokedexMain.css";
import LoadMorePokemonButton from "../components/LoadMorePokemonButton";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";

function PokedexMain() {
  return (
    <div className="PokedexMain">
      <SearchBar />
      <PokemonList />
      <LoadMorePokemonButton />
    </div>
  );
}

export default PokedexMain;
