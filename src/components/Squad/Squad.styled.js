import styled from "styled-components";
import { colors } from "../../style/theme";

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 0 8px;
  background: ${props => colors.type[props.variant]};
  > * {
    margin: 8px 0;
    color: ${colors.theme.white};
  }
`;

export const CardTitle = styled.h3`
  color: ${colors.theme.white};
  text-align: center;
`;

export const CardMove = styled.div`
  padding: 8px;
  margin-bottom: 4px;
  background: ${colors.theme.white};
  border-radius: 4px;
  color: ${colors.theme.blue};
`;
