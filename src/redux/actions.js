import { character } from "../api"
import { FETCH_CHARACTERS, SET_SEARCH, FETCH_SEARCH, CLEAR_CHARACTERS } from "./types";



export function setSearch(searchValue) {
  return {
    type: SET_SEARCH,
    payload: searchValue
  }
}

export function clearCharacters(options = {}) {
  return {
    type: CLEAR_CHARACTERS,
  }

}

export function fetchCharacters(options = {}) {
  return (dispatch, getState) => {


    character.fetch({
      id: options.id,
      offset: getState().characters.offset,
      search: options.search,
    })
      .then((data) => {
        console.log(data);
        dispatch({
          type: FETCH_CHARACTERS,
          payload: {
            characters: data,
          },
        })
      })
      .catch((e) => {
        console.log(e.message);
      })
      .finally(() => {
        if (options.callback) {
          options.callback();
        }
      })
  }
}

// export function fetchSearch(options = {}) {
//   return (dispatch, getState) => {

//     character.fetch({
//       id: options.id,
//       offset: getState().characters.offset,
//       search: options.search
//     })
//       .then((data) => {
//         console.log(data);
//         dispatch({
//           type: FETCH_SEARCH,
//           payload: {
//             characters: data,
//             search: options.search
//           },
//         })


//       })
//       .finally(() => {
//         if (options.callback) {
//           options.callback();
//         }
//       })
//   }
// }