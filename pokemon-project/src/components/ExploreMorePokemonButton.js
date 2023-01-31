import { useNavigate } from "react-router-dom";

function ExploreMorePokemonButton() {
  const navigate = useNavigate();

  const navigateToPokedex = () => {
    // navigate to "/pokedex"
    navigate("/pokedex");
  };

  return (
    <div className="ExploreButton-Container">
      <button
        className="ExploreMorePokemonButton"
        onClick={(e) => {
          navigateToPokedex();
        }}
      >
        Explore More Pokemon
      </button>
    </div>
  );
}

export default ExploreMorePokemonButton;
