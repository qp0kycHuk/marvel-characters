
import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import { Fragment } from "react";
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  name: {

  },
  desc: {

  },
}))

export function CharacterItem() {
  const classes = useStyles();

  const name = 'name';
  const desc = 'desc';
  const id = 'name-of-character';

  return (
    <Link to={'/detail/' + id}>
      <Card>
        <CardMedia
          image="https://picsum.photos/id/684/600/400"
          height="140"
          component="img"
        ></CardMedia>
        <CardContent>
          <Typography variant="h4" noWrap className={classes.name}>{name}</Typography>
          <Typography variant="p" noWrap className={classes.desc}>{desc}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CharacterItem;