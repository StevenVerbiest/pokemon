import React from "react";
import { Flex, Box } from "reflexbox";
import { Move, MoveType } from "./ActiveMoves.styled";

export const ActiveMoves = ({ moves = [] }) => {
  return (
    <>
      {moves.length > 0 && (
        <Flex flexWrap="wrap">
          {moves.map(move => (
            <Box p={1} width={1 / 2} key={`${move.name}`}>
              <Move p={1}>
                <MoveType>{move.type}</MoveType>
                {move.name}
              </Move>
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
};
