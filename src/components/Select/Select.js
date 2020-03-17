import React from "react";
import { gql } from "apollo-boost";
import Downshift from "downshift";
import { useQuery } from "react-apollo";
import { Search, Label, Input, List, ListItem } from "./Select.styled";
import { PokemonContext } from "../../context/PokemonContext";

const LIST_ALL = gql`
  query AllPokemon {
    Pokemons(first: 151) {
      id
      name
    }
  }
`;

export const Select = () => {
  const { setSelectedPokemon } = React.useContext(PokemonContext);
  const { data, loading } = useQuery(LIST_ALL);
  const [result, setResult] = React.useState([]);

  React.useEffect(() => {
    if (!data) return;
    setResult(data.Pokemons);
  }, [data]);

  if (loading) return <>Loading...</>;

  return (
    <>
      <Downshift
        onChange={setSelectedPokemon}
        itemToString={item => (item ? item.name : "")}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          inputValue
        }) => (
          <div>
            <Search>
              <Label {...getLabelProps()}>Select a pokemon</Label>
              <Input {...getInputProps()} placeholder="Type to filter" />
            </Search>
            <List {...getMenuProps()}>
              {result
                .filter(item => item.name.startsWith(inputValue))
                .map((item, index) => (
                  <ListItem
                    {...getItemProps({
                      key: item.name,
                      index,
                      item
                    })}
                  >
                    {item.name}
                  </ListItem>
                ))}
            </List>
          </div>
        )}
      </Downshift>
    </>
  );
};
