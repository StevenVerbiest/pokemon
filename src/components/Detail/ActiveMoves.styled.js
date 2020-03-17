import styled from "styled-components";
import { Box } from "reflexbox";
import { colors } from "../../style/theme";

export const Move = styled(Box)`
  margin: 4px;
  border: 1px solid ${colors.theme.blue};
`;

export const MoveType = styled(Box)`
  color: ${colors.theme.yellow};
  font-size: 12px;
`;
