import { Container } from "@material-ui/core";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import CharacterList from "./CharacterList";
import Header from "./Header";



export function PageHome() {
  return (
    <Fragment>
      <Header title='Home'></Header>
      <Container maxWidth="lg">
        <CharacterList></CharacterList>
      </Container>
    </Fragment>
  );
}

export default PageHome;
