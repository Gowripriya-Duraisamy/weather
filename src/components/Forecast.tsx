import { Divider, Grid, Typography } from "@mui/material";
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
    <>
      <Typography>{title}</Typography>
      <Divider className={classes.divider}></Divider>
      <Grid container>
        {hour?.map((val, index) => {
          return <Grid key={index} item>
            <Typography>{formatToLocalTime(val.dt, timezone, 'hh:mma')}</Typography>
             <img src={convertToIcon(val.weather[0].icon || '')}></img>
             <Typography>{val.temp}°</Typography>
          </Grid>;
        })}
      </Grid>
      <Grid container>
        {daily?.map((val, index) => {
          return <Grid key={index} item>
            <Typography>{formatToLocalTime(val.dt, timezone, 'ccc')}</Typography>
             <img src={convertToIcon(val.weather[0].icon || '')}></img>
             <Typography>{val.temp.day}°</Typography>
          </Grid>;
        })}
      </Grid>
    </>
  );
};

export default ForeCast;
