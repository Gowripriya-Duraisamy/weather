import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SearchOutlined, LocationOn } from "@mui/icons-material/";
import classes from "./Search.module.css";

export const Search = () => {
  return (
    <Grid container spacing={2} className={classes.outerContainer}>
      <Grid item xs={8}>
        <TextField
          placeholder="search location"
          variant="standard"
          onChange={() => {}}
        />

        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <LocationOn />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        <Button classes={classes.button} >°C</Button>
        <Typography className={classes.seperate}>|</Typography>
        <Button classes={classes.button}>°F</Button>
      </Grid>
    </Grid>
  );
};
