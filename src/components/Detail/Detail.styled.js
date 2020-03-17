import styled from "styled-components";
import { colors } from "../../style/theme";

export const Name = styled.h2`
  margin-bottom: 8px;
  font-size: 20px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  cursor: pointer;
  background: ${colors.theme.blue};
  border: none;
  padding: 8px;
  border: none;
  color: ${colors.theme.white};
  &:hover {
    background: ${colors.theme.yellow};
  }
`;
