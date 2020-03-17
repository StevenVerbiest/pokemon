import styled from "styled-components";
import { colors } from "../../style/theme";

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: ${colors.theme.yellow};
  font-weight: bold;
  text-transform: uppercase;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  border: 2px solid ${colors.theme.blue};
`;

export const List = styled.ul`
  list-style: none;
  margin: 16px auto;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 8px;
  background: ${colors.theme.blue};
  border-radius: 4px;
  color: ${colors.theme.yellow};
  text-transform: uppercase;
  &:hover {
    background: ${colors.theme.yellow};
    color: ${colors.theme.blue};
    cursor: pointer;
  }
  & + & {
    margin-top: 4px;
  }
`;
