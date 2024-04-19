import { CardContent, Typography } from "@mui/material";
import { useSelector } from "../store";
import { formatToLocalTime } from "../slices/weather";

const TimeAndLocation = () => {
  const {current, forecast} = useSelector(state => state.weather);
    return (
      <>
        <CardContent>
          <Typography>
            {!!current?.dt && !!forecast?.timezone &&formatToLocalTime(current?.dt, forecast?.timezone)}
          </Typography>
        </CardContent>
  
        <CardContent>
          <Typography>{current?.name}, {current?.sys.country}</Typography>
      </CardContent>
      </>)
}

export default TimeAndLocation;