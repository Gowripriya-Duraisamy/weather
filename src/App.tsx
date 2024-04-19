import { Box } from "@mui/material";
import { CitiesButton } from "./components/CitiesButton";
import { Search } from "./components/Search";
import classes from "./App.module.css";
import TimeAndLocation from "./components/TimeAndLocation";
import Weather from "./components/Weather";
import ForeCast from "./components/Forecast";
import { useSelector } from "./store";

function App() {
  const { current, forecast } = useSelector((state) => state.weather);
  return (
    <Box className={classes.background}>
      <CitiesButton />
      <Search />
      {current && (
        <>
          <TimeAndLocation />
          <Weather />
        </>
      )}
      {forecast?.hourly && <ForeCast title="HOURLY FORECAST" hour={forecast.hourly.slice(0, 5)} timezone={forecast.timezone}></ForeCast> }
      {forecast?.daily && <ForeCast title="DAILY FORECAST" daily={forecast.daily.slice(0, 5)} timezone={forecast.timezone}></ForeCast> }
    </Box>
  );
}

export default App;
