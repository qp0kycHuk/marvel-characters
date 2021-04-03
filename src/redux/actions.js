import { character } from "../api"





export function fetchCharacters() {
  return (dispatch) => {
    character.fetch()
      .then((data) => {
        console.log(data);
      })
  }
}