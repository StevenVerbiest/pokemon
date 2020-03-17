import React from "react";
import { Flex, Box } from "reflexbox";
import { StatHeading, StatName, StatValue } from "./Stats.styled";

export const Stats = ({ stats }) => {
  return (
    <>
      <StatHeading>Stats</StatHeading>
      <Flex flexWrap="wrap">
        {stats.map((stat, index) => (
          <Box width={1 / 2} key={`${stat}-${index}`}>
            <Flex alignItems="flex-end" justifyContent="flex-end">
              <StatName>{stat.name}</StatName>
              <StatValue>{stat.value}</StatValue>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );
};
