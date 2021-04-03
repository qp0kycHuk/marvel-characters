import { FETCH_CHARACTERS } from "./types";




const initialState = {
  characters: []
}








export const rootReduser = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CHARACTERS:
      return { ...state, characters: action.payload.characters }


    default:
      return state;
  }


};