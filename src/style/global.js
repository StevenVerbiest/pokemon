import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${colors.theme.blue};
    font-family: "Roboto", Arial, sans-serif;
  }
`;
