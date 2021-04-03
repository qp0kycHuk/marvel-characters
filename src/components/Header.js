import { AppBar, Container, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";








const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    marginLeft: theme.spacing(2)
  }
}))


export function Header({ title }) {

  const classes = useStyles();

  return (

    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" className={classes.header}>
          <Link to='/' >
            <IconButton
              edge="start"

              color="inherit"
              aria-label="open drawer"
            >
              <HomeIcon style={{ color: '#fff' }} />
            </IconButton>
          </Link>
          <Typography variant="h6" noWrap  className={classes.title}>{title}</Typography>
        </Container>
      </Toolbar>
    </AppBar>

  );
}

export default Header;