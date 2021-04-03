import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';





export const store = createStore(
  rootReduser,
  compose(
    applyMiddleware(thunk)
  )
);

export default store;