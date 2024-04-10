import { Button, CardContent } from "@mui/material";
import { CITIES } from "../constants";
import { useDispatch } from "../store";
import { getWeather } from "../slices/weather";

export const CitiesButton = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (name: string) => {
    dispatch(getWeather(name));
  };
  return (
    <CardContent>
      {CITIES.map((city) => {
        return (
          <Button key={city.id} onClick={() => handleButtonClick(city.title)}>
            {city.title}
          </Button>
        );
      })}
    </CardContent>
  );
};
