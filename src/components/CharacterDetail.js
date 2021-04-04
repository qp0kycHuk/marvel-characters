
import { Card, CardContent, CardMedia, Container, Grid, LinearProgress, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { character } from "../api";
import { fetchCharacters } from "../redux/actions";
import Header from "./Header";


const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 600
  },
  desc: {

  },
  thumb: {

    '& img': {
      width: '100%',
    }

  },
  content: {
    paddingTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  table: {
    marginBottom: theme.spacing(4),
  }
}))

export function CharacterDetail() {
  let { id } = useParams();

  const classes = useStyles();
  const characters = useSelector((state) => state.characters.items);
  const item = characters[id];
  const dispatch = useDispatch();



  useEffect(() => {
    if (!item) {
      dispatch(fetchCharacters({ id: id }));
    }
  }, []);


  if (!item) return (
    <Fragment>
      <Header detail={true}></Header>
      <LinearProgress color="secondary" />
    </Fragment>
  );


  return (
    <Fragment>
      <Header detail={true}></Header>
      <Container maxWidth="lg">
        <Grid container spacing={2} className={classes.content}>
          <Grid item sm={5} xs={12} className={classes.thumb}>
            <img src={item.thumbnail.path + '.' + item.thumbnail.extension} alt="" />
          </Grid>
          <Grid item sm={6} xs={12} >
            <Typography variant='h4' color='primary' className={classes.title}>{item.name}</Typography>
            <Typography >{item.description}</Typography>

          </Grid>
        </Grid>

        <Typography variant='h4' color='primary' className={classes.title}>Comics</Typography>
        <TableContainer className={classes.table} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {item.comics.items.length == 0 &&
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.name} haven't comics
                  </TableCell>
                </TableRow>
              }
              {item.comics.items.map((comics) => (
                <TableRow key={comics.name}>
                  <TableCell component="th" scope="row">
                    {comics.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='h4' color='primary' className={classes.title}>Stories</Typography>
        <TableContainer className={classes.table} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {item.stories.items.length == 0 &&
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.name} haven't stories
                  </TableCell>
                </TableRow>
              }
              {item.stories.items.map((story) => (
                <TableRow key={story.name}>
                  <TableCell component="th" scope="row">
                    {story.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='h4' color='primary' className={classes.title}>Events</Typography>
        <TableContainer className={classes.table} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>

              {item.events.items.length == 0 &&
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.name} haven't events
                  </TableCell>
                </TableRow>
              }
              {item.events.items.map((event) => (
                <TableRow key={event.name}>
                  <TableCell component="th" scope="row">
                    {event.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='h4' color='primary' className={classes.title}>Series</Typography>
        <TableContainer className={classes.table} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {item.series.items.length == 0 &&
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.name} haven't series
                  </TableCell>
                </TableRow>
              }
              {item.series.items.map((serie) => (
                <TableRow key={serie.name}>
                  <TableCell component="th" scope="row">
                    {serie.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


      </Container>
    </Fragment>
  );
}

export default CharacterDetail;