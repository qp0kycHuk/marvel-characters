
import { CircularProgress, Container, Grid, LinearProgress, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../redux/actions";
import CharacterItem from "./CharacterItem";


const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: theme.spacing(2),
  },
  progress: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: 'max-content'
  }
}))



export function CharacterList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [fetching, setFetching] = useState(false);


  const total = useSelector((state) => state.characters.total);
  const characters = useSelector((state) => state.characters.items);
  let charactersArr = [];
  const searchString = useSelector((state) => state.search.value);



  for (const i in characters) {
    if (!Object.hasOwnProperty.call(characters, i)) continue;
    charactersArr.push(characters[i]);

  }

  charactersArr.sort((a, b) => a.name < b.name ? -1 : 1);



  const scrollHandler = (event) => {
    if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 200
      && total > charactersArr.length
    ) {
      setFetching(true);
    }
  }

  useEffect(() => {
    if (fetching) {
      dispatch(fetchCharacters({
        callback: () => setFetching(false),
        search: searchString
      }));
    }
  }, [fetching])

  useEffect(() => {
    document.removeEventListener('scroll', scrollHandler)
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)

    }
  }, [total, searchString, characters])


  if (charactersArr.length == 0) {
    return <LinearProgress color="secondary" />
  }

  return (

    <Container maxWidth="lg">
      <Grid container spacing={2} className={classes.list}>
        {charactersArr.map((character) =>
          <Grid key={character.id} item xs={12} sm={6} md={3}>
            <CharacterItem character={character} />
          </Grid>
        )}




      </Grid>

      {fetching && <div className={classes.progress}><CircularProgress color="secondary" /></div>}


    </Container>

  );
}

export default CharacterList;