import { Box, CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "../store";
import { convertToIcon } from "../slices/weather";
import {
  Thermostat,
  Water,
  WindPower,
  LightMode,
  WbTwilight,
  ArrowUpward,
  ArrowDownward,
} from "@mui/icons-material";
import classes from "./Weather.module.css";
import { color } from "@mui/system";

const Weather = () => {
  const { current } = useSelector((state) => state.weather);
  return (
    <>
      <CardContent>
        <Typography className={classes.weatherFont}>
          {current?.weather[0].main}
        </Typography>
      </CardContent>
      <Grid container className={classes.weatherContainer}>
        <Grid item xs={5}>
          <img src={convertToIcon(current?.weather[0].icon || "")}></img>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.temp}>
            {current?.main.temp.toFixed()}°
          </Typography>
        </Grid>
        <Grid item xs={4} alignItems={"center"} justifyContent={"center"}>
          <Box className={classes.box}>
            <Thermostat className={classes.icon} />
            <Typography className={classes.detailFont}>
              Real fell: {current?.main.feels_like}°
            </Typography>
          </Box>
          <Box className={classes.box}>
            <Water className={classes.icon} />
            <Typography className={classes.detailFont}>
              Humidity: {current?.main.humidity}%
            </Typography>
          </Box>
          <Box className={classes.box}>
            <WindPower className={classes.icon} />
            <Typography className={classes.detailFont}>
              Wind: {current?.wind.speed} km/h
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid className={classes.dayDetails}>
        <Box className={classes.box}>
          <span className={classes.box}>
            <LightMode className={classes.icon} />
            <Typography className={classes.detailFont}>
              {" "}
              Rise: {current?.sys.sunrise} |{" "}
            </Typography>
          </span>
          <span className={classes.box}>
            <WbTwilight className={classes.icon} />
            <Typography className={classes.detailFont}>
              {" "}
              Set: {current?.sys.sunset} |
            </Typography>
          </span>
          <span className={classes.box}>
            <ArrowUpward className={classes.icon} />
            <Typography className={classes.detailFont}>
              {" "}
              High: {current?.main.temp_max} |
            </Typography>
          </span>
          <span className={classes.box}>
            <ArrowDownward className={classes.icon} />
            <Typography className={classes.detailFont}>
              {" "}
              Low: {current?.main.temp_min}{" "}
            </Typography>
          </span>
        </Box>
      </Grid>
    </>
  );
};

export default Weather;
