
import { Card, CardContent, CardMedia, Grid, makeStyles } from "@material-ui/core";
import { Fragment } from "react";
import CharacterItem from "./CharacterItem";


const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: theme.spacing(2),
  },

}))



export function CharacterList() {
  const classes = useStyles();


  return (
    <Fragment>
      <Grid container spacing={2} className={classes.list}>

        <Grid item xs={3}><CharacterItem /></Grid>
        <Grid item xs={3}><CharacterItem /></Grid>
        <Grid item xs={3}><CharacterItem /></Grid>
        <Grid item xs={3}><CharacterItem /></Grid>


      </Grid>

    </Fragment>
  );
}

export default CharacterList;