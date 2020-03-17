import React from "react";
import { Flex, Box } from "reflexbox";
import { Tab, Link } from "./Moves.styled";
import groupBy from "lodash/groupBy";

export const Moves = ({ moves, onChangeMove }) => {
  const [movesByLearnMethod, setMovesByLearnMethod] = React.useState();
  const [activeTab, setActiveTab] = React.useState(null);
  const [currentMoves, setCurrentMoves] = React.useState([]);
  const [activeMoves, setActiveMoves] = React.useState([]);

  React.useEffect(() => {
    const groupedMoves = groupBy(moves, move => move.learnMethod);
    setMovesByLearnMethod(groupedMoves);
  }, [moves]);

  React.useEffect(() => {
    if (!movesByLearnMethod) return;
    const newActiveMoves = Object.keys(movesByLearnMethod);
    const activeTab = newActiveMoves[0];
    const newMoves = Object.values(movesByLearnMethod[activeTab]);

    setActiveTab(activeTab);
    setActiveMoves(newActiveMoves);
    setCurrentMoves(newMoves);
  }, [movesByLearnMethod]);

  const updateCurrentMoves = moveType => {
    const newMoves = Object.values(movesByLearnMethod[moveType]);
    setActiveTab(moveType);
    setCurrentMoves(newMoves);
  };

  return (
    <>
      <Flex>
        {activeMoves.map((moveType, index) => (
          <Box key={`${moveType}-${index}`} p={1}>
            <Tab
              onClick={() => updateCurrentMoves(moveType)}
              selected={activeTab === moveType}
            >
              {moveType}
            </Tab>
          </Box>
        ))}
      </Flex>
      {currentMoves.map((move, moveIndex) => (
        <Link key={moveIndex} onClick={() => onChangeMove(move)}>
          {move.name}
        </Link>
      ))}
    </>
  );
};
