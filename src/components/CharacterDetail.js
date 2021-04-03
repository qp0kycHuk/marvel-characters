
import { Card, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Fragment } from "react";
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  name: {

  },
  desc: {

  },
}))

export function CharacterDetail() {
  const classes = useStyles();

  const name = 'name';
  const desc = 'desc';
  const id = 'name-of-character';

  return (
    <Container maxWidth="lg">

    </Container>
  );
}

export default CharacterDetail;