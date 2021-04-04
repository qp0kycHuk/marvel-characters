import { Container, LinearProgress } from "@material-ui/core";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CharacterList from "./CharacterList";
import Header from "./Header";



export function PageHome() {


  const characters = useSelector((state) => state.characters);

  return (
    <Fragment>
     <Header></Header>

      <CharacterList></CharacterList>

    </Fragment>
  );
}

export default PageHome;
