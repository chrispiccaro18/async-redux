import { getCharacters } from '../services/lastAirbenderApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';

export const fetchCharacters = dispatch => {
  return getCharacters()
    .then(characters => {
      dispatch({
        type:FETCH_CHARACTERS,
        payload: characters
      });
    });
};
