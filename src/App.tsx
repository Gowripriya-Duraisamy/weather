import { Box } from "@mui/material";
import { CitiesButton } from "./components/CitiesButton";
import { Search } from "./components/Search";
import classes from "./App.module.css"
import TimeAndLocation from "./components/TimeAndLocation";

function App() {
  return (
    <Box className={classes.background}>
      <CitiesButton />
      <Search />
        <TimeAndLocation />
    </Box>
  );
}

export default App;
