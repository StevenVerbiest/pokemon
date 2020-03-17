import React from "react";
import { Flex, Box } from "reflexbox";
import { Card, CardTitle, CardMove } from "./Squad.styled";
import { PokemonContext } from "../../context/PokemonContext";

export const Squad = () => {
  const { squad } = React.useContext(PokemonContext);

  return (
    <>
      {squad.length > 0 && (
        <Flex alignItems="stretch">
          {squad.map(pokemon => (
            <Box p={2} width={1 / 6} key={`${pokemon.name}`}>
              <Card variant={pokemon.types[0].name}>
                <img alt={pokemon.name} src={pokemon.image} />
                <CardTitle>{pokemon.name}</CardTitle>
                {pokemon.activeMoves && (
                  <div>
                    {pokemon.activeMoves.map(move => (
                      <CardMove key={move.name}>{move.name}</CardMove>
                    ))}
                  </div>
                )}
              </Card>
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
};
