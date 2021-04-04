import { CLEAR_CHARACTERS, FETCH_CHARACTERS, SET_SEARCH } from "./types";




const initialState = {
  characters: {
    total: 0,
    offset: 0,
    items: {}
  },
  search: {
    total: 0,
    value: '',
    offset: 0
  }

}








export const rootReduser = (state = initialState, action) => {
  switch (action.type) {

    case CLEAR_CHARACTERS:
      return {
        ...state,
        characters: { ...initialState.characters }
      }
    case FETCH_CHARACTERS:
      {
        const newCharacters = { ...state.characters.items };

        for (let i = 0; i < action.payload.characters.results.length; i++) {
          const item = action.payload.characters.results[i];
          newCharacters[item.id] = item;

        }

        return {
          ...state,
          characters: {
            ...state.characters,
            total: action.payload.characters.total,
            offset: action.payload.characters.offset + action.payload.characters.count,
            items: { ...newCharacters }
          },
          search: {
            ...state.search,
            offset: action.payload.characters.offset + action.payload.characters.count,
            total: action.payload.characters.total,
          }
        }

      }

    case SET_SEARCH:
      return {
        ...state,
        search: {
          ...state.search,
          value: action.payload
        }
      }

    default:
      return state;
  }


};