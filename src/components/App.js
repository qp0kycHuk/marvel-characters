import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import PageHome from './PageHome';
import { clearCharacters, fetchCharacters } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CharacterDetail from "./CharacterDetail";
import { useState } from "react";
import Header from "./Header";





export function App() {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.search.value);



  useEffect(() => {
    console.log(searchString);
    dispatch(clearCharacters())
    dispatch(fetchCharacters({ search: searchString }))




  }, [searchString])






  return (

    <Router>
      
      <Switch>
        <Route path="/character/:id" children={<CharacterDetail />} />
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
