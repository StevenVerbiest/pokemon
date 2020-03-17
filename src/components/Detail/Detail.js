import React from "react";
import { gql } from "apollo-boost";
import { useLazyQuery } from "react-apollo";
import { Flex, Box } from "reflexbox";
import { Stats } from "./Stats";
import { Moves } from "./Moves";
import { ActiveMoves } from "./ActiveMoves";
import { Name, Button } from "./Detail.styled";
import { PokemonContext } from "../../context/PokemonContext";

const DETAIL = gql`
  query PokemonDetail($name: String!) {
    Pokemon(name: $name) {
      id
      name
      image
      types {
        name
      }
      stats {
        name
        value
      }
      moves {
        name
        type
        learnMethod
      }
      abilities {
        name
      }
    }
  }
`;

const maxMoves = 4;

export const Detail = () => {
  const { selectedPokemon, addToSquad } = React.useContext(PokemonContext);
  const [pokemonData, setPokemonData] = React.useState();
  const [activeMoves, setActiveMoves] = React.useState([]);
  const [loadPokemon, { called, loading, data }] = useLazyQuery(DETAIL);

  React.useEffect(() => {
    if (!selectedPokemon) return;

    const { name } = selectedPokemon;
    loadPokemon({
      variables: { name }
    });
  }, [loadPokemon, selectedPokemon]);

  React.useEffect(() => {
    if (!data) return;
    setPokemonData(data.Pokemon);
  }, [data]);

  if (called && loading) return <>Loading...</>;
  if (!pokemonData) return null;

  const { image, name, stats, moves } = pokemonData;

  const savePokemon = () => {
    addToSquad({ ...pokemonData, activeMoves });
  };

  const updateActiveMoves = move => {
    let updatedMoves;
    const isActiveMove = activeMoves.some(
      activeMove => activeMove.name === move.name
    );

    if (isActiveMove) {
      updatedMoves = activeMoves.filter(
        activeMove => activeMove.name !== move.name
      );
    } else {
      if (activeMoves.length === maxMoves) return;
      updatedMoves = [...activeMoves, move];
    }

    setActiveMoves(updatedMoves);
  };

  return (
    <Flex>
      <Box width={3 / 16} p={2}>
        <img alt={name} src={image} />
        <Name>{name}</Name>
        <Button onClick={savePokemon}>Save pokemon</Button>
      </Box>
      <Box width={7 / 16} p={2}>
        <Stats stats={stats} />
        <ActiveMoves moves={activeMoves} />
      </Box>
      <Box width={6 / 16} p={2}>
        <Moves moves={moves} onChangeMove={updateActiveMoves} />
      </Box>
    </Flex>
  );
};
