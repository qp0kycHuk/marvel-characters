



const apiUrl = 'https://gateway.marvel.com:443';
const charactersApiUrl = apiUrl + '/v1/public/characters'
const publicKey = 'c18dd05f55dc0273c7a347014d661725';
const privateKey = 'f9d47ee1d41f60fc73cd7d0b31d492586f4d88ed';

console.log(charactersApiUrl + '?apikey=' + publicKey);
export const character = {
  fetch: () => {
    return fetch(charactersApiUrl + '?apikey=' + publicKey)
      .then((response) => response.json())
  }
}