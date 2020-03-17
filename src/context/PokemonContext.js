import React from "react";

const maxSquad = 6;

export const PokemonContext = React.createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = React.useState(null);
  const [squad, setSquad] = React.useState([]);

  const addToSquad = selectedPokemon => {
    if (squad.length === maxSquad) return;

    const inSquad = squad.some(
      pokemon => pokemon.name === selectedPokemon.name
    );
    if (inSquad) return;

    setSquad([...squad, selectedPokemon]);
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, setSelectedPokemon, squad, addToSquad }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
