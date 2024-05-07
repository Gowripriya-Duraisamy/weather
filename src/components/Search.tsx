import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SearchOutlined, LocationOn } from "@mui/icons-material/";
import classes from "./Search.module.css";
import { useDispatch, useSelector } from "../store";
import { changeCity, changeUnits, getForecast, getWeather } from "../slices/weather";
import { ChangeEvent, useState } from "react";

export const Search = () => {
  const { city, unit } = useSelector((state) => state.weather);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleDegreeChange = (unit: string) => {
    dispatch(changeUnits(unit));
    dispatch(getWeather(city, unit));
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        dispatch(getForecast(lat, lon, unit))
      });
    }
  }

  const handleSearch = () => {
    dispatch(changeCity(name));
    setName("");
    dispatch(getWeather(name, unit));
  };

  return (
    <Grid container spacing={2} className={classes.outerContainer}>
      <Grid item xs={7} className={classes.firstContainer}>
        <TextField
          value={name}
          placeholder="search location"
          variant="standard"
          className={classes.input}
          onChange={handleCityChange}
          InputProps={{
            disableUnderline: true,
          }}
        />

        <IconButton onClick={handleSearch}>
          <SearchOutlined style={{ color: "white" }}  />
        </IconButton>
        <IconButton onClick={handleLocationClick}>
          <LocationOn style={{ color: "white" }}  />
        </IconButton>
      </Grid>
      <Grid item xs={5}>
        <Button
          className={classes.button}
          onClick={() => handleDegreeChange("metric")}
        >
          °C
        </Button>
        <Typography className={classes.seperate}>|</Typography>
        <Button
          className={classes.button}
          onClick={() => handleDegreeChange("imperial")}
        >
          °F
        </Button>
      </Grid>
    </Grid>
  );
};
