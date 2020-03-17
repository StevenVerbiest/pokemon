import styled from "styled-components";
import { colors } from "../../style/theme";

export const StatHeading = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatName = styled.div`
  margin-bottom: 3px;
  color: ${colors.theme.yellow};
  font-size: 12px;
  text-transform: uppercase;
`;

export const StatValue = styled.div`
  margin-left: 4px;
  color: ${colors.theme.blue};
  font-size: 22px;
`;
