import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "asid main"`,
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        nav
      </GridItem>

      <GridItem area={"asid"} bg={"gold"} hideBelow={"lg"}>
        asid
      </GridItem>

      <GridItem area={"main"} bg={"dodgerblue"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
