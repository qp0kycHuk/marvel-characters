import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import PageHome from './PageHome';
import PageDetail from './PageDetail';
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { Fragment } from "react";
import { character } from "../api";



export function App() {


  character
    .fetch()
    .then((data) => {
      console.log(data);
    })

  return (
    <Router>
      <Switch>
        <Route path="/detail/:id" children={<PageDetail />} />
        <Route path="/">
          <PageHome />
        </Route>
      </Switch>
    </Router>
  )


}


function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
