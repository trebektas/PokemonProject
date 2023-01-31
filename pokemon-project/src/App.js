import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import { PokemonsProvider } from "./context/PokemonsContext";

function App() {
  return (
    <div className="App">
      <PokemonsProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/pokedex" element={<PokedexPage />} />
            <Route path="/pokedex/:pokemon" element={<PokemonDetailPage />} />
          </Routes>
        </Router>
      </PokemonsProvider>
    </div>
  );
}

export default App;
