const BASE_URL = 'https://last-airbender-api.herokuapp.com/api';

export function getCharacters() {
  return fetch(`${BASE_URL}/v1/characters`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, body]) => {
      if(!ok) throw 'Could not fetch characters';
      return body;
    });
}

export function getCharacter(id) {
  return fetch(`${BASE_URL}/v1/characters/${id}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, body]) => {
      if(!ok) throw 'Could not fetch character';
      return body;
    });
}
