import { Button, CardContent } from "@mui/material";
import { CITIES } from "../constants";
import { useDispatch, useSelector } from "../store";
import { changeCity, getWeather } from "../slices/weather";
import classes from "./Cities.module.css"

export const CitiesButton = () => {
  const dispatch = useDispatch();
  const unit = useSelector(state => state.weather.unit);

  const handleButtonClick = (name: string) => {
    dispatch(changeCity(name))
    dispatch(getWeather(name, unit));
  };
  return (
    <CardContent>
      {CITIES.map((city) => {
        return (
          <Button className={classes.button} key={city.id} onClick={() => handleButtonClick(city.title)}>
            {city.title}
          </Button>
        );
      })}
    </CardContent>
  );
};
