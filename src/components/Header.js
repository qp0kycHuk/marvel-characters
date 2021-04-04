import { AppBar, Container, fade, IconButton, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/actions";
import { useState } from "react";







const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    marginLeft: theme.spacing(2)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0
  }

}))


export function Header({ detail = false }) {
  const searchString = useSelector((state) => state.search.value);
  const classes = useStyles();
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState(searchString);
  const [dispatchTimeout, setDispatchTimeout] = useState(false);





  const searchChangeHandler = (event) => {
    setSearchValue(event.target.value);

    if (dispatchTimeout)
      clearTimeout(dispatchTimeout);

    setDispatchTimeout(setTimeout(() => {
      dispatch(setSearch(event.target.value));
      console.log(searchValue);
    }, 1000))

  }

  return (

    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Container maxWidth="lg" className={classes.header}>
          <Link to='/' >
            <IconButton
              edge="start"
              aria-label="open drawer"
            >
              <HomeIcon style={{ color: '#fff' }} />
            </IconButton>
          </Link>


          {!detail && <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={searchValue}
              onChange={searchChangeHandler}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>}
        </Container>
      </Toolbar>
    </AppBar>

  );
}

export default Header;