import { Box, Divider, Grid, Typography } from "@mui/material";
import { Daily, Hour } from "../slices/weather/types";
import { FC } from "react";
import classes from "./Forecast.module.css";
import { convertToIcon, formatToLocalTime } from "../slices/weather";

export interface Forecastprops {
  hour?: Hour[];
  daily?: Daily[];
  title: string;
  timezone: string
}

const ForeCast: FC<Forecastprops> = ({ hour,daily, title, timezone }) => {
  return (
    <Box>
      <Typography className={classes.titleFont}>{title}</Typography>
      <Divider className={classes.divider}></Divider>
      <Grid container >
        {hour?.map((val, index) => {
          return <Grid key={index} item className={classes.forecastContainer}>
            <Typography className={classes.timeFont}>{formatToLocalTime(val.dt, timezone, 'hh:mma')}</Typography>
             <img className={classes.img} key={index} alt={"forecast"} src={convertToIcon(val.weather[0].icon || '')}></img>
             <Typography className={classes.timeFont}>{val.temp.toFixed()}°</Typography>
          </Grid>;
        })}
      </Grid>
      <Grid container>
        {daily?.map((val, index) => {
          return <Grid key={index} item className={classes.forecastContainer}>
            <Typography className={classes.timeFont}>{formatToLocalTime(val.dt, timezone, 'ccc')}</Typography>
             <img className={classes.img} key={index} alt={"forecast"} src={convertToIcon(val.weather[0].icon || '')}></img>
             <Typography className={classes.timeFont}>{val.temp.day.toFixed()}°</Typography>
          </Grid>;
        })}
      </Grid>
    </Box>
  );
};

export default ForeCast;
