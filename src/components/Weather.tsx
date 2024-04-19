import { CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "../store";
import { convertToIcon } from "../slices/weather";
import { Thermostat, Water, WindPower, LightMode, WbTwilight, ArrowUpward, ArrowDownward } from "@mui/icons-material";

const Weather = () => {
    const {current} = useSelector(state => state.weather);
  return (
    <>
      <CardContent>
        <Typography>{current?.weather[0].main}</Typography>
      </CardContent>
      <Grid container>
        <Grid item >
          <img src={convertToIcon(current?.weather[0].icon || '')}></img>
        </Grid>
        <Grid item>
          <Typography>{current?.main.temp}°</Typography>
        </Grid>
        <Grid>
          <Typography><Thermostat></Thermostat>Real fell: {current?.main.feels_like}°</Typography>
          <Typography><Water></Water>Humidity: {current?.main.humidity}%</Typography>
          <Typography><WindPower></WindPower>Wind: {current?.wind.speed} km/h</Typography>
        </Grid>
      </Grid>
      <Grid>
          <Typography>
            <span><LightMode></LightMode> Rise: {current?.sys.sunrise} | </span>
            <span><WbTwilight></WbTwilight> Set: {current?.sys.sunset} | </span>
            <span><ArrowUpward></ArrowUpward> High: {current?.main.temp_max} | </span>
            <span><ArrowDownward></ArrowDownward> Low: {current?.main.temp_min}</span>
          </Typography>
        </Grid>
    </>
  );
};

export default Weather;
