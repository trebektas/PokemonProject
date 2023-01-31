import "./Header.css";
import pokemonLogo from "../assets/pokemonLogo.svg";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="Header">
      <img src={pokemonLogo} alt="Pokemon Logo" width={300}></img>
      <NavBar />
    </div>
  );
}

export default Header;
