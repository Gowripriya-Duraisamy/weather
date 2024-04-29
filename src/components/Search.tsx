import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SearchOutlined, LocationOn } from "@mui/icons-material/";
import classes from "./Search.module.css";

export const Search = () => {
  return (
    <Grid container spacing={2} className={classes.outerContainer} >
      <Grid item xs={7} className={classes.firstContainer}>
        <TextField
          placeholder="search location"
          variant="standard"
          className={classes.input}
          onChange={() => {}}
          InputProps={{
            disableUnderline: true,
          }}
        />

        <IconButton>
          <SearchOutlined style={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <LocationOn style={{ color: "white" }} />
        </IconButton>
      </Grid>
      <Grid item xs={5}>
        <Button className={classes.button}>°C</Button>
        <Typography className={classes.seperate}>|</Typography>
        <Button className={classes.button}>°F</Button>
      </Grid>
    </Grid>
  );
};
