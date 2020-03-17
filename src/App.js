import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./graphql";
import { GlobalStyle } from "./style/global";
import { Container } from "./components/Container/Container";
import { PokemonProvider } from "./context/PokemonContext";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <PokemonProvider>
        <Container />
      </PokemonProvider>
    </ApolloProvider>
  );
};

export default App;
