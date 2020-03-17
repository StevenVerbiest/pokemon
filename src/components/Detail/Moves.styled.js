import styled from "styled-components";
import { colors } from "../../style/theme";

export const Tab = styled.div`
  cursor: pointer;
  color: ${colors.theme.yellow};
  text-decoration: ${props => (props.selected ? "underline" : "none")};
  font-size: 12px;
  text-transform: uppercase;
`;

export const Link = styled.button`
  cursor: pointer;
  display: block;
  border: none;
  padding: 0;
  color: ${colors.theme.blue};
`;
