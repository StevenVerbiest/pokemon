import React from "react";
import { Flex, Box } from "reflexbox";
import { Select } from "../Select/Select";
import { Detail } from "../Detail/Detail";
import { Squad } from "../Squad/Squad";
import { Wrapper, Logo } from "./Container.styled";

export const Container = React.memo(() => {
  return (
    <Wrapper>
      <Box p={3}>
        <Logo src="https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg" />
      </Box>
      <Flex>
        <Box width={[1 / 5]}>
          <Select />
        </Box>
        <Box width={[4 / 5]}>
          <Detail />
        </Box>
      </Flex>
      <Squad />
    </Wrapper>
  );
});
