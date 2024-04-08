import { Button, Grid, Input, Typography } from "@mui/material";
import { SearchOutlined, LocationOn } from "@mui/icons-material/";

export const Search = () => {
  return (
        <Grid container spacing={2} justifyContent="center">
        <Grid item><Input onChange={() => {}} /></Grid>
        <Grid item><SearchOutlined /></Grid>
        <Grid item><LocationOn /></Grid>
          <Grid item>
            <Button variant="contained">
              °C
            </Button>
          </Grid>
          <Grid item>
            <Typography>|</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained">
              °F
            </Button>
          </Grid>
        </Grid>
  );
};
