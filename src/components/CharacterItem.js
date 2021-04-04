
import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import { Fragment } from "react";
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  name: {
    textDecoration: 'none'
  },
  desc: {
    textDecoration: 'none'
  },
  link: {
    textDecoration: 'none',
    height:'100%'
  },
  card:{
    height:'100%' 
  }
}))

export function CharacterItem({ character }) {
  const classes = useStyles();




  return (
    <Link to={'/character/' + character.id} className={classes.link}>
      <Card  className={classes.card}>
        <CardMedia
          image={character.thumbnail.path + '.' + character.thumbnail.extension}
          height="300"
          component="img"
        ></CardMedia>
        <CardContent>
          <Typography variant="h6" noWrap className={classes.name}>{character.name}</Typography>
          <Typography noWrap className={classes.desc}>{character.description}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CharacterItem;