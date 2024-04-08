import { Card, CardContent, Typography } from "@mui/material";
import { DateTime } from "luxon";

const TimeAndLocation = () => {
    return (
      <>
        <CardContent>
          <Typography>
            {DateTime.now().toFormat("cccc, dd LLL yyyy' | Local time: 'hh:mm a")}
          </Typography>
        </CardContent>
  
        <CardContent className="flex items-center justify-center my-3">
          <Typography className="text-white text-3xl font-medium">name</Typography>
      </CardContent>
      </>)
}

export default TimeAndLocation;