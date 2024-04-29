import { CardContent, Typography } from "@mui/material";
import { useSelector } from "../store";
import { formatToLocalTime } from "../slices/weather";
import classes from "./Location.module.css";

const TimeAndLocation = () => {
  const { current, forecast } = useSelector((state) => state.weather);
  return (
    <>
      <CardContent>
        <Typography className={classes.timeFont}>
          {!!current?.dt &&
            !!forecast?.timezone &&
            formatToLocalTime(current?.dt, forecast?.timezone)}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography className={classes.locationFont}>
          {current?.name}, {current?.sys.country}
        </Typography>
      </CardContent>
    </>
  );
};

export default TimeAndLocation;
