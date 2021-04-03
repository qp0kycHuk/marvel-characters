import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { Fragment } from "react";
import { useParams, useRouteMatch } from "react-router";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";

export function PageDetail() {
  let { id } = useParams();
  const { path } = useRouteMatch();


  return (
    <Fragment>
      <Header></Header>
      <CharacterDetail></CharacterDetail>
    </Fragment>
  );
}

export default PageDetail;