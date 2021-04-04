import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { rootReduser } from "../redux/rootReducer";



export const store = createStore(
  rootReduser,
  compose(
    applyMiddleware(thunk)
  )
);

export default store;