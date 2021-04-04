



const apiUrl = 'https://web-jedi.ru/dev.marvel';
const charactersApiUrl = apiUrl + '/fetchCharacters.php'


class CharacterFetch {
  fetch(options = { offset: 0 }) {
    let url = charactersApiUrl + '?offset=' + options.offset;
    if (options.id) url += '&id=' + options.id;
    if (options.search) url += '&search=' + options.search;

    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.code == 200) {
          this.offset = response.data.offset + response.data.count;
          return response.data
        }
      })
  }
}


export const character = new CharacterFetch();